import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Flight from "./Flight";

type Props = {
  // TODO
  results: any;
  isDataReversed: boolean;
};

// @ts-ignore
export default function LaunchList({ results, isDataReversed }: Props) {
  const { data, loading, error } = results;

  // handles sort decending button functionality
  const orderPreferencedData = isDataReversed ? data.reverse() : data;

  if (loading) return <ActivityIndicator size="large" />;

  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{error}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <FlatList
        data={orderPreferencedData}
        keyExtractor={(launch) => launch.flight_number}
        renderItem={({ item }) => <Flight flight={item} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    marginVertical: 15,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});
