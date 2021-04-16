import React from 'react';
import { IPost } from './../data.model'

interface IProps {
  posts: IPost[]
}

const DataList: React.FC<IProps> = ({ posts }) => {

  return (
    <div className="list__container">
      <div className="list_data">
        {
          posts.map((item: IPost) => {
            return (
              <p key={item.id}>
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
