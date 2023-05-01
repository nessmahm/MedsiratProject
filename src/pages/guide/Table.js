import React, { useState } from "react";
import "./table.css"; // import your CSS file

function Table  ({ rowHeaders, columnHeaders, numHeaders }){
  var initialRow;
  if (columnHeaders.length === 3) {
    initialRow = ["", "", ""];
  } else if (columnHeaders.length === 4) {
    initialRow = ["", "", "", ""];
  }

  const [values, setValues] = useState([initialRow, initialRow, initialRow]);

  const handleInputChange = (rowIndex, colIndex, event) => {
    const value = event.target.value;
    setValues((prevInput) => {
      const newInput = [...prevInput];
      newInput[rowIndex][colIndex] = value;
      return newInput;
    });
  };
  const handleTextareaResize = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  return (
    
    <div>
      {
      numHeaders === 2 && (
        <div className="description">
        <h2 className="subDescription">
          Quels sont <span className="indication"> vos capacités </span> et <span className="indication"> vos lacunes</span> ?
        </h2>
        <h2 className="subDescription">
          Comment <span className="indication"> profiter</span> de vos capacités pour <span className="indication"> se développer</span> ?
        </h2>
        <h2 className="subDescription">
          Comment <span className="indication"> corriger </span> vos lacunes pour <span className="indication"> se développer </span> ?
        </h2>
      </div>
      ) 
    } 
      
      <table>
        <thead>
          <tr>
            {
              numHeaders === 2 && (
                <th className="header1"></th>
              ) /* Empty cell for the top-left corner */
            }
            {columnHeaders.map((header, colIndex) => (
              <th key={colIndex} className="header1">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {numHeaders === 2 && (
                <th className="header2">{rowHeaders[rowIndex]}</th>
              )}
              {row.map((cellValue, colIndex) => (
                <td key={colIndex}>
                  <textarea
                    className="cell1"
                    value={cellValue}
                    onChange={(event) =>
                      handleInputChange(rowIndex, colIndex, event)
                    }
                    onInput={handleTextareaResize}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
