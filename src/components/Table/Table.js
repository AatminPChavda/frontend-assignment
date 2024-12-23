import React from "react";
import "./Table.css";
import { TABLE_HEADERS } from "../../constants";

function Table({ projects, currentPage, itemsPerPage }) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProjects = projects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <table className="project-table" aria-label="Funding Data Table">
      <thead>
        <tr>
          <th scope="col">{TABLE_HEADERS.S_NO}</th>
          <th scope="col">{TABLE_HEADERS.PERCENTAGE_FUNDED}</th>
          <th scope="col">{TABLE_HEADERS.AMOUNT_PLEDGED}</th>
        </tr>
      </thead>
      <tbody>
        {displayedProjects.map((project, index) => (
          <tr key={index}>
            <td>{startIndex + index + 1}</td>
            <td>{project["percentage.funded"]}%</td>
            <td>${project["amt.pledged"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
