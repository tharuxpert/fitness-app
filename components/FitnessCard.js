import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FitnessCard = () => {
    const FitnessData = fitness;
    const navigation = useNavigation();

  return (
    <View>
      {FitnessData.map((item) => (
          <Pressable
              onPress={() => navigation.navigate('Workout', {
                  image: item.image,
                  excersises: item.excersises,
                  id:item.id
              })}
          style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
          key={item.id}
        >
          <Image
            style={{ width: "95%", height: 140, borderRadius: 7 }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              position: "absolute",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              left: 20,
              top: 20,
            }}
          >
            {item.name}
          </Text>
              <MaterialCommunityIcons
                  style={{position:'absolute',left:20,bottom:15}}
            name="lightning-bolt"
            size={24}
            color="white"
          />
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCard;

const styles = StyleSheet.create({});
