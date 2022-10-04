import React from "react";

export default function Row(props) {
  const { renderId, objectId, name, email, deleteData, updateData} = props;
  return (
    <>
      <tr>
        <th scope="row">{renderId}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <button className="bg-warning border-white" onClick={()=>updateData(objectId,name,email)}>Edit</button>
        </td>
        <td>
          <button className="bg-danger border-white" onClick={()=>deleteData(objectId)}>Delete</button>
        </td>
      </tr>
    </>
  );
}
