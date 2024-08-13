import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"
import { useEffect, useState } from "react";

const Body= () => {
    let [restaurantList,setRestaurantList]=useState([]);
    const[searchText,setSearchText]=useState("");
    let [filteredRestaurant,setFilteredRestaurant]=useState([]);

    console.log("body");
    useEffect(() =>{
        fetchData();
    },[]);
    const fetchData = async() => {
        const data= await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        )
        const json =await data.json();
        const arr=[json?.data?.cards[3],json?.data?.cards[4],json?.data?.cards[5],
        json?.data?.cards[6],json?.data?.cards[7],json?.data?.cards[8]
        ,json?.data?.cards[9]];
        console.log(arr);
        setRestaurantList(arr);
        setFilteredRestaurant(arr);
    } ;
    if (restaurantList.length ===0) {
        return <Shimmer/>
    }
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                <input type="text" value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}></input>
                <button onClick={()=>{
                     let filteredList=restaurantList.filter(
                        (res) => 
                            res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredList)
                    console.log("search");
                }}>search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                   let filteredList=resList.filter(
                        (res) => res.card.card.info.avgRating >= 4.4);
                        setFilteredRestaurant(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
               {
                filteredRestaurant.map((restaurant) => (
                  <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant}/>
                ))
               }
                
            </div>
        </div>
    )
};

export default Body;