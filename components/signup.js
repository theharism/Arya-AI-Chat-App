import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup = ({ navigation }) => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const [text1, onChangeText1] = React.useState("");
  const [text2, onChangeText2] = React.useState("");
  const [text3, onChangeText3] = React.useState("");
  const [text4, onChangeText4] = React.useState("");

  const storeData = async () => {
    try {
      console.log("hiiiii");
      await AsyncStorage.setItem("email", text2);
      await AsyncStorage.setItem("password", text3);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  const check = () => {
    if (
      text1.length == 0 ||
      text2.length == 0 ||
      text3.length != text4.length
    ) {
      alert("Please Enter Correct Data");
    } else {
      storeData();
      alert("Account Created Successfully");
      navigation.navigate("login");
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        width,
        marginTop: "10%",
        marginTop: 37,
        width,
        height,
        margin: height > 800 ? "2%" : "0%",
      }}
    >
      <View
        style={{
          marginTop: "5%",
          alignSelf: "center",
          justifyContent: "center",
          alignContent: "center",
          margin: height > 800 ? "5%" : "-15%",
        }}
      >
        <Image
          source={require("../assets/Mokx.png")}
          style={{
            width: height > 800 ? 172 : 110,
            height: height > 800 ? 172 : 160,
          }}
        />
      </View>
      <View style={{ margin: height > 800 ? "5%" : "10%" }}>
        <Text
          style={{ textAlign: "center", color: "#800080", fontWeight: 900 }}
        >
          Signup with Email
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: "5%",
            color: "#800080",
            fontWeight: 500,
          }}
        >
          Welcome back! Sign in using your social account or email account to
          continue us
        </Text>
      </View>
      {/* Form */}
      <View style={{ width }}>
        <View style={{ margin: "5%" }}>
          <Text style={{ color: "#800080", fontWeight: 900 }}>Your Name:</Text>
          <TextInput
            value={text1}
            onChangeText={onChangeText1}
            style={{
              height: 40,
              margin: 12,
              padding: 10,
            }}
            placeholder="_______________________________________________"
          />
          <Text style={{ color: "#800080", fontWeight: 900 }}>Your Email:</Text>
          <TextInput
            value={text2}
            onChangeText={onChangeText2}
            style={{
              height: 40,
              margin: 12,
              padding: 10,
            }}
            placeholder="_______________________________________________"
          />
          <Text style={{ color: "#800080", fontWeight: 900 }}>Password:</Text>
          <TextInput
            value={text3}
            secureTextEntry
            onChangeText={onChangeText3}
            style={{
              height: 40,
              margin: 12,
              padding: 10,
            }}
            placeholder="_______________________________________________"
          />
          <Text style={{ color: "#800080", fontWeight: 900 }}>
            Confirm Password:
          </Text>
          <TextInput
            value={text4}
            secureTextEntry
            onChangeText={onChangeText4}
            style={{
              height: 40,
              margin: 12,
              padding: 10,
            }}
            placeholder="_______________________________________________"
          />
        </View>
      </View>
      {/* Next */}
      <View
        style={{
          marginTop: "0%",
          display: "flex",
          flexDirection: "column",
          width,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#FFD720",
            width: "90%",
            height: "27%",
            borderRadius: 10,
            justifyContent: "center",
            alignSelf: "center",
          }}
          onPress={check}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: 900,
              color: "#800080",
            }}
          >
            Create an Account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
