import React from 'react'
import { GrFavorite } from "react-icons/gr";
import Card from 'react-bootstrap/Card';
import "./news.css"; 
import { useValue } from '../../contextAPI/newsappContext';
import { NavLink } from 'react-router-dom';
const News = () => {
    const {newsData,setDetailedViewElement,Addfavourite} = useValue();
    const handlefavourite = (data) =>{
        Addfavourite(data);
    }
    return (<div id="News">
        {
            newsData && newsData.map((ele) => {
                return (<>
                    <div>
                        <Card style={{ width: '350px', height: "500px" }}>
                            <Card.Img variant="top" src={ele.urlToImage== null ? "https://images.wsj.net/im-894923/social" : ele.urlToImage} />
                            <Card.Body id="text-container">
                                <Card.Title>{ele.title}</Card.Title>
                                <Card.Text>
                                    {ele.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Text className='readmore' onClick={()=>{setDetailedViewElement(ele)}}><NavLink to="/detailedview" >ReadMore...</NavLink></Card.Text>
                            <GrFavorite className='favourite' onClick={()=>handlefavourite(ele)}/>
                        </Card>
                    </div>
                </>)
            })
        }
    </div>)
}

export default News;