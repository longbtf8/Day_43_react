import { useEffect, useState } from "react";

const DataFetcher = ({ url, children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error status ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
        throw new Error("Lỗi", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return children({ data, loading, error });
};
export default DataFetcher;
