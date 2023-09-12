"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [title , setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();
  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(!title || !description){
      alert("Title And Descrition Are Required.");
      return;
    }

    try{
      const res =await fetch(`/api/list`,{
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({title,description})
      });
      if(res.ok){
        router.refresh();
        router.push("/");
      }else{
        throw new Error("Failed to create new Task")
      }
    }catch(err){
      console.log(err);
    }
  }
  return (
    <form className='addList' onSubmit={handleSubmit}>
    <input placeholder='Title'  type='text'onChange={(e) => setTitle(e.target.value)} value={title}/><br/>
    <input placeholder='Description' type='text' onChange={(e) => setDescription(e.target.value)} value={description}/>
    <button className='button1' type="submit">Add Task</button>
    </form>
  )
}

export default page
