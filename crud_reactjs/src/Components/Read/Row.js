import React from "react";

export default function Row({ id, name, email }) {
  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <button className="bg-primary border-white">Edit</button>
        </td>
        <td>
          <button className="bg-danger border-white">Delete</button>
        </td>
      </tr>
    </>
  );
}
