import React, { useEffect, useState} from 'react';

interface IPost {
  userId: number
  id: number
  title: string
  body: number
}

const fetchData = async (url: string): Promise<any> => {
  const response = await fetch(url);
  return await response.json();
}

const DataList: React.FC = () => {
  const [data, setData] = useState<IPost[]>([])

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetchData(url).then(data => setData(data))
  }, [])

  return (
    <div className="list__container">
      <div className="list_data">
        {
          data.map(item => {
            return (
              <p>
                { item.id } - { item.title }
              </p>
            )
          })
        }

      </div>
    </div>
  )
}

export default DataList;
