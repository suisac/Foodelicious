import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IMG_URL } from '../../../common/constant';
  
  const RestaurantCard=(props)=>{

    const {name, cuisines, cloudinaryImageId, avgRating, costForTwo}=props?.resData?.info;
    const cuisine= cuisines.join(", ");
    const time=props?.resData?.info?.sla?.slaString;

    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
        <div>
          <img className='w-full h-52 rounded-lg' title={name} alt="cardImage" src={IMG_URL + cloudinaryImageId}/>
        </div>
        <h1 className="font-bold py-5 text-lg" title={name}>{name.length>20?name.substring(0,20) + "...":name}</h1>
        <div className='flex justify-between'>
          <h4>{time}</h4>
          <h4 className='text-green-800'>{avgRating} <span className="fa fa-star"></span></h4>         
        </div>  
        <h3>{cuisine.length>25 ? cuisine.substring(0,25)+"...":cuisine}</h3>      
        <h4>{costForTwo}</h4>
        <table>
          <th>
            <td></td>
          </th>
        </table>
      </div>
    );
  };

export default RestaurantCard;

export const withPromotedLabel=(RestaurantCard)=>{
  return()=>{
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard/>
      </div>
    )
  }
}