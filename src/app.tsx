import React, { useEffect, useState } from 'react';
import './app.css';
import DataList from './components/DataList/dataList';
import Pagination from "./components/Pagination/pagination";
import { IPost } from "./components/data.model";

const fetchData = async (url: string): Promise<IPost[]> => {
  const response = await fetch(url);
  return await response.json();
}

const App: React.FC = () => {
  const [data, setData] = useState<IPost[]>([]);
  const [displayedData, setDisplayedData] = useState<IPost[]>([]);
  const itemsPerPage = 10;
  const allPages = Math.ceil(data.length / itemsPerPage);

  const onPageChange = (page: number = 1) => {
    const startItem = (page - 1) * itemsPerPage;
    const endItem = page * itemsPerPage;
    setDisplayedData(data.slice(startItem, endItem))
  }

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetchData(url).then(data => setData(data));
    onPageChange()
  }, [data.length])

  return (
    <div className="main__container">
      <h1>Pagination</h1>
      <DataList posts={displayedData} />
      <Pagination allPagesNumber={allPages} itemsPerPage={10} itemsNumber={data.length} pageChange={onPageChange} />
    </div>
  );
}

export default App;
