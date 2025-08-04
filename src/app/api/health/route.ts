import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    message: 'Asante platform is running',
    timestamp: new Date().toISOString(),
    version: '0.1.0'
  });
} 