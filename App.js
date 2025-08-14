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
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    locality,
    sla,
    costText
  } = resData?.data;


    return (
    <div className="restro-card">
      <div className="image-container">
        <img
          className="food-img"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.data.cloudinaryImageId}
          alt={name}

        />
        <div className="price-tag">{costText}</div>
      </div>

      <h3 className="restro-name">{name}</h3>
      <div className="rating-time">
        <FaStar className="star-icon" /> {avgRating}
        <span className="time">{sla.slaString}</span>
      </div>

      <p className="cuisines">{cuisines.join(", ")}</p>
      <p className="location">{locality}</p>
    </div>
  );
}


const resObj = [
  { "data": { "id": "334475", "name": "Pizza Hut", "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7", "locality": "Kankarbagh", "cuisines": ["Pizzas", "Fast Food"], "avgRating": 4.1, "sla": { "slaString": "35-40 mins" }, "costText": "50% OFF UPTO ₹100" } },
  { "data": { "id": "89688", "name": "KFC", "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4", "locality": "Fraser Road", "cuisines": ["Burgers", "Biryani", "American"], "avgRating": 4.3, "sla": { "slaString": "25-30 mins" }, "costText": "ITEMS AT ₹179" } },
  { "data": { "id": "81231", "name": "Domino's Pizza", "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8", "locality": "Boring Road", "cuisines": ["Pizzas", "Italian", "Pastas"], "avgRating": 4.4, "sla": { "slaString": "20-25 mins" }, "costText": "FLAT ₹150 OFF" } },
  { "data": { "id": "499252", "name": "Burger King", "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf", "locality": "Fraser Road", "cuisines": ["Burgers", "American"], "avgRating": 4.2, "sla": { "slaString": "30-35 mins" }, "costText": "UPTO 40% OFF" } },
  { "data": { "id": "87401", "name": "Subway", "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552", "locality": "Exhibition Road", "cuisines": ["Salads", "Snacks", "Desserts"], "avgRating": 4.2, "sla": { "slaString": "25-30 mins" }, "costText": "COMBOS FROM ₹249" } },
  { "data": { "id": "87399", "name": "Behrouz Biryani", "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69", "locality": "Sri Krishna Puri", "cuisines": ["Biryani", "Mughlai", "Lucknowi"], "avgRating": 4.3, "sla": { "slaString": "35-40 mins" }, "costText": "BIRYANI FROM ₹349" } },
  { "data": { "id": "87400", "name": "Faasos - Wraps & Rolls", "cloudinaryImageId": "af33b81798b11deba338e94b7585d348", "locality": "Sri Krishna Puri", "cuisines": ["Kebabs", "Fast Food", "North Indian"], "avgRating": 4.2, "sla": { "slaString": "35-40 mins" }, "costText": "ROLLS FROM ₹129" } },
  { "data": { "id": "87402", "name": "Sweet Truth", "cloudinaryImageId": "81cf6bfe2760a45a0caf2e28716ca4d7", "locality": "Sri Krishna Puri", "cuisines": ["Snacks", "Bakery", "Desserts"], "avgRating": 4.4, "sla": { "slaString": "30-35 mins" }, "costText": "DESSERTS AT ₹149" } },
  { "data": { "id": "152335", "name": "Pind Balluchi", "cloudinaryImageId": "sbgksd3nbfztnu3jkvro", "locality": "Gandhi Maidan", "cuisines": ["North Indian", "Mughlai"], "avgRating": 4.5, "sla": { "slaString": "45-50 mins" }, "costText": "THALI AT ₹399" } },
  { "data": { "id": "249768", "name": "Haldiram's", "cloudinaryImageId": "o2rwkcz9y8qolfytzxrg", "locality": "Fraser Road", "cuisines": ["Sweets", "Snacks", "North Indian"], "avgRating": 4.6, "sla": { "slaString": "15-20 mins" }, "costText": "SNACKS FROM ₹79" } },
  { "data": { "id": "408903", "name": "Bikaner Sweets", "cloudinaryImageId": "yhfzbfzwrq8k4dhue8za", "locality": "Boring Road", "cuisines": ["Sweets", "Street Food", "Desserts"], "avgRating": 4.4, "sla": { "slaString": "20-25 mins" }, "costText": "SWEETS FROM ₹99" } },
  { "data": { "id": "443171", "name": "Indian Summer Cafe", "cloudinaryImageId": "ytb5kdajcswsox0d2yro", "locality": "Kidwaipuri", "cuisines": ["Cafe", "Continental", "Italian"], "avgRating": 4.4, "sla": { "slaString": "35-40 mins" }, "costText": "CONTINENTAL FROM ₹499" } },
  { "data": { "id": "750430", "name": "Mad Over Donuts", "cloudinaryImageId": "91f589a3b211a4361b8a883a41147926", "locality": "S.P Verma Road", "cuisines": ["Donuts", "Desserts", "Beverages"], "avgRating": 4.6, "sla": { "slaString": "20-25 mins" }, "costText": "BOX OF 6 AT ₹499" } },
  { "data": { "id": "329532", "name": "Ghar Jaisa 3.0", "cloudinaryImageId": "919b361a35b7830a3811326e1864a6c0", "locality": "Fraser Road", "cuisines": ["Home Food", "North Indian", "Thalis"], "avgRating": 4.5, "sla": { "slaString": "25-30 mins" }, "costText": "MEALS AT ₹150" } }
];


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      
    
      
      <div className="restaurant-container">
        {/* We are mapping over the restaurantList array.
          For each restaurant object in the array, we return a RestaurantCard component.
          It's important to provide a unique 'key' for each item in a list.
          We are using the restaurant's ID for the key.
        */}
        {resObj.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
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

