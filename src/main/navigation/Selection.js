import React from 'react';
import "./Selection.css";

const Selection = ({label, selectedOption, options, onSelection }) => (
  <div className="selection">
    <label>{label}</label>
    <select value={selectedOption} onChange={onSelection}>
      {options.map( option => (
          <option key={option.id} value={option.name}>{option.name}</option>
      ))}
    </select>
  </div>
);

export default Selection;
