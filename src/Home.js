import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className='home_section'>
            <Card
                src="./images/card1.webp"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="./images/card2.webp"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="./images/card3.webp"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home_section'>
            <Card
                src="./images/card4.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="₹1300/night
                "
            />
            <Card
                src="./images/card5.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="₹3500/night"
            />
            <Card
                src="./images/card6.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="₹700/night"
            />
      </div>
    </div>
  )
}

export default Home