import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";

type Props = {
  handlePress: () => void;
};

export default function Header({ handlePress }: Props) {
  // Woud turn these into a util
  const [loaded] = useFonts({
    regular: require("../../assets/font/BrandonGrotesque-Black.ttf"),
    bold: require("../../assets/font/BrandonGrotesque-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/img/spacex-logo.png")}
        />
        <Text style={styles.iconText}>LAUNCHES</Text>
      </View>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Reload Data</Text>
          <Image
            style={styles.icon}
            source={require("../../assets/icon/refresh.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

// lot of repeating style code, would like to make some constants
const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginLeft: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 160,
    height: 20,
  },
  iconText: {
    fontFamily: "regular",
    color: "#797979",
    fontSize: 18,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    width: 150,
    height: 50,
    backgroundColor: "#215184",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
  },
  buttonText: {
    fontFamily: "bold",
    color: "white",
    fontSize: 17,
  },
  icon: {
    width: 15,
    height: 15,
  },
});
