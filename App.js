import React from "react";
import ReactDOM from "react-dom/client";

const Header= () => (
    <div className="header">
        <div className="logo-container">
            <img alt="logo" className="logo"
            src="https://i.pinimg.com/736x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg">
            </img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);
const RestaurantCard= () =>{
    return (
        <div className="res-card" style={{backgroundColor: "beige"}}>
            <img className="res-logo"
            alt="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/25/aa75acc7-4ff2-4149-95c1-1342f6454b4d_13552.jpg">
            </img>
            <h4>Meghana Foods</h4>
            <h5>Biryani,North Indian,Asian</h5>
            <h5>4.4 star</h5>
            <h5>40 mins</h5>
        </div>
    )
};
const Body= () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
};

const AppLayout= () => (
    <div className="app">
        <Header/>
        <Body/>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);