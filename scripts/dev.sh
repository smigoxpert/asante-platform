#!/bin/bash

# Asante Platform Development Script
echo "🚀 Starting Asante Platform Development Server..."

# Kill any existing Next.js processes
echo "🔄 Cleaning up existing processes..."
pkill -f "next dev" 2>/dev/null || true

# Wait a moment for processes to clean up
sleep 2

# Check if port 3000 is available
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Port 3000 is still in use. Attempting to free it..."
    lsof -ti:3000 | xargs kill -9 2>/dev/null || true
    sleep 2
fi

# Start the development server
echo "🎯 Starting development server on http://localhost:3000"
echo "📱 About page: http://localhost:3000/about"
echo "🔐 Auth pages: http://localhost:3000/login, http://localhost:3000/signup"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev 