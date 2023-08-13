"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const EditListForm = ({id, title , description}) => {
  const router= useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescrition, setNewDescription] = useState(description);
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const res= await fetch(`http://localhost:3000/api/list/${id}`,
      {
        method: "PUT",
        headers : {
          "Content-type": "application/json",
        },
        body: JSON.stringify({newTitle,newDescrition}),
      });
      if(!res.ok){
        throw new Error("Failed To Update The Todo");
      }
      router.refresh();
      router.push("/");
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <form className='addList' onSubmit={handleSubmit}>
    <input placeholder='Title'  type='text' onChange={(e) =>setNewTitle(e.target.value)} value={newTitle}/><br/>
    <input placeholder='Description' type='text'onChange={(e) =>setNewDescription(e.target.value)} value={newDescrition}/>
    <button className='button1' type='submit'>Update Task</button>
    </form>
  )
}

export default EditListForm
