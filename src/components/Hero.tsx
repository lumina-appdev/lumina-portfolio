const values = [
  { en: "Fast delivery", zh: "快速交付" },
  { en: "Clean design",  zh: "简洁设计" },
  { en: "Fair pricing",  zh: "合理价格" },
  { en: "Always responsive", zh: "随时在线" },
];

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Left — headline + CTA */}
        <div>
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 text-xs text-gray-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-sprout pulse-dot" />
            Available for new projects &nbsp;·&nbsp; 接受新项目
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
            Websites & apps that help your business grow.
          </h1>
          <p className="text-base text-gray-500 mb-2">
            Modern, affordable web and mobile development for small businesses in Australia.
          </p>
          <p className="text-sm text-gray-400 mb-10">
            为澳洲小企业提供现代网站与应用开发服务。
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-block bg-sprout text-white text-sm font-medium px-6 py-3 rounded-sm hover:bg-sprout-dark transition-colors text-center"
            >
              Get a free quote
            </a>
            <a
              href="#work"
              className="inline-block border border-gray-200 text-gray-600 text-sm font-medium px-6 py-3 rounded-sm hover:border-sprout hover:text-sprout transition-colors text-center"
            >
              See our work
            </a>
          </div>
        </div>

        {/* Right — profile strip + values */}
        <div className="border-t border-gray-200 pt-8 md:border-t-0 md:pt-0 md:border-l md:border-gray-200 md:pl-16">
          {/* Profile strip */}
          <div className="mb-8">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Studio</p>
            <p className="font-semibold text-gray-900">Gloria Chen</p>
            <p className="text-sm text-gray-500">Founder &amp; Developer</p>
            <p className="text-sm text-gray-400 mt-1">📍 Australia</p>
          </div>

          <div className="border-t border-gray-100" />

          {/* Values list */}
          <div className="mt-8">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">How we work</p>
            <ul className="space-y-0">
              {values.map((v, i) => (
                <li key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <span className="text-sm text-gray-700">{v.en}</span>
                  <span className="text-xs text-gray-400">{v.zh}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
