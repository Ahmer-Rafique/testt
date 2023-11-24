import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
   let data = await req.json();
console.log(data);
    return NextResponse.json({
        message:data
    })

}



