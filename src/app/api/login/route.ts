
import { createClient } from "@/utils/supabase/server";
import { createClientBrowser } from "@/utils/supabase/client";
import { NextRequest, NextResponse } from "next/server"; 

export async function POST(req: NextRequest) {
    const supabase = createClient();
    
    const {  phone,  password } = await req.json();
    
    try {
        const { data, error } = await supabase
            .from('users')
            .select( "*").
            match({ phone, password });
        
        if (error) throw error;
        
        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: error  });
    }
}
