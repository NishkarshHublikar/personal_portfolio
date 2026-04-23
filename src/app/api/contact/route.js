import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
        );

        console.log("ENV:", {
            url: process.env.NEXT_PUBLIC_SUPABASE_URL,
            key: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ? "OK" : "MISSING"
        });

        const { data, error } = await supabase
            .from('contacts')
            .insert([{ name, email, message }]);

        if (error) {
            console.error("SUPABASE ERROR:", error);
            throw error;
        }

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error("SERVER ERROR:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}