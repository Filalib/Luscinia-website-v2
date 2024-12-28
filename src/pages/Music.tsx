import React from 'react';

interface Album {
  id: number;
  title: string;
  image: string;
  releaseDate: string;
  description: string;
}

const albums: Album[] = [
  {
    id: 1,
    title: "Forest Whispers",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80",
    releaseDate: "2024",
    description: "A journey through mystical woodland sounds"
  },
  {
    id: 2,
    title: "Ocean Dreams",
    image: "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&q=80",
    releaseDate: "2023",
    description: "Inspired by the rhythms of the sea"
  }
];

export default function Music() {
  const featuredAlbum = albums[0];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Featured Album */}
        <section className="py-20">
          <h2 className="text-3xl font-serif mb-12">Latest Release</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src={featuredAlbum.image}
              alt={featuredAlbum.title}
              className="rounded-lg shadow-2xl"
            />
            <div>
              <h3 className="text-4xl font-serif mb-4">{featuredAlbum.title}</h3>
              <p className="text-gray-400 mb-4">{featuredAlbum.description}</p>
              <p className="text-green-400">{featuredAlbum.releaseDate}</p>
            </div>
          </div>
        </section>

        {/* Album List */}
        <section className="py-20">
          <h2 className="text-3xl font-serif mb-12">Discography</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <div key={album.id} className="bg-white/5 rounded-lg overflow-hidden">
                <img
                  src={album.image}
                  alt={album.title}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{album.title}</h3>
                  <p className="text-gray-400 mb-2">{album.description}</p>
                  <p className="text-green-400">{album.releaseDate}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}