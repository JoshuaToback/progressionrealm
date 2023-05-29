import React from "react";
import { Container } from "react-bootstrap";

function Home() {
  const tableData = [
    ["Violet", "68 - 44", "11"],
    ["XCaliborg", "54 - 30", "7"],
    ["Poptimus", "43 - 47", "4"],
    ["JTVA", "32 - 57", "2"],
    ["gh0ul", "20 - 49", "2"],
  ];

  return (
    <Container className="home">
      <aside id="standings">
        <h2>Standings</h2>
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
      </aside>

      <div className="homeContent">
        <h2>The Progression Realm</h2>

        <h3>Pharaoh's Servant</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hkI4LBrWWco"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
}

export default Home;
