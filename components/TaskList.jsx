import React from 'react'
import RemoveButton from './RemoveButton'
import Link from 'next/link'
import {LuEdit} from 'react-icons/lu';
import '../styles/TaskList.css';
import { useRouter } from 'next/navigation';

const getList = async () =>{
  try{
    const res =await fetch('http://localhost:3000/api/list',
    {
      cache: "no-store"
    });
    if(!res.ok){
      throw new Error("Failed to fetch List")
    }
    return res.json();
  }catch(err){
    console.log("Error Loading List", err)
  }
}

const TaskList = async () => {
  const {list} = await getList();
  return (
    <>
    {list.map(t => (
    <div className='list'>
     <div className='topic'>
        <h2 className='heading'>{t.title}</h2>
        <div>{t.description}</div>
     </div>
     <div className='btn'>
        <RemoveButton id={t._id}/>
        <Link  href={`/editList/${t._id}`}><LuEdit size={24} className='edit-btn'/></Link>
     </div>
    </div>))}
    </>
  )
}

export default TaskList
