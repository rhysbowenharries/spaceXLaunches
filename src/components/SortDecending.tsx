import { useFonts } from "expo-font";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  isDataReversed: boolean;
  setIsDataReversed: (arg: boolean) => void;
};
export default function SortDecending({
  // imporve the naming
  isDataReversed,
  setIsDataReversed,
}: Props) {
  const [loaded] = useFonts({
    bold: require("../../assets/font/BrandonGrotesque-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <TouchableOpacity onPress={() => setIsDataReversed(!isDataReversed)}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>
          {isDataReversed ? `Sort Ascending` : `Sort Decending`}
        </Text>
        <Image
          style={styles.icon}
          source={require("../../assets/icon/sort.png")}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20,
    paddingHorizontal: 20,
    width: 180,
    height: 50,
    backgroundColor: "#215184",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "white",
  },
  buttonText: {
    fontFamily: "bold",
    color: "white",
    fontSize: 17,
  },
  icon: {
    width: 15,
    height: 19,
  },
});
