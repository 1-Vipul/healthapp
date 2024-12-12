import { useContext, useState } from "react";
import mainContext from "../../store/mainContext/mainContext";
import styless from "./AddHealthData.module.scss";
import useFormValidation from "../../common/useFormValidation/useFormValidation";
import { Link, useNavigate } from "react-router-dom";
import MenuBar from "../../MenuBar/MenuBar";
import axios from "axios";

const AddHealthData = () => {
  const navigate = useNavigate();

  const {
    input: userInput,
    setInput: setUserInput,
    isTouched: userIsTouched,
    setIsTouched: setUserIsTouched,
    inputIsEmpty: userIsEmpty,
  } = useFormValidation((userInput: any) => userInput === "");

  const {
    input: hrInput,
    setInput: setHrInput,
    isTouched: hrIsTouched,
    setIsTouched: setHrIsTouched,
    inputIsEmpty: hrIsEmpty,
  }: any = useFormValidation((hrInput: any) => hrInput <= 0);

  const {
    input: sbpInput,
    setInput: setSbpInput,
    isTouched: SbpIsTouched,
    setIsTouched: setSbpIsTouched,
    inputIsEmpty: SbpIsEmpty,
  }: any = useFormValidation((sbpInput: any) => sbpInput <= 0);

  const healthContext: any = useContext(mainContext);
  const { healthData, setHealthData } = healthContext;

  const isFormValid = userIsEmpty || hrIsEmpty || SbpIsEmpty;

  const addNewHealthData = async(e: any) => {
    try {
      e.preventDefault();

      const newHealthData:any = JSON.stringify({
        Id: Math.random(),
        HR: hrInput,
        SBP: sbpInput,
        DBP: 32,
        Sugar: 42,
        Cal: 52,
        Hemoglobin: 62,
        Spo2: 1232,
        Name: userInput,
      })
    

      // axios.post('http://localhost:3001/addHealthData', newHealthData)
      // .then((response)=> {
      //   console.log(response);
      //   alert("Data is added");
      //   navigate("/showData");
      // })
      // .catch((error)=> {
      //   alert(`Server Issue  ${error}`);
      // });

  const response = await fetch("http://localhost:3001/addHealthData",{
    method: "POST",
    body: newHealthData
  });
  const jsonData = await response.json();
  console.log("jsonData",jsonData);
   
    } catch (error) {
      alert(`there is an error in save data  ${error}`);
    } 
  };
  return (
    <>
      <div>
        <form onSubmit={(e) => addNewHealthData(e)}>
          <div className={styless["form-control"]}>
            <label htmlFor="userName">UserName</label>
            <input
              type="text"
              value={userInput}
              onBlur={() => setUserIsTouched(true)}
              id="userName"
              onChange={(e) => setUserInput(e.target.value)}
            />

            {userIsTouched && userIsEmpty && (
              <span className={styless["error-class"]}>user name is empty</span>
            )}
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label
              htmlFor="hr"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              HeartRate
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="hr"
                id="hr"
                onBlur={() => setHrIsTouched(true)}
                value={hrInput}
                onChange={(e) => {
                  setHrInput(parseInt(e.target.value));
                }}
                className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {hrIsTouched && hrIsEmpty && (
                <span className={styless["error-class"]}>
                  Hr can't be empty
                </span>
              )}
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label
              htmlFor="sbp"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Systolic Heart Rate
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="sbp"
                id="sbp"
                onBlur={() => setSbpIsTouched(true)}
                value={sbpInput}
                onChange={(e) => {
                  setSbpInput(parseInt(e.target.value));
                }}
                className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {SbpIsTouched && SbpIsEmpty && (
                <span className={styless["error-class"]}>
                  Hr can't be empty
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isFormValid}
              className={
                isFormValid ? styless["submit-btn-err"] : styless["submit-btn"]
              }
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddHealthData;
