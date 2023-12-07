import React from 'react';
import { useState, useEffect } from 'react';
import '../../index.css';
import RestaurantCard,{withPromotedLabel} from './RestaurantCard';
import Shimmer from '../Shimmer';
import { Link } from 'react-router-dom';

const Body=()=>{
  const [listOfRestaurant, setListOfRestaurant]=useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant]=useState([]);
  const [searchText, setSearchText]=useState("");

  const RestaurantCardLabel=withPromotedLabel(RestaurantCard);

  useEffect(()=>{
    fetchData();
  },[]);

  useEffect(()=>{
    console.log(!listOfRestaurant);
  },[listOfRestaurant])

  if(!listOfRestaurant) return null;

  const fetchData= async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.897157137019&lng=77.59645231068134&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData=await data.json();
    console.log("jsonData", jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurant(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredListOfRestaurant(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const filterRestaurant=(searchText)=>{
    const filteredList=listOfRestaurant.filter((res)=>res?.info?.name.toLowerCase().includes(searchText));
    setFilteredListOfRestaurant(filteredList);
  }



    return ( listOfRestaurant && listOfRestaurant.length==0) ? (<Shimmer/>) : (
        <div className='appBody'>
        <div className="my-4 p-4 flex justify-center">
          <input type='text' className='px-8 border border-solid border-cyan-800 w-1/2 h-12 rounded-2xl text-base' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button className='py-3 px-4 mx-4 mb-4 bg-cyan-100 rounded-2xl' onClick={()=>{filterRestaurant(searchText)}}>Search</button>
        </div>
        <div className="flex flex-wrap ml-32">
          {filteredListOfRestaurant.map((restaurant)=>{
            return <Link key={restaurant?.info?.id} to={'/restaurant/'+restaurant?.info?.id}>
                      {<RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>}
                    </Link>
           
          })}
        </div>

      </div>
    )
  }

export default Body;