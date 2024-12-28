import React from 'react';

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80"
            alt="Studio"
            className="rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-serif mb-8">Luscinia</h1>
            <div className="space-y-4 text-gray-300">
              <p>
                Inspired by the ethereal beauty of nature, Luscinia creates immersive musical experiences
                that transport listeners to enchanted forests, serene lakes, and mystical landscapes.
              </p>
              <p>
                With a unique blend of classical composition and modern electronic elements, each piece
                is carefully crafted to capture the essence of natural phenomena, from the gentle
                rustling of leaves to the powerful crescendo of ocean waves.
              </p>
              <p>
                Drawing inspiration from both traditional orchestral arrangements and contemporary
                ambient music, Luscinia's compositions bridge the gap between classical and modern,
                creating a distinctive sound that resonates with audiences worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}