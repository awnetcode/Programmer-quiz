import '../styles/selectCategory.css';
import { useState, useEffect } from 'react';

const SelectCategory = () =>{
    const [category, setCategory] = useState('NodeJs');
    const changeCategory = (e) =>{
        const currentCategory = e.target.value;
        setCategory(currentCategory);
        console.log(category);
    }

    useEffect(() => {
        //changeCategory();
    }, []);

    return(
        <>
        <select className="select-category">
            <option onSelect={()=>changeCategory} value="NodeJs">NodeJs</option>
            <option onSelect={()=>changeCategory} value="Linux">Linux</option>
        </select> 
        </>
    )
}

export default SelectCategory;