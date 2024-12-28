import React from 'react';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative min-h-screen flex items-center justify-center">
        <h1 className="text-white font-serif text-8xl md:text-9xl opacity-75">
          Luscinia
        </h1>
      </div>
    </div>
  );
}