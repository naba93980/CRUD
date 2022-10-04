import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Row from "./Row";

export default function Read() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();


   const getData = () => {
     axios
       .get("https://633af5ed471b8c39557973b2.mockapi.io/crud_reactjs")
       .then((res) => {
         setData(res.data);
       });
   };

  const updateData = (id, name, email) => {
    localStorage.setItem(`${id}`, JSON.stringify({ name, email }));
    navigate(`/update/${id}`);
  }
  
  const deleteData=(id) => {
    axios.delete(`https://633af5ed471b8c39557973b2.mockapi.io/crud_reactjs/${id}`)
      .then(() => {
      setData(data=>data.filter(e=>e.id!==id))
    }).catch((err)=>console.log(err))
}

  useEffect(() => {
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
          {data.map((ele,index) => {
            const { id, name, email } = ele;
            return <Row key={id} objectId={id} renderId={++index} name={name} email={email} deleteData={deleteData} updateData={updateData} />
          })}
        </tbody>
      </table>
    </>
  );
}
