import '../styles/selectCategory.css';

const SelectCategory = () =>{

    // const changeCategory = (e) =>{
    //     const currentCategory = e.target.value;
    //     setCategory(currentCategory);
    //     console.log(category);
    // }

    return(
        <>
        <select className="select-category">
            <option value="NodeJs">NodeJs</option>
            <option value="Linux">Linux</option>
        </select> 
        </>
    )
}

export default SelectCategory;