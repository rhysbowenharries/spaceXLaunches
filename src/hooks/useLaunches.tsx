import { useState } from "react";
import spaceX from "../api/spaceX";

export default () => {
  const [results, setResults] = useState({
    data: [],
    loading: false,
    error: null,
  });

  const fetchLaunches = async (launchYear: string) => {
    setResults({
      data: [],
      loading: true,
      error: null,
    });
    try {
      const response = await spaceX.get("/launches", {
        params: {
          // hack to stop bug where last flight repeats over and over
          limit: 110,
          launch_year: launchYear === "noValue" ? null : launchYear,
        },
      });

      setResults({
        // @ts-ignore
        data: response.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setResults({
        data: [],
        loading: false,
        // parse the error and use in error message
        // @ts-ignore
        error: "Something went wrong",
      });
    }
  };

  return [results, fetchLaunches];
};
