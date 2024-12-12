import { useContext, useEffect, useState } from "react";
import mainContext from "../../store/mainContext/mainContext";
import HealthTable from "../../common/HealthTable/HealthTable";
import axios from "axios";

const ShowHealthData = () => {
  const healthContext: any = useContext(mainContext);
  const { healthData, setHealthData, tHead } = healthContext;

  // const [finalData, setFinalData] = useState<any>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/allhealth")
      .then((response) => {
        setHealthData (response.data.allHealthData);
        // console.log("resHealthData",finalData)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <HealthTable tHead={tHead} healthData={healthData}></HealthTable>
    </div>
  );
};

export default ShowHealthData;
