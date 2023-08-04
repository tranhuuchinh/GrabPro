import { StyleSheet, Text, View, Switch } from "react-native";
import React, { useState } from "react";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigate } from "react-router-native";
import Heading from "../../components/Heading/Heading";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const SettingPage = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigate();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const [isEnableds, setIsEnableds] = useState(false);

  const toggleSwitchs = () => {
    setIsEnableds((previousState) => !previousState);
  };

  // <FontAwesomeIcon icon={faXmark} size={30} color="#000" />

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Heading title={"Tất cả cài đặt"} returnPath={"/"} />
        <View
          style={{
            flexDirection: "column",
            margin: 15,
            marginBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#CCCCCC",
          }}
        >
          <Text style={{ fontSize: 16, fontFamily: "Poppins_500Medium" }}>
            Tài khoản
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontFamily: "Poppins_400Regular" }}>
                Trần Hữu Chính
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins_400Regular",
                  color: "#727272",
                }}
              >
                72X1-6249 | +84 377023495
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} size={20} color="#000" />
            </View>
          </View>
        </View>

        {/* Mục 2 */}
        <View
          style={{
            flexDirection: "column",
            margin: 15,
            marginBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#CCCCCC",
          }}
        >
          <Text style={{ fontSize: 16, fontFamily: "Poppins_500Medium" }}>
            Cài đặt yêu cầu
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontFamily: "Poppins_400Regular" }}>
                Tự động nhận cuốc
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins_400Regular",
                  color: "#727272",
                }}
              >
                Tự động nhận cuốc mới
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Switch
                trackColor={{ false: "#767577", true: "green" }}
                thumbColor={isEnabled ? "#4FAE5A" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View>

        {/* Mục 3 */}
        <View
          style={{
            flexDirection: "column",
            margin: 15,
            borderBottomWidth: 1,
            borderBottomColor: "#CCCCCC",
          }}
        >
          <Text style={{ fontSize: 16, fontFamily: "Poppins_500Medium" }}>
            Cài đặt ứng dụng
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontFamily: "Poppins_400Regular" }}>
                Kiểm tra
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} size={20} color="#000" />
            </View>
          </View>
        </View>
        {/* Mục 4 */}
        <View
          style={{
            flexDirection: "column",
            margin: 15,
            marginTop: 0,
            marginBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#CCCCCC",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontFamily: "Poppins_400Regular" }}>
                Tự động nhận cuốc
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins_400Regular",
                  color: "#727272",
                }}
              >
                Tự động nhận cuốc mới
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Switch
                trackColor={{ false: "#767577", true: "green" }}
                thumbColor={isEnabled ? "#4FAE5A" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchs}
                value={isEnableds}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
};

export default SettingPage;

const styles = StyleSheet.create({});
