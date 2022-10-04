import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const getName = (e) => {
    setName(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const header = { "Access-Control-Allow-Origin": "*" };
    axios
      .put(`https://633af5ed471b8c39557973b2.mockapi.io/crud_reactjs/${id}`, {
        name: name.trim(),
        email: email.trim(),
        header,
      })
      .then(() => {
        localStorage.removeItem(`${id}`);
        navigate("/read");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(`${id}`));
    setName(data.name);
    setEmail(data.email);
  }, []);

  return (
    <div className="row">
      <div className="col-12">
        <form onSubmit={handleForm}>
          <h3>Update</h3>
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="inputName"
            value={name}
            className="form-control"
            onChange={getName}
          />
          <br />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              aria-describedby="emailHelp"
              onChange={getEmail}
            />
          </div>
          <br />
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <button type="submit" className="btn btn-primary">
              <Link to={"/read"} className="text-decoration-none text-light">
                Back
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
