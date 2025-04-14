export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <nav className="mb-4 flex flex-wrap justify-center gap-6 text-sm">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
        </nav>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Product. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
