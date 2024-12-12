import React, { createContext, useState } from "react";

const mainContext:any = createContext({healthData:[],

});


const tHead = [
    "Id",
    "Name",
    "DBP",
    "HR",
    "SBP",
    "Cal",
    "Hemoglobin",
    "Spo2",
    "Sugar",
  ];

const initialValue:any = []

export const MainContextWrapper:React.FC<any> = (props) =>{
    const [healthData, setHealthData] = useState(initialValue);
    return(
        <mainContext.Provider value={{
            healthData:healthData,
            setHealthData:setHealthData,
            tHead:tHead
            }}>

           {props.children}
        </mainContext.Provider>
    )
}

export default mainContext;