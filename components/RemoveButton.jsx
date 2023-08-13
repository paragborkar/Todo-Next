"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import {AiOutlineDelete} from "react-icons/ai";


const RemoveButton = (id) => {
  const router = useRouter();
  const removeList = async () =>{
    const confirmed= confirm("Are You Sure To Delete Todo?");

    if(confirmed){
      const res= fetch(`http://localhost:3000/api/list?id=${id.id}`,
      {
        method:"DELETE",
      });
      router.refresh();
    }
  }
  return (
   <button onClick={removeList}>
        <AiOutlineDelete size={24} style={{color:"red"}}/>
   </button>
  )
}

export default RemoveButton
