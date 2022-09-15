import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import AddStudent from "./Components/AddStudent";
import StudentsData from "./Components/StudentsData";

function App() {
  const [serverData, setServerData] = useState([]);

  function Delete(index) {
    axios
      .delete(`http://localhost:4000/students/${index}`)
      .then((res) => {
        console.log(res);
      });

  }
  useEffect(() => {
    axios
      .get("http://localhost:4000/students")
      .then((res) => {
        setServerData(res.data);
      })
      .catch((err) => {
        throw err;
      });
    console.log(serverData);
  });

  function getData(firstNameInput, lastNameInput, emailInput) {
    axios
      .post("http://localhost:4000/students", {
        firstNameInput,
        lastNameInput,
        emailInput,
      })
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <>
      <AddStudent parentCallback={getData} />
      <StudentsData data={serverData} Delete={Delete} />
    </>
  );
}

export default App;
