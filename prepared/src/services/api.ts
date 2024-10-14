// import { faTrashRestore } from "@fortawesome/free-solid-svg-icons";
// import {  } from "././api";
const url = "././api/foods_data.json";
export const getSupply = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        localStorage.setItem("supply", JSON.stringify(data));
         return data;        
    } catch (error) {
        console.error("Error fetching cocktail by name:", error);
        throw error;
    }
};

export function sortByBestBefore(food: { best_before_date: string }[]): { best_before_date: string }[] {

    return food.sort((a, b) => {
        const dateA = new Date(a.best_before_date);
        const dateB = new Date(b.best_before_date);
        return dateA.getTime() - dateB.getTime();
    });

}

// export let getBesBefore: () => number[] = () => {
//     try {
//         const supply = localStorage.getItem('supply');
//         const food = supply ? JSON.parse(supply) : null;
//                 console.log("food.typeof");

//          return [food];
//         // alert(food);
    
//         // if (food) {
            
//         // }
    
//     } catch (error) {
//         console.error("Error fetching random cocktail:", error);
//         throw error;
//     }

   
// };

// export const getBesBefore() {
//     try {
//         const supply = localStorage.getItem('supply');
//         const food = supply ? JSON.parse(supply) : null;
//         console.log(food);
    
//         // if (food) {
            
//         // }
    
//     } catch (error) {
//         console.error("Error fetching random cocktail:", error);
//         throw error;
//     }
// };


// export const getRandomCocktail = async () => {
//     try {
//         const response = await fetch(
//             "https://www.thecocktaildb.com/api/json/v1/1/random.php"
//         );
//         const data = await response.json();
//         const drink: Drink = data.drinks[0];

//         return drink;
//     } catch (error) {
//         console.error("Error fetching random cocktail:", error);
//         throw error;
//     }
// };

// export const getCocktailDetails = async (idDrink: number) => {
//     try {
//          // Check if the drink is already cached in localStorage
//         const cachedCocktail = localStorage.getItem(`cocktail_${idDrink}`);
//     if (cachedCocktail) {
//         console.log('Fetching from cache:', JSON.parse(cachedCocktail)); 
//         return JSON.parse(cachedCocktail); // Return cached data
//     }

//         // Fetch the drink from the API if not cached
//         const response = await fetch(
//             `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
//         );
//         const data = await response.json();

//         // If the drink is found, cache it and return the result
//         if (data.drinks) {
//             const drink: Drink = data.drinks[0];
//             localStorage.setItem(`cocktail_${idDrink}`, JSON.stringify(drink)); // Cache the result
//             return drink;
//         }
    
//         return null; // Return null if no drink found
//     } catch (error) {
//         console.error('Error fetching cocktail details:', error);
//         throw error;
//     }
// };

// //Fetch ingredient details
// export const getIngredientByName = async (name: string) => {
//     try {
//         // Check if the ingredient is already cached in localStorage
//         const cachedIngredient = localStorage.getItem(`ingredient_${name}`);
//         if (cachedIngredient) {
//             console.log('Fetching ingredient from cache:', JSON.parse(cachedIngredient));
//             return JSON.parse(cachedIngredient); // Return cached data
//         }

//         // Fetch the ingredient from the API if not cached
//         const response = await fetch(
//             `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`
//         );
//         const data = await response.json();

//         // If the ingredient is found, cache it and return the result
//         if (data.ingredients) {
//         const ingredient = data.ingredients[0];
//         localStorage.setItem(`ingredient_${name}`, JSON.stringify(ingredient)); // Cache the result
//         console.log('Fetched ingredient from API:', ingredient); // Log fetched data
//         return ingredient;
//     }

//     return null; // Return null if no ingredient is found
//     } catch (error) {
//         console.error("Error fetching ingredient by name:", error);
//         throw new Error("Failed to fetch ingredient details.");
//     }
// };


// //Fetch cocktails that contain a specific ingredient
// export const getCocktailsByIngredient = async (ingredient: string) => {
//     try {
//         const response = await fetch(
//             `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
//         );
//         const data = await response.json();
//         const cocktails: Drink[] = data.drinks;

//         return cocktails;
//     } catch (error) {
//         console.error("Error fetching cocktails by ingredient:", error);
//         throw new Error("Failed to fetch cocktails containing the ingredient.");
//     }
// };

// //Fetch the list of categories
// export const getCategories = async () => {
//     try {
//         const response = await fetch(
//             "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
//         );
//         const data = await response.json();

//         //Extract the category names (strCategory) from each category object in the API response and return them as an array of strings
//         const categories = data.drinks.map((category: { "strCategory": string }) => category.strCategory);

//         return categories;
//     } catch (error) {
//         console.error("Error fetching categories:", error);
//         throw new Error("Failed to fetch categories.");
//     }
// };

// //Filter cocktails by category
// export const getCocktailsByCategory = async (category: string) => {
//     try {
//         const response = await fetch(
//             `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
//         );
//         const data = await response.json();
//         const filteredDrinks: Drink[] = data.drinks;

//         return filteredDrinks;
//     } catch (error) {
//         console.error("Error fetching cocktails:", error);
//         throw new Error("Failed to fetch cocktails.")
//     }
// };

// //Filter cocktails by option
// export const getCocktailsByOption = async (option: string) => {
//     try {
//         const response = await fetch(
//             `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${option}`
//         );
//         const data = await response.json();
//         const filteredDrinks: Drink[] = data.drinks;

//         return filteredDrinks;
//     } catch (error) {
//         console.error("Error fetching cocktails:", error);
//         throw new Error("Failed to fetch cocktails.")
//     }
// };