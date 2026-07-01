import { useContext } from "react"; // 1. React hata diya
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list && food_list.length > 0 ? ( // 2. Safety Check laga diya
          food_list.map((item) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={item._id} // 3. index ki jagah _id
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
            return null;
          })
        ) : (
          <p>Loading Dishes...</p> // 4. Loading dikhega
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;



/*import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if ((category === "All" || category === item.category))
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
        
          }
          return null;
        })
      ):(
          <p>Loading dishes...</p>
      </div>
    </div>
  );
};

export default FoodDisplay;*/




