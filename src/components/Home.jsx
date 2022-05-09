import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRockets } from "../redux/rocketSlice";
import Cards from "./Cards";
import Header from "./Header";

export default function Home() {
  const [allData, setAllData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchRockets = async () => {
      const response = await axios
        .get("https://api.spacexdata.com/v3/launches")
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(addRockets(response.data));
    };
    fetchRockets();
  });
  const data = useSelector((state) => state?.rockets);
  useEffect(() => {
    setAllData(data);
  }, [data?.length, data]);
  return (
    <div>
      <Header data={allData} setAllData={setAllData} />
      {allData.length ? <Cards data={allData} /> : <p>Data is not found</p>}
    </div>
  );
}
