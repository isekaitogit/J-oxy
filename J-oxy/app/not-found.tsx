import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
        <p className="text-xl mb-8">Page not found</p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-cyan-400 text-black rounded-lg hover:bg-cyan-500 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
