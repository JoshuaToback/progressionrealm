import React from "react";

function Standings() {
  const tableData = [
    ["Violet", "68 - 44", "11"],
    ["XCaliborg", "54 - 30", "7"],
    ["Poptimus", "43 - 47", "4"],
    ["JTVA", "32 - 57", "2"],
    ["gh0ul", "20 - 49", "2"],
  ];
  
  return (
    <div>
      <h2 className="table-head">Standings</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="table-header">Duelists</th>
            <th className="table-header">Record</th>
            <th className="table-header">Sets Won</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "table-row-even" : "table-row-odd"}
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="table-cell">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Standings;
