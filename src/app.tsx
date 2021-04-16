import React from 'react';
import './app.css';
import DataList from './components/DataList/dataList';
import Pagination from "./components/Pagination/pagination";

function App() {
  return (
    <div className="main__container">
      <h1>Pagination</h1>
      <DataList/>
      <Pagination allPagesNumber={10} itemsPerPage={10} itemsNumber={100} />
    </div>
  );
}

export default App;
