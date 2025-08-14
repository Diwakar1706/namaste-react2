import React from "react";
import ReactDOM from "react-dom/client"
import { FaStar } from "react-icons/fa";



const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-logo-by-abhishek-choudhary-dribbble.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>cart</li>



                </ul>

            </div>

        </div>
    )
}


const RestaurantCard=(props)=>{
  const {resData}=props;
    // return(
    //     <div className="restro-card">
        
    //            <img   className="food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/81fc36a5-3644-4640-9f19-fde05b52b28b_1030826.JPG"></img>
    //            <h3>Meghana Food </h3>
    //            <h4>Biryani, North Indian</h4>
    //            <h4>4.5 star</h4>
    //            <h4>38 min  </h4>


    //     </div>

    // )

    return (
    <div className="restro-card">
      <div className="image-container">
        <img
          className="food-img"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/88f24405-fc3b-48e5-8422-685b28757855_920945.JPG"}//+ resData.data.cloudinaryImageId
          alt="Pizzas"

        />
        <div className="price-tag">ITEMS AT ₹99</div>
      </div>

      <h3 className="restro-name">{resData.data.name}</h3>
      <div className="rating-time">
        <FaStar className="star-icon" /> {resObj.data.avgRating}
        <span className="time">{resObj.data.sla.slaString}</span>
      </div>

      <p className="cuisines">{resData.data.cuisines}</p>
      <p className="location">{resData.data.locality}</p>
    </div>
  );
}



const resObj={   data:{"name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/d5436dbc-d6ea-4f12-aa44-9c5ce007de24_695745.JPG",
                      "locality": "TT Nagar",
                      "areaName": "Parasia Road",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.3,
                      "parentId": "721",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "111",
                      "sla": {
                        "deliveryTime": 50,
                        "lastMileTravel": 14.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "14.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-13 00:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      }} }

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      
      <div className="restaurant-container">
        <RestaurantCard resData={resObj}/> 
      </div>
    </div>
  );
};

const AppLayout=()=>(
    <div className="app">
        <Header/>
        <Body/>

    </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);