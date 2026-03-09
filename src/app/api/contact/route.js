import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';

export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const { name, email, message } = body;

        const contact = await Contact.create({
            name,
            email,
            message
        });

        console.log('Contact Form Saved:', contact);

        return NextResponse.json(
            { message: 'Message sent successfully!' },
            { status: 201 }
        );
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { message: 'Failed to send message.' },
            { status: 500 }
        );
    }
}
