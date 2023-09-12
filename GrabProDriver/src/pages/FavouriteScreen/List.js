import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details }) => (
  <View style={styles.item}>
    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
      {name}
    </Text>
    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.details}>
      {details}
    </Text>
  </View>
);

// the filter
const List = ({ searchPhrase, setClicked, data }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the name
    if (
      item.name
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the description
    if (
      item.details
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item name={item.name} details={item.details} />;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    // width: "100%",
  },
  item: {
    margin: 5,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
  details: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#727272",
    marginBottom: 5,
  },
});
