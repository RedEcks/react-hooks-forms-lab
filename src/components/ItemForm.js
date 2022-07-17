import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName,setItemName]=useState("")
  const [itemCategory,setItemCategory]=useState("Produce")

  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory,
  };

  function handleSubmit(event){
    event.preventDefault()
    console.log("new item",newItem)
    onItemFormSubmit(newItem)
  }

  function handleCategoryChange(event){
    setItemCategory(event.target.value)
    console.log("category",event.target.value)
  }

  function handleNameChange(event){
    setItemName(event.target.value)
    console.log("name",event.target.value)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
