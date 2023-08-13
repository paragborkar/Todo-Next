import EditListForm from '../../../../components/EditListForm'
import React from 'react'

const page = async({params}) => {
  const {id} = params;
  const getListById = async (id) =>{
    try{
      const res= await fetch(`http://localhost:3000/api/list/${id}`,{
        cache : "no-store"
      });
      if(!res.ok){
        throw new Error("Failed To Fetch List");
      }
      return res.json();
    }catch(err){
        console.log(err);
    }
  }
  const {list}= await getListById(id);
  const {title ,description} = list;
  return (
    <EditListForm id={id} title={title}  description={description} />
  )
}

export default page
