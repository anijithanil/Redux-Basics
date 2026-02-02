import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseTotalLikes,
  increaseTotalLikesByAmount,
} from "../store/reducers/dataReducers";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const totalLikes = useSelector((state) => state.dataReducer.totalLikes);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2323",
      }}
    >
      <Text>HomeScreen</Text>
      <Text>Total Likes: {totalLikes}</Text>
      <Button
        title="incerase by one"
        onPress={() => dispatch(increaseTotalLikes())}
      />
      <Button
        title="incerase by amount"
        onPress={() => dispatch(increaseTotalLikesByAmount())}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
