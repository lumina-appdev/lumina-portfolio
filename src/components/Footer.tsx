export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-gray-900">Sprout Studio</p>
          <p className="text-xs text-gray-400 mt-0.5">Trading as Lumina Software</p>
        </div>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Lumina Software. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/lumina-appdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:hello@sproutstudio.au"
            className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
          >
            hello@sproutstudio.au
          </a>
        </div>
      </div>
    </footer>
  );
}
