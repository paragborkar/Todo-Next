import { NextResponse } from "next/server";
import connectDB from "../../../../../libs/mongodb";
import List from "../../../../../models/list";

export async function PUT(req , {params}){
    const {id} = params;
    const { newTitle:  title , newDescription : description } = await req.json();
    await connectDB();
    await List.findByIdAndUpdate(id, {title,description});
    return NextResponse.json({message:"List Updated"}, {status : 200})
}

export async function GET(req, {params}){
    const {id} = params;
    await connectDB();
    const list =await List.findOne({_id: id});
    return NextResponse.json({list},{status:200})
}