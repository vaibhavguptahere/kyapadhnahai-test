import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 ">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-foreground font-poppins">Not Found!
        </h1>
        <p className="text-lg text-muted-foreground font-inter">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2 text-sm font-medium text-white bg-purple-600 rounded-xl hover:bg-purple-700 transition animate-bounce font-inter"
        >
          Get me Back
        </Link>
      </div>
    </main>
  );
}
