import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import FilterByYear from "./src/components/FilterByYear";
import Header from "./src/components/Header";
import LaunchList from "./src/components/LaunchList";
import SortDecending from "./src/components/SortDecending";
import useLaunches from "./src/hooks/useLaunches";

export default function App() {
  const [isDataReversed, setIsDataReversed] = useState(false);
  const [results, fetchLaunches] = useLaunches();
  const [filterByYear, setFilterByYear] = useState(null);

  useEffect(() => {
    // @ts-ignore
    fetchLaunches(filterByYear);
  }, [isDataReversed, filterByYear]);

  const reloadData = () => {
    // @ts-ignore
    fetchLaunches(filterByYear);
  };

  return (
    <View style={styles.container}>
      <Header handlePress={reloadData} />
      <View style={styles.bodyContainer}>
        <View style={styles.buttonContainer}>
          <FilterByYear value={filterByYear} setValue={setFilterByYear} />
          <SortDecending
            isDataReversed={isDataReversed}
            setIsDataReversed={setIsDataReversed}
          />
        </View>
        <LaunchList results={results} isDataReversed={isDataReversed} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    // otherwise dropdown picked is obscured
    zIndex: 1,
  },
  buttonContainer: {
    width: 200,
    flexDirection: "row",
  },
});
