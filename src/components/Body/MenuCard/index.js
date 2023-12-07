import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import MenuItems from "./MenuItems";
import Shimmer from "../../Shimmer";
import { MENU_API } from "../../../common/constant";
import Category from "./Category";

const MenuCard=()=>{
    const [menuItems, setMenuItems]=useState([]);
    const [resName, setResName]=useState("");
    const [cuisine, setCuisine]=useState("");
    const [rating, setRating]=useState(0);

    const {resId}=useParams();

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async ()=>{
        const data= await fetch(MENU_API(resId));
        const json= await data.json();
        setResName(json?.data?.cards[0]?.card?.card?.info?.name);
        setCuisine(json?.data?.cards[0]?.card?.card?.info?.cuisines.join(", "));
        setRating(json?.data?.cards[0]?.card?.card?.info?.avgRating);
        const itemMenus= json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        setMenuItems(itemMenus);

    }

    return (!menuItems || menuItems.length===0)? <Shimmer/>: (
        <div>
        <div className="flex justify-between mx-[470px] px-[80px] mt-16 mb-12 pb-16 border border-dotted border-b-gray-800">
            <div>
                <div className="text-3xl font-bold">
                    {resName}
                </div>
                <div className="text-gray-600">
                    {cuisine}
                </div>
            </div>
            <div className="text-xl text-green-800" >{rating} <span className="fa fa-star"></span></div>
        </div>
        <div>
        {menuItems.map((category)=>{ 
            return <Category key={category?.card?.card?.title} items={category?.card?.card?.itemCards} title={category?.card?.card?.title} />
                
        })}
        </div>
        </div>
    )
}

export default MenuCard;