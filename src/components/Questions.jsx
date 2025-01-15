import { useState, useEffect } from "react";

const Questions = () => {

    const [item, setItem] = useState('');

    fetch("https://quizapi.io/api/v1/questions", {
        headers: {
            "X-Api-Key": "hqB1z4JM9jKdxXjM4aN32qnV7NXAmNXCOzY0aQN1" //klucz API generowany po zalogowaniu
        }
    }).then(
        response=>{
            if (!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }).then(data =>{
            console.log(data[0]);
        })

        useEffect(() =>{
            setItem('Bomba Tyka');
        }, [])


        return(
            <>
            <div className="question">{item}</div>
            </>
        )
}

export default Questions;