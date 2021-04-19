import { useState, useEffect } from "react";

const useFetch = (uri) => {
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    fetch(uri, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) throw Error("Could not fetch the data from the resource");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setPending(false);
          setData(null);
          setError(err.message);
        }
      });
    return () => abortController.abort();
  }, [uri]);
  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
