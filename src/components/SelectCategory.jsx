import '../styles/selectCategory.css';
import { useContext } from 'react';
import { QuizContext } from './QuizProvider';


const SelectCategory = () =>{

    const { changeCategory } = useContext(QuizContext);

    return(
        <select onChange={changeCategory} className="select-category">
            <option value="React">React</option>
            <option value="VueJS">VueJS</option>
            <option value="Next.js">Next.js</option>
            <option value="NodeJs">NodeJs</option>
            <option value="SQL">SQL</option>
            <option value="Code">Code</option>
            <option value="Linux">Linux</option>
            <option value="DevOps">DevOps</option>
            <option value="WordPress">WordPress</option>
            <option value="Django">Django</option>
            <option value="Docker">Docker</option>
            <option value="Postgres">Postgres</option>
            <option value="Laravel">Laravel</option>
            <option value="cPanel">cPanel</option>
        </select> 
    )
}

export default SelectCategory;