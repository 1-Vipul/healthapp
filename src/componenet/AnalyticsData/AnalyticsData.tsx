import { useContext } from "react";
import mainContext from "../../store/mainContext/mainContext";
import HealthTable from "../../common/HealthTable/HealthTable";

const AnalyticsData = () => {

  const healthContext: any = useContext(mainContext);
  const { healthData, tHead } = healthContext;
  
  return (
    <div>
      <HealthTable tHead={tHead} healthData={healthData}></HealthTable>
    </div>
  );
};

export default AnalyticsData;
