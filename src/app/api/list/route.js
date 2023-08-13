import { NextResponse } from "next/server";
import connectDB from "../../../../libs/mongodb";
import List from "../../../../models/list";

export async function POST(req){
    const {title, description} = await req.json();
    await connectDB();
    await List.create({
        title,
        description
    });
    return NextResponse.json({
        message: "List Created"
    },{status: 201});
}

export async function GET(){
    await connectDB();
    const list =await List.find();
    return NextResponse.json({list})
}

export async function DELETE(req){
    const id= req.nextUrl.searchParams.get("id");
    await connectDB();
    await List.findByIdAndDelete(id);
    return NextResponse.json({message: "List Deleted"})
}