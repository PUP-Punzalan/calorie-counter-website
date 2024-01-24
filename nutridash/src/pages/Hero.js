import React, { useEffect, useState } from "react";
import supabase from "../config/SupabaseClient";

const Hero = () => {
  const [fetchError, setFetchError] = useState(null);
  const [foods, setFoods] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      const { data, error } = await supabase.from("FoodItem").select();

      if (error) {
        setFoods(null);
        setFetchError(error);
      }
      if (data) {
        setFoods(data);
        setFetchError(null);
      }
    };

    fetchFoods();
  }, []);

  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      {foods && (
        <div>
          {foods.map((food) => (
            <p>
              {food.name}, {food.value}, {food.unit}, {food.calories},{" "}
              {food.proteins}, {food.carbs}, {food.fats}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;
