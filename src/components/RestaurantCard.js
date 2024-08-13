
import { CDN_URL } from "../utils/constant";

const RestaurantCard= (props) =>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla}=resData?.card?.card?.info;
     return (
         <div className="res-card" style={{backgroundColor: "beige"}}>
             <img className="res-logo"
             alt="res-logo"
             src={CDN_URL+cloudinaryImageId}>    
             </img>
             <h4>{name}</h4>
             <h5>{cuisines.join(", ")}</h5>
             <h5>{avgRating}</h5>
             <h5>{costForTwo}</h5>
             <h5>{sla.deliveryTime} minutes</h5>
         </div>
     )
 };

 export default RestaurantCard;