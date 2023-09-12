import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useCustomFonts } from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";
import Heading from "../../components/Heading/Heading";
import SearchBar from "../../components/SearchBar";
import List from "./List";

const FavouriteScreen = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();
  // get data from the fake api endpoint

  const data = [
    {
      id: "1",
      name: "Kí túc xá Khoa học tự nhiên",
      details: "135b Trần Hưng Đạo, phường cầu Ông Lãnh, Quận 1, Th...",
    },
    {
      id: "2",
      name: "Kí túc xá Khoa học tự nhiên",
      details: "135b Trần Hưng Đạo, phường cầu Ông Lãnh, Quận 1, Th...",
    },
    {
      id: "3",
      name: "Kí túc xá Khoa học tự nhiên",
      details: "135b Trần Hưng Đạo, phường cầu Ông Lãnh, Quận 1, Th...",
    },
    {
      id: "4",
      name: "Kí túc xá Khoa học tự nhiên",
      details: "135b Trần Hưng Đạo, phường cầu Ông Lãnh, Quận 1, Th...",
    },
  ];
  useEffect(() => {
    setFakeData(data);
  }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <Heading title="Gần đây" />
        <View>
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />
          <List
            searchPhrase={searchPhrase}
            data={fakeData}
            setClicked={setClicked}
          />
        </View>
      </View>
    );
  }
};

export default FavouriteScreen;
