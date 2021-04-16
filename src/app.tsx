import React, {useEffect, useState} from 'react';
import './app.css';
import DataList from './components/DataList/dataList';
import Pagination from "./components/Pagination/pagination";
import { IPost } from "./components/data.model";

const App: React.FC = () => {
  const [data, setData] = useState<IPost[]>([]);
  const itemsPerPage = 10;
  const allPages = Math.ceil(data.length / itemsPerPage);

  const fetchData = async (url: string): Promise<IPost[]> => {
    const response = await fetch(url);
    return await response.json();
  }

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetchData(url).then(data => setData(data));
  }, [])

  return (
    <div className="main__container">
      <h1>Pagination</h1>
      <DataList posts={data} />
      <Pagination allPagesNumber={allPages} itemsPerPage={10} itemsNumber={data.length} />
    </div>
  );
}

export default App;
