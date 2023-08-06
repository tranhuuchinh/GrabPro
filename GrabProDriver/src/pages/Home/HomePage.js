import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
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

const HomePage = () => {
  const fontsLoaded = useCustomFonts();
  const [isConnected, setIsConnected] = useState(false);
  const [isIncome, setIsIncome] = useState(false);
  const navigation = useNavigation();

  const handleToggleConnect = () => {
    setIsConnected((prev) => !prev);
  };

  const handleToggleIncome = () => {
    setIsIncome((prev) => !prev);
  };
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.homePageContainer}>
        <View style={{ flex: 1, position: "relative" }}>
          <View style={styles.homePageImage}>
            <Image
              source={ImageMap}
              style={{ width: "100%", height: "100%" }}
            />
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
      </View>
    );
  }
};

export default HomePage;
