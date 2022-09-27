import { useState, useEffect, FC } from "react";
import axios from "axios";


axios.defaults.baseURL =
  "https://playground.devskills.co/api/rest/meal-roulette-app/";

const useAxios = (url: string) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    try {
      let res = await axios.get(url);
      setResponse(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { response, error, loading };
};

export default useAxios;
