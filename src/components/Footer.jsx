export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>
          © {new Date().getFullYear()} Explore Taj Holidays. All rights
          reserved.
        </p>
        <p>📍 Agra, Uttar Pradesh, India</p>
      </div>
    </footer>
  );
}
