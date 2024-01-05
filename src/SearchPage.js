import React from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import { useState } from 'react';
function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    const [heartColor,setHeartColor] = useState(false);
    const handleHeartClick = () => {
        setHeartColor(!heartColor);
      };
    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            {heartColor ? (
        <FavoriteBorderIcon className="searchResult__heart like_result" onClick={handleHeartClick} />
      ) : (
        <FavoriteBorderIcon className="searchResult__heart" onClick={handleHeartClick} />
      )}
            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h3>{price}</h3>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}




function SearchPage() {
  const currentDate = new Date().toLocaleDateString()
  return (
    <div className='searchPage'>
      <div className="searchPage_info">
        <p>52 stays - {currentDate}</p>
        <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of India"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom ·  1.5 shared bathrooms · Wifi · Kitchen · Free parking"
                star={4.73}
                price="₹300 / night"
                total="₹3000 total"
            />

            <SearchResult
                img="https://a0.muscache.com/im/pictures/b329e6cf-632b-48e9-a8ce-b6b02b42b987.jpg?im_w=720"
                location="Private room in center of India"
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen"
                star={4.3}
                price="₹4000 / night"
                total="₹40000/ total"
            />

            <SearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Private room in center of India"
                title="Luxury Studio Apartments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                star={3.8}
                price="₹3500 / night"
                total="₹35000 total"
            />
            <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Private room in center of India"
                title="150KM away"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="₹5500 / night"
                total="₹55000 total"
            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Private room in center of India"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom ·  1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="₹6000 / night"
                total="₹60000 total"
            />
            <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Private room in center of India"
                title="The Blue Room"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
                star={4.23}
                price="₹6500 / night"
                total="₹65000 total"
            />
            <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Private room in center of India"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="₹9000 / night"
                total="90000 total"
            />
        </div>
  )
}

export default SearchPage