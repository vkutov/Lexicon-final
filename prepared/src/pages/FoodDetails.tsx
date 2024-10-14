import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/FoodInfo.css";
import Footer from "../components/Footer";

const foodDetails = () => {
    const { id } = useParams<{ id: string }>(); // get food id
    const [food, setFood] = useState<food | null>(null);
    const Navigate = useNavigate();

    useEffect(() => {
        // fetch food details by id
        fetch(`foods.json?i=${id}`)
            .then((response) => response.json())
            .then((data) => {
                setFood(data.drinks[0]);
            });
    }, [id]);

    useEffect(() => {
        // fetch food details by name
        fetch(`https://www.thefooddb.com/api/json/v1/1/search.php?s=${id}`)
            .then((response) => response.json())
            .then((data) => {
                setFood(data.drinks[0]);
            });
    }, [id]);

    if (!food) return <p>Erorr loading api</p>;

    return (
        <main className="info-main">
            <h1 className="info-header">Drink Information</h1>
            <section className="info-card">
                <aside className="info-aside info-left">
                    <h1 className="drink-header" title={food.strDrink}>
                        {food.strDrink}
                    </h1>
                    <img
                        className="info-img"
                        src={food.strDrinkThumb}
                        alt={food.strDrink}
                    />
                    <h4>
                        Category:{" "}
                        <span className="special">{food.strCategory}</span>
                    </h4>
                    <h4>
                        Type:{" "}
                        <span className="special">{food.strAlcoholic}</span>
                    </h4>
                </aside>

                <aside className="info-aside info-right">
                    
                    <section className="ingredient-container">
                        <h1 className="ingredient-header">Ingredients</h1>
                        <ul className="scroll-ingr">
                            <li>
                                {food.strMeasure1 || ""}&ensp;
                                <Link
                                    to={`/ingredient/${food.strIngredient1}`}
                                >
                                    <span className="ingredient">
                                        {food.strIngredient1 || ""}
                                    </span>
                                </Link>
                            </li>
                            <li>
                                {food.strMeasure2 || ""}&ensp;
                                <Link
                                    to={`/ingredient/${food.strIngredient2}`}
                                >
                                    <span className="ingredient">
                                        {food.strIngredient2 || ""}
                                    </span>
                                </Link>
                            </li>
                            <li>
                                {food.strMeasure3 || ""}&ensp;
                                <Link
                                    to={`/ingredient/${food.strIngredient3}`}
                                >
                                    <span className="ingredient">
                                        {food.strIngredient3 || ""}
                                    </span>
                                </Link>
                            </li>
                            <li>
                                {food.strMeasure4 || ""}&ensp;
                                <Link
                                    to={`/ingredient/${food.strIngredient4}`}
                                >
                                    <span className="ingredient">
                                        {food.strIngredient4 || ""}
                                    </span>
                                </Link>
                            </li>
                            <li>
                                {food.strMeasure5 || ""}&ensp;
                                <Link
                                    to={`/ingredient/${food.strIngredient5}`}
                                >
                                    <span className="ingredient">
                                        {food.strIngredient5 || ""}
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </section>
                    <section className="instructions-container">
                        <h1 className="instructions-header">Instructions</h1>
                        <p className="scroll-instr">
                            {food.strInstructions}
                        </p>
                    </section>
                    <button onClick={() => Navigate(-1)} className="goback-btn">
                        Go back
                    </button>
                </aside>
            </section>
            <Footer />
        </main>
    );
};

export default foodDetails;
