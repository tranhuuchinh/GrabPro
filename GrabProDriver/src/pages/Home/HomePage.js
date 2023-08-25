import * as Location from "expo-location";
import MapView from "react-native-maps";
import geolib from "geolib";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Marker, Polyline } from "react-native-maps";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import ImageMap from "../../assets/imgs/Home/image3.png";
import styles from "./HomePage.style";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faLocationDot,
  faUser,
  faDollarSign,
  faBolt,
  faEllipsis,
  faPowerOff,
  faXmark,
  faChartColumn,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useCustomFonts } from "../../styles/fonts";
import ModalCustom from "../../components/ModalCustom/ModalCustom";
import {
  socketDriver,
  disconnect,
  sendMessage,
  connect,
  listenForMessage,
} from "../../service/socket";
import useAxios from "../../hooks/useAxios";
import ReceiveBill from "../../components/ReceiveBill/ReceiveBill";
import auth from "../../utils/auth";

const HomePage = () => {
  const fontsLoaded = useCustomFonts();
  const [isConnected, setIsConnected] = useState(false);
  const [isIncome, setIsIncome] = useState(false);
  const navigation = useNavigation();
  let socketDriverInstance;
  const [initialState, setInitialState] = useState(false);
  //lấy vị trí hiện tại
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  // const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [coordinate, setCoordinate] = useState([]);
  const [idDriver, setID] = useState();
  const [fromCoordinates, setFromCoordinates] = useState(null);
  const [toCoordinates, setToCoordinates] = useState(null);
  const [directioPoint, setDirectionPoint] = useState("");
  const [customer, setCustomer] = useState();
  const [idOrder, setIdOrder] = useState();

  const [responseDriver, error, isLoading] = useAxios(
    "get",
    `/driver/${AsyncStorage.getItem("_id")}`,
    {},
    {},
    []
  );

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (responseDriver && responseDriver.data !== undefined) {
      auth.type(responseDriver.data);
    }
  }, [isLoading]);

  useEffect(() => {
    const [response, error, isLoading] = useAxios(
      "get",
      `/orders/${idOrder}`,
      {},
      {},
      []
    );

    if (!isLoading && response && response.data !== undefined) {
      // Lấy tọa độ từ dữ liệu response và cập nhật vào state
      setFromCoordinates((prevFromCoords) => ({
        ...prevFromCoords,
        latitude: response.data.from.latitude,
        longitude: response.data.from.altitude,
      }));

      setToCoordinates((prevToCoords) => ({
        ...prevToCoords,
        latitude: response.data.to.latitude,
        longitude: response.data.to.altitude,
      }));

      console.log("fdfjsjkdhkgksdjhfshkj", fromCoordinates);
    }
  }, [idOrder]);

  useEffect(() => {
    // Ở đây bạn có thể sử dụng fromCoordinates và toCoordinates
  }, [fromCoordinates, toCoordinates]);

  const handleToggleConnect = () => {
    setIsConnected((prev) => !prev);
  };

  const retrieveIdFromStorage = async () => {
    try {
      const _id = await AsyncStorage.getItem("_id");
      if (_id !== null) {
        setID(_id);
        // console.log("Giá trị _id từ AsyncStorage:", _id);
        // console.log("fdsfjs" + ids);
      } else {
        console.log("Không tìm thấy giá trị _id trong AsyncStorage");
      }
    } catch (error) {
      console.error("Lỗi khi lấy giá trị _id từ AsyncStorage:", error);
    }
  };

  //Lấy vị trí hiện tại
  const getLocationAsync = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }

    try {
      const location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);

      // Tính khoảng cách bằng cách tính khoảng cách Euclidean giữa hai điểm
      let distance = 0;
      console.log("Vinh vị trí");
      if (fromCoordinates) {
        distance = Math.sqrt(
          Math.pow(location.coords.latitude - fromCoordinates.latitude, 2) +
            Math.pow(location.coords.longitude - fromCoordinates.longitude, 2)
        );
        console.log("Distance to Nearby Point:", distance * 111139, "meters");
      }

      // Với 111139 là giá trị đổi từ độ sang mét tại vĩ độ Hồ Chí Minh
    } catch (error) {
      console.error("Error getting location:", error);
    }
  };

  // Tính toán và hiển thị đường đi
  useEffect(() => {
    console.log("Vinh đường đi");
    if (statePoint == 0) {
      console.log("đương đi" + currentLocation);
      if (currentLocation && fromCoordinates) {
        var request = new XMLHttpRequest();
        request.open(
          "GET",
          `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248f1a1f6627cbd4347adf8adc8296df114&start=${currentLocation.longitude},${currentLocation.latitude}&end=${fromCoordinates.longitude},${fromCoordinates.latitude}`
        );
        request.setRequestHeader(
          "Accept",
          "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8"
        );
        request.onreadystatechange = function () {
          if (this.readyState === 4) {
            const responseObj = JSON.parse(this.responseText);
            const coordinatesA =
              responseObj.features[0].geometry.coordinates.map((coord) => {
                return {
                  latitude: coord[1],
                  longitude: coord[0],
                };
              });
            setCoordinate(coordinatesA);
          }
        };
        request.send();
      }

      setCoordinate([]);
    } else {
      if (toCoordinates && fromCoordinates) {
        var request = new XMLHttpRequest();

        request.open(
          "GET",
          `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248f1a1f6627cbd4347adf8adc8296df114&start=${fromCoordinates.longitude},${fromCoordinates.latitude}&end=${toCoordinates.longitude},${toCoordinates.latitude}`
        );

        request.setRequestHeader(
          "Accept",
          "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8"
        );

        request.onreadystatechange = function () {
          if (this.readyState === 4) {
            const responseObj = JSON.parse(this.responseText);

            const coordinatesA =
              responseObj.features[0].geometry.coordinates.map((coord) => {
                return {
                  latitude: coord[1],
                  longitude: coord[0],
                };
              });
            setCoordinate(coordinatesA);
          }
        };

        request.send();
      }
    }
  }, [directioPoint]);

  useEffect(() => {
    getLocationAsync();

    const interval = setInterval(() => {
      getLocationAsync();
    }, 1000);

    if (isConnected) {
      socketDriverInstance = connect();
      setInitialState(true);

      //Chỗ này làm đăng nhập đăng kí gì đó bỏ IDUser vô chỗ IDAccount
      const object = {
        idAccount: idDriver,
        type: AsyncStorage.getItem("type"), //Type là loại xe của tài xế
      };
      sendMessage("setID", object);

      //Lắng nghe sự kiện bên socket gửi v
      listenForMessage("driverClient", (data) => {
        console.log("Received message from server:", data);
        setCustomer(data);

        //Data nhận về gồm:
        // const data = {
        //   idCustomer: 'sdsdsdsds',
        //   lat: inforCustomer.from.lat,
        //   lon: inforCustomer.from.lng,
        //   idOrder: savedOrder._id,
        // };

        //Chỗ này gửi object gồm vị trí tài xế và id tài xế lên
        const inforDriver = {
          idDriver: idDriver,
          idOrder: idOrder,
          fromDri: {
            lat: fromCoordinates.latitude,
            lng: fromCoordinates.longitude,
          },
          toCus: {
            lat: toCoordinates.latitude,
            lng: toCoordinates.longitude,
          },
        };
        sendMessage("driverClient", inforDriver);
      });

      // Khi trong lắng nghe này có dữ liệu thì hiện cái modal lên
      listenForMessage("requestOrder", (data) => {
        if (data !== null) {
          setShowModal(true);
          setIdOrder(data);
        }
        // Khi có data thì hiện modal lên
        // data ở đây là idOrder lấy idOrder này hiển thị lên modal
      });

      // 1. KHI CHẤP NHẬN CUỐC ĐI
      // - XÁC NHẬN CUỐC ĐI
      const objectAccept = {
        idOrder: idOrder,
        idDriver: idDriver,
        idCustomer: customer.idCustomer,
      };
      sendMessage("acceptOrder", objectAccept);

      // - GỬI THÔNG TIN SAU MỖI 5 GIÂY: Nhớ dùng setTimeOut hay gì đó sau 5 giây gửi một lần
      const objectSendInfo = {
        idCustomer: customer.idCustomer,
        location: {
          lat: currentLocation.latitude,
          lng: currentLocation.longitude,
        },
      };
      sendMessage("followDriver", objectSendInfo);

      // 3. KHI HOÀN THÀNH CUỐC ĐI thì tự gọi API cập nhật status của Order có idOrder ở trên thành 2
      // và không gửi thông tin sau mỗi 5 giây nữa

      // 2. KHI HỦY CUỐC ĐI
      const objectCancel = {
        idDriver: idDriver,
        idOrder: idOrder,
      };
      sendMessage("cancelOrder", objectCancel);
    } else if (!isConnected && initialState === true) {
      console.log("Disconnected from server Driver");
      disconnect();
      setInitialState(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isConnected, fromCoordinates]);

  useEffect(() => {
    setShowModalReceiveBill(false);
    if (isConnected && socketDriver) {
      socketDriver.on("disconnect", () => {
        console.log("Loss internet => Reconnect...");
        socketDriverInstance = connect();
        retrieveIdFromStorage();
        //Chỗ này cũng bỏ idUser vô chỗ IdAccount
        sendMessage("setID", idDriver);
        console.log("Vinh id" + idDriver);
      });
    }
  }, []);

  const handleToggleIncome = () => {
    setIsIncome((prev) => !prev);
  };

  //Modal
  const [showModal, setShowModal] = useState(false);
  const [showModalReceiveBill, setShowModalReceiveBill] = useState(false);
  const [statePoint, setStatePoint] = useState(0);
  useEffect(() => {
    if (response?.data) {
      setShowModal(true); // Hiển thị modal khi có dữ liệu response
      setTimeout(() => {
        setShowModal(false);
        setShowModalReceiveBill(true);
      }, 3000);
    }
  }, [response]);

  const handleMarkerPress = (markerNumber) => {
    console.log(`Pressed marker number ${markerNumber}`);
    setStatePoint(markerNumber);
  };

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.homePageContainer}>
        <View style={{ flex: 1, position: "relative" }}>
          <View style={styles.homePageImage}>
            {currentLocation && (
              <MapView
                style={{ width: "100%", height: "100%" }}
                initialRegion={{
                  latitude: currentLocation.latitude,
                  longitude: currentLocation.longitude,
                  latitudeDelta: 0.001,
                  longitudeDelta: 0.0005,
                }}
                region={{
                  latitude: currentLocation.latitude,
                  longitude: currentLocation.longitude,
                  latitudeDelta: 0.001,
                  longitudeDelta: 0.0005,
                }}
              >
                {currentLocation && (
                  <Marker
                    coordinate={currentLocation}
                    title="Vị trí hiện tại"
                    description="Địa điểm hiện tại của bạn"
                    onPress={() => handleMarkerPress(0)}
                  />
                )}

                {fromCoordinates && (
                  <Marker
                    coordinate={fromCoordinates}
                    title="Địa điểm đón"
                    description="Địa điểm đón khách"
                    pinColor="purple"
                    onPress={() => handleMarkerPress(1)}
                  />
                )}

                {toCoordinates && (
                  <Marker
                    coordinate={toCoordinates}
                    title="Địa điểm trả"
                    description="Địa điểm trả khách"
                    pinColor="blue"
                    onPress={() => handleMarkerPress(2)}
                  />
                )}

                {fromCoordinates && toCoordinates && (
                  <Polyline
                    coordinates={coordinate}
                    strokeColor="#FF0000"
                    strokeWidth={2}
                  />
                )}
                {}
              </MapView>
            )}
          </View>

          <View
            style={{
              width: "100%",
              height: 50,
              top: 50,
              flex: 0.3,
              position: "absolute",
              zIndex: 1000,
              marginLeft: isIncome ? 15 : 0,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <TouchableOpacity
              style={{
                width: isIncome ? "14%" : "40%",
                height: 50,
                position: "absolute",
                paddingHorizontal: 20,
                borderRadius: 50,
                left: 10,
                top: 0,
                backgroundColor: "white",
                zIndex: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={handleToggleIncome}
            >
              {!isIncome ? (
                <View style={styles.homePageConnect}>
                  <FontAwesomeIcon
                    icon={faChartColumn}
                    size={30}
                    color="#000"
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 20,
                      textAlign: "center",
                      color: "black",
                      textAlign: "center",
                      fontFamily: "Poppins_700Bold",
                    }}
                  >
                    Thu nhập
                  </Text>
                </View>
              ) : (
                <View>
                  <View style={styles.homePageConnect}>
                    <FontAwesomeIcon icon={faXmark} size={30} color="#000" />
                  </View>
                  {/* Card1 */}
                  <Pressable
                    onPress={() => {
                      navigation.navigate("/payment");
                    }}
                    style={{
                      width: 180,
                      height: 90,
                      position: "absolute",
                      top: 55,
                      left: -25,
                      backgroundColor: "white",
                      borderRadius: 20,
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 1000,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          marginRight: 10,
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            marginLeft: 20,
                            textAlign: "center",
                            fontFamily: "Poppins_400Regular",
                          }}
                        >
                          Thu nhập
                        </Text>
                        <Text
                          style={{
                            fontSize: 24,
                            marginLeft: 20,
                            textAlign: "center",
                            fontFamily: "Poppins_700Bold",
                          }}
                        >
                          100.000
                        </Text>
                      </View>

                      <View
                        style={{
                          marginLeft: 10,
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          size={30}
                          color="#000"
                        />
                      </View>
                    </View>
                  </Pressable>
                </View>
              )}
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              height: 50,
              bottom: 240,
              flex: 0.3,
              position: "absolute",
              zIndex: 1000,
              marginLeft: isConnected ? 15 : 0,
              justifyContent: isConnected ? "flex-start" : "center",
              alignItems: isConnected ? "flex-start" : "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: isConnected ? "14%" : "45%",
                height: 50,
                position: "absolute",
                paddingHorizontal: 20,
                borderRadius: 50,
                top: 0,
                backgroundColor: isConnected ? "green" : "black",
                zIndex: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={handleToggleConnect}
            >
              {!isConnected ? (
                <View style={styles.homePageConnect}>
                  <FontAwesomeIcon icon={faPowerOff} size={30} color="#fff" />
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 20,
                      textAlign: "center",
                      color: "white",
                      textAlign: "center",
                      fontFamily: "Poppins_700Bold",
                    }}
                  >
                    Bật kết nối
                  </Text>
                </View>
              ) : (
                <View style={styles.homePageConnect}>
                  <FontAwesomeIcon icon={faPowerOff} size={30} color="#fff" />
                </View>
              )}
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              bottom: 0,
              flex: 0.3,
              position: "relative",
            }}
          >
            {!isConnected ? (
              <View style={styles.homePageWrap}>
                <View style={styles.homePageStatus}></View>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 20,
                    textAlign: "center",
                    fontFamily: "Poppins_700Bold",
                  }}
                >
                  Bạn đang offline
                </Text>
              </View>
            ) : (
              <View style={styles.homePageWrap}>
                <View
                  style={{
                    width: 15,
                    borderRadius: 50,
                    height: 15,
                    backgroundColor: isConnected ? "green" : "red",
                    marginLeft: 20,
                  }}
                ></View>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 20,
                    textAlign: "center",
                    fontFamily: "Poppins_700Bold",
                  }}
                >
                  Bạn đang online
                </Text>
              </View>
            )}

            <View style={styles.homePageWrapOption}>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pressable
                  style={styles.homePageOption}
                  onPress={() => {
                    navigation.navigate("/account");
                  }}
                >
                  <FontAwesomeIcon icon={faUser} size={30} color="#fff" />
                </Pressable>
                <Text
                  style={{
                    width: 70,
                    height: 40,
                    fontSize: 12,
                    textAlign: "center",
                  }}
                >
                  Tài khoản
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pressable
                  style={styles.homePageOption}
                  onPress={() => {
                    navigation.navigate("/favorite");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size={30}
                    color="#fff"
                  />
                </Pressable>
                <Text
                  style={{
                    width: 70,
                    height: 40,
                    fontSize: 12,
                    textAlign: "center",
                  }}
                >
                  Yêu thích
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pressable
                  style={styles.homePageOption}
                  onPress={() => {
                    navigation.navigate("/payment");
                  }}
                >
                  <FontAwesomeIcon
                    style={{ width: 70, fontSize: 12 }}
                    icon={faDollarSign}
                    size={30}
                    color="#fff"
                  />
                </Pressable>
                <Text
                  style={{
                    width: 70,
                    height: 40,
                    fontSize: 12,
                    textAlign: "center",
                  }}
                >
                  Thu nhập
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pressable
                  style={styles.homePageOption}
                  onPress={() => {
                    navigation.navigate("/setting");
                  }}
                >
                  <FontAwesomeIcon icon={faBolt} size={30} color="#fff" />
                </Pressable>

                <Text
                  style={{
                    width: 70,
                    height: 40,
                    fontSize: 12,
                    textAlign: "center",
                  }}
                >
                  Tự động nhận
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={styles.homePageOption}>
                  <FontAwesomeIcon icon={faEllipsis} size={30} color="#fff" />
                </View>
                <Text
                  style={{
                    width: 70,
                    height: 40,
                    fontSize: 12,
                    textAlign: "center",
                  }}
                >
                  Xem thêm
                </Text>
              </View>
            </View>
          </View>
        </View>
        {showModal && <ModalCustom orderData={response?.data} />}
        {showModalReceiveBill && (
          <ReceiveBill
            orderData={response?.data}
            point={statePoint}
            handleDrawDirection={setDirectionPoint}
          />
        )}
      </View>
    );
  }
};

export default HomePage;
