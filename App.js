import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  AppRegistry,
  Image,
  ImageBackground,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>




      <View style={{ flex: 2, flexDirection : "row", justifyContent : "space-between", padding : 20}}>
      <Image
        source={require('./attributes/back.png')}
        style={{ width: 30, height: 30 , alignItems: "left"}}
      />
      <Image
        source={require('./attributes/bell.png')}
        style={{ width: 30, height: 30, alignItems: "right"}}
      />
      </View>







      <View style={{ flex: 5, flexDirection : "row",justifyContent : "space-between",padding : 20}}>
      <View style={{ flex: 5, flexDirection : "column"  }}>
      <Text style = {{fontSize : 20, color: "gray"}}>December 16, 2022</Text>
      <Text style = {{fontSize : 35, fontWeight : "bold"}}>Farid Rzayev</Text>
     </View>
     <Image
        source={require('./attributes/me.jpeg')}
        style={{ width: 75, height: 75, alignItems: "right", borderRadius : 25}}
      />
      </View>





      <View style={{ flex: 5, flexDirection : "column",paddingLeft : 20 }}>
      <View style={{ flex: 5, alignItems: "left",justifyContent : "space-between" }}>
      <Text style = {{fontSize : 45, fontWeight : "bold"}}>Projects</Text>
      </View>



      <View style={{ flex: 5, flexDirection : "row",justifyContent : "space-between",padding : 20}}>
      <Text style = {{fontSize : 20, fontWeight : "bold"}}>Website</Text>
      <Text style = {{fontSize : 20, color: "gray"}}>Mobile App</Text>
      <Text style = {{fontSize : 20, color: "gray"}}>Research</Text>
</View>
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
