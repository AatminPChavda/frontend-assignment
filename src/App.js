import React, { useEffect, useState } from "react";
import Table from "./components/Table/Table";
import Pagination from "./components/Pagination/Pagination";
import { API_URL } from "./constants";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  return (
    <div className="App">
      <h1>Funding Data Table</h1>
      <Table
        projects={projects}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default App;
