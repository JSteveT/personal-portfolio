// app/page.tsx
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Hero Section */}
      <section className="max-w-3xl text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl text-black mb-8">
          Hi, I’m James Taylor - a frontend developer and designer based in brighton.
          Explore my projects, read about my work, or get in touch!
        </p>
      </section>
    </main>
  );
}
