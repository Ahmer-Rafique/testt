import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        data:[{name:"Ahmer Ali"}, {name:"Mammon"}]
    })
}