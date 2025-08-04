import React from "react";
import Checkbox from "@mui/material/Checkbox";

export default function Form({
  handleName,
  handleRank,
  handleChapter,
  handleSaint,
  postMarine,
  newMarine,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        postMarine();
      }}
      className="myForm"
    >
      <h3>Post New Marine</h3>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={newMarine.name}
        onChange={(e) => handleName(e.target.value)}
        required
      />

      <label htmlFor="rank">Rank</label>
      <select
        id="rank"
        value={newMarine.rank}
        onChange={(e) => handleRank(e.target.value)}
        required
      >
        <option value="">Select a Rank</option>
        <option value="Scout">Scout</option>
        <option value="Battle Brother">Battle Brother</option>
        <option value="Sergeant">Sergeant</option>
        <option value="Captain">Captain</option>
        <option value="Chaplain">Chaplain</option>
        <option value="Librarian">Librarian</option>
        <option value="Primarch">Primarch</option>
      </select>

      <label htmlFor="chapter">Chapter</label>
      <select
        id="chapter"
        value={newMarine.chapter}
        onChange={(e) => handleChapter(e.target.value)}
        required
      >
        <option value="">Select a Chapter</option>
        <option value="Ultramarines">Ultramarines</option>
        <option value="Blood Angels">Blood Angels</option>
        <option value="Space Wolves">Space Wolves</option>
        <option value="Dark Angels">Dark Angels</option>
        <option value="Black Templars">Black Templars</option>
      </select>

      <label htmlFor="saint">Sainthood</label>
      <Checkbox color="black"
        checked={newMarine.saint}
        onChange={(e) => handleSaint(e.target.checked)}
        inputProps={{ 'aria-label': 'Is this Marine a Saint?' }}
      />

      <button type="submit">Submit</button>
    </form>
  );
}