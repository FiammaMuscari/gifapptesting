import React from 'react'
import { useState } from 'react'

export const AddCategory = ({ addCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target })=>{
        setInputValue(target.value);        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length < 1) return;

        addCategory(inputValue.trim());        
        setInputValue('');
    }

  return (
    <form onSubmit={handleSubmit} style={{width: "100%",
        justifyContent: "center",
        display: "flex"}} aria-query="textbox" role="form"> 
        <input 
            type='text'
            placeholder='Buscar Gif'
            value={inputValue}
            onChange={handleInputChange}
        />
        <button type="submit" style={{padding: "0.5em",
    border: "none",
    backgroundColor: "rgb(243 90 90)"}}><div style={{display: "flex"}}><img src="https://giphy.com/static/img/search-icon.svg" width="30" style={{border: "none",
    backgroundColor: "rgb(243 90 90)",
    cursor: "pointer"}}/></div></button>     
    </form>
  )
}
