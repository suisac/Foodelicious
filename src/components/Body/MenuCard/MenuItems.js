const MenuItems=(props)=>{  
          
    const imgUrl='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + props.imageId;
    return(
        <div>
        <div className='mx-6 my-11 flex justify-between border border-b-gray-400'>
            <div className="w-10/12">
                <h3 className="text-xl font-semibold">{props.name}</h3>
                <h4 className="text-lg mb-3">Rs. {props.price/100}</h4>
                <h3 className="text-gray-500">{props.desc}</h3>
            </div>
            <div className="w-2/12">
                {props.imageId? <img className='w-32 h-28 rounded-lg m-4' alt="menuImage" src={imgUrl}/> : ''} 
            </div>
        </div>
        </div>
    )
}

export default MenuItems;