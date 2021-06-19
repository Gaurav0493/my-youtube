import React from 'react';
import "./SearchBar.style.css"

function SearchBar({label,placeholder,setSearchTerm,handleSubmit}) {

    return (
        <div className="search" >
            <form className="form-case form-grid" onSubmit={(e)=>handleSubmit(e)}>
                <label id="search-lable" htmlFor="search">{label}</label>
                <input id="search-bar" type="text" htmlFor="search" placeholder={placeholder} onChange={(e)=>setSearchTerm(e.target.value)} /> 
            </form>
            
        </div>
    )
}

export default SearchBar;

