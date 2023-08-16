import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        let response = await client.fetch(`*[_type == "products" ]`)
        console.log(response);
        return NextResponse.json({response})
        
     
    } catch (error) {
        console.log((error as { message: string }).message);

        return NextResponse.json({ message: "api failed" })
    }


}