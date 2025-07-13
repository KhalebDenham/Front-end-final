import React from "react";
import Checkbox from "@mui/material/Checkbox";

export default function Table({
  marines,
  deleteMarine,
  updateMarine,
  handleUpdatedName,
}) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <table className="myTable">
      <thead>
        {" "}
        List of Marines
        <tr>
          <th>Marine Name</th>
          <th>Rank</th>
          <th>Chapter</th>
          <th>Sainthood</th>
        </tr>
      </thead>
      <tbody>
        {marines.map(
          (
            marine,
            index //maps out the marines, so for EACH marine in the LIST OF USERS,
          ) => (
            <tr key={index}>
              <td>{marine.name}</td>
              <td>{marine.rank}</td>
              <td>{marine.chapter}</td>
              <td>
                <Checkbox checked={marine.saint} disabled />
              </td>
              <td>
                <button onClick={() => deleteMarine(marine.id)}>🗑</button>
              </td>
              <td>
                <label></label>
                <input
                  onChange={(e) => handleUpdatedName(e.target.value)}
                  placeholder="Enter New Name"
                ></input>
                <button onClick={(e) => updateMarine(marine)}>🖉</button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table> //creates a table that holds each user with a section for full name, job title, and company correlating to each marines info
  );
}
