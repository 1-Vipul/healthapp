import React from "react";

const HealthTable: React.FC<{
  tHead: string[];
  healthData:any[]
}> = ({ tHead , healthData}) => {

  const tHeadContent = tHead.map((thValue: string) => {
    return (
      <th key={thValue}
        scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        {thValue}
      </th>
    );
  });

  const tBodyContent = healthData.map((trValue:any) => {

    // const isHR = trValue.hr > 120 ? 'high' : trValue.hr > 90 ? 'mid' : 'low' ;
    return ( <tr key={trValue.id}>
       {
         tHead.map((thValue: string) => {
          return (
            <td key={thValue} className="px-6 py-4 whitespace-nowrap">{trValue[thValue]}</td>
          );
        })
       }
      </tr>)
  })
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
            {tHeadContent}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {tBodyContent}
      </tbody>
    </table>
  );
};

export default HealthTable;
