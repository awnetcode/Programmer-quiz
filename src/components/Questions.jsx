import '../styles/questions.css'
import { useState, useEffect } from "react";

const Questions = () => {
    const [categories, setCategories] = useState([]); // Zarządzanie stanem kategorii
    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState(null); // Dla obsługi błędów

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://quizapi.io/api/v1/questions", {
                    headers: {
                        "X-Api-Key": "hqB1z4JM9jKdxXjM4aN32qnV7NXAmNXCOzY0aQN1" // Twój klucz API
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log(data);

                const fetchedCategory = data.map(value => value.category);
                const fetchedQuestion = data.map(value => value.question)
                
                setCategories(fetchedCategory);
                setQuestions(fetchedQuestion);

            } catch (error) {
                setError(error.message); // Obsługa błędu
            }
        };

        fetchData();
    }, []); // Brak zależności, bo chcemy tylko raz pobrać dane

    return (
        <div>
            {error ? (
                <div className="error">Error: {error}</div>
            ) : (
                <>
                <table cellPadding={4} border={1} className="result-table">
                    <tr className="table-header">
                        <td>Kategoria</td>
                        <td>Pytanie</td>
                    </tr>            
    {categories.map((category, index) => (
        <tr key={index} className="table-body">
        <td >{category}</td>
        <td>{questions[index]}</td>
        </tr>
    ))}          
                </table>
                </>
            )}
        </div>
    );
};

export default Questions;
