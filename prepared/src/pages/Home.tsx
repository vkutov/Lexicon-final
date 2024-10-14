import "../styles/Home.css";
import { useEffect, useState } from 'react';
import FoodList from "../components/FoodList";
import Footer from "../components/Footer";
import FoodDetails from "../components/FoodDetails";
import { sortByBestBefore,getSupply } from "../services/api";
import { useNavigate } from 'react-router-dom';


export function Home() {
  return (
    <main className="home-main">
      <FoodList />
      <Footer />
    </main>
  );
}


const data = getSupply;
const supply = localStorage.getItem('supply');
const food = supply ? JSON.parse(supply) : null;
const foodArr: { best_before_date: string }[] = Object.values(food);
const sArr = sortByBestBefore(foodArr);
console.log(sArr[0]);
// return (
//   <FoodDetails />
// )



