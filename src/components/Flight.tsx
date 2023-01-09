import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";

// @ts-ignore
export default function Flight({ flight }) {
  console.log("flight", flight.flight_number);
  // @ts-ignore
  function dateHelper(unixTimestamp) {
    const milliseconds = unixTimestamp * 1000;
    // @ts-ignore
    const nth = function (d) {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    const unformatedDate = new Date(milliseconds);
    const date = unformatedDate.getDate();
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][unformatedDate.getMonth()];

    return `${date}${nth(date)} ${month} ${unformatedDate.getFullYear()}`;
  }

  const [loaded] = useFonts({
    regular: require("../../assets/font/BrandonGrotesque-Regular.ttf"),
    bold: require("../../assets/font/BrandonGrotesque-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.number}>#{flight.flight_number}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.header}>{flight.mission_name}</Text>
        <View style={styles.subHeading}>
          <Text style={styles.date}>{dateHelper(flight.launch_date_unix)}</Text>
          <Text style={styles.rocket}>{flight.rocket.rocket_name}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2,
    height: 90,
    borderRadius: 5,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 5,
    backgroundColor: "white",
    marginVertical: 3,
    marginHorizontal: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    fontSize: 40,
    marginRight: 5,
    fontFamily: "bold",
    color: "#3f3e3e",
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 30,
    fontFamily: "bold",
    marginBottom: 4,
    maxHeight: 40,
  },
  subHeading: {
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    color: "#474747",
    paddingTop: 6,
  },
  rocket: {
    fontSize: 20,
    fontFamily: "bold",
    marginBottom: 4,
  },
});
