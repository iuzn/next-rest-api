import { NextResponse } from 'next/server';

export async function GET() {
        return NextResponse.json({
                message: 'Here is an example of API route.',
                obj: {
                    name: 'Ibrahim Uzun',
                    born: 1996,
                    address: 'Uskudar, Istanbul, Turkey',
                    hobbies: ['bycicle', 'hiking', 'chess', 'coding'],
                }
        });
}
