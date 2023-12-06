import React from 'react'
import { GrFavorite } from "react-icons/gr";
import Card from 'react-bootstrap/Card';
import { useValue } from '../../contextAPI/newsappContext';
import { NavLink } from 'react-router-dom';

const Favourite = () => {
    const {newsData,setDetailedViewElement,favouriteData} = useValue();
    return (<>
    <h1 style={{textAlign:"center"}}>Favourite</h1>
    <div id="News">
        {
            favouriteData && favouriteData.map((ele) => {
                return (<>
                    <div>
                        <Card style={{ width: '350px', height: "500px" }}>
                            <Card.Img variant="top" src={ele.urlToImage == null ? "https://images.wsj.net/im-894923/social" : ele.urlToImage} />
                            <Card.Body id="text-container">
                                <Card.Title>{ele.title}</Card.Title>
                                <Card.Text>
                                    {ele.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Text className='readmore' onClick={() => { setDetailedViewElement(ele) }}><NavLink to="/detailedview" >ReadMore...</NavLink></Card.Text>
                            <GrFavorite className='favourite' style={{color:"red"}}/>
                        </Card>
                    </div>
                </>)
            })
        }
    </div>
    </>)
}

export default Favourite;