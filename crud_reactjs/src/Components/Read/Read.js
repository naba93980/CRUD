import axios from "axios";
import React, { useEffect, useState } from "react";
import Row from "./Row";

export default function Read() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("mounted")
    const getData = () => {
      axios
        .get("https://633af5ed471b8c39557973b2.mockapi.io/crud_reactjs")
        .then((res) => {
          setData(res.data);
        });
    };
    getData();
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele) => {
            const { id, name, email } = ele;
            return <Row key={id} id={id} name={name} email={email}  />
          })}
        </tbody>
      </table>
    </>
  );
}
