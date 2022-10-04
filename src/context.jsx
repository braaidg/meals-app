import { createContext, useContext, useEffect, useState } from "react";


const AppContext = createContext();

import axios from 'axios'
const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=a"
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [meals, setMeals] = useState([]);

  const fetchMeals = async (url) => {
    setLoading(true)
    try {
      const { data } = await axios(url)
      if (data.meals) {
        setMeals(data.meals)
      } else {
        setMeals([])
      }
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);

  return (
    <AppContext.Provider value={{meals, loading}}>
      {children}
    </AppContext.Provider>
  );
};

//Custom hook to avoid importing usecontext and appcontext everytime we need data in components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
