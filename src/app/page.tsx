// app/page.tsx
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      {/* Hero Section */}
      <section className="max-w-4xl text-center py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-6 leading-tight">
          James Taylor
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
          Frontend Developer & Designer based in Brighton
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Building beautiful, high-performance websites with a passion for user
          experience. Explore my projects, learn about my journey, or let’s
          create something amazing together!
        </p>
      </section>
    </main>
  );
}
