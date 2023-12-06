import React from 'react'
import { useValue } from '../../../contextAPI/newsappContext';
import "./DetailView.css"
import { NavLink } from 'react-router-dom';
const DetailView = () => {
    const {viewElement} =useValue();
  return (<>
    <div className="detail-container">
        <div className='viewdetialItem-Image'>
            <img src={viewElement.urlToImage== null ? "https://images.wsj.net/im-894923/social" : viewElement.urlToImage} alt=""  />
        </div>
        <div className='News-Information'>
            <h1>{viewElement?.title}</h1>
            <h6>{viewElement?.publishedAt}</h6>
            <h6>News-Source:- <NavLink to={viewElement?.url} target='_blank'>{viewElement?.url}</NavLink></h6>
            <h6>Author :- {viewElement?.author}</h6>
        </div>
        <div className='content'>
            <p>{viewElement?.content}</p>
        </div>
    </div>
    {/* <div>{viewElement.title}</div>
    <div>{viewElement.description}</div>
    <div>{viewElement.author}</div>
    <div>{viewElement.publishedAt}</div>
    <div>{viewElement.url}</div>
    <div>{viewElement.source.name}</div> */}
    </>
  )
}

export default DetailView;