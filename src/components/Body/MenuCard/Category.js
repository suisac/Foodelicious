import MenuItems from "./MenuItems";
import { useState } from "react";

const Category=(props)=>{

    const [showItems, setShowItems]=useState(false);

    return (
        <div className="mx-[480px]">
        <div className="flex justify-between shadow-lg py-8 px-10">
            <h1 className='text-2xl font-semibold'>{props.title} ({props.items.length})</h1>
            <button onClick={()=>setShowItems(!showItems)}> 
                { showItems ? <span className="fa fa-arrow-up"></span>:<span className="fa fa-arrow-down"></span>}
            </button>
        </div>
        {showItems && props.items.map((item)=>{
            return <MenuItems key={item?.card?.info?.id} name={item?.card?.info?.name} price={item?.card?.info?.price || item?.card?.info?.defaultPrice} imageId={item?.card?.info?.imageId} desc={item?.card?.info?.description}/>
        })}
        </div>
        
    )
}

export default Category;