const services = [
  {
    name: "Landing page",
    nameZh: "落地页",
    desc: "One focused page to launch fast and capture leads.",
    descZh: "快速上线，精准获客",
    price: "$150",
    priceNote: "fixed",
  },
  {
    name: "Business website",
    nameZh: "企业网站",
    desc: "Multi-page site with all the essentials for a small business.",
    descZh: "完整网站，建立专业形象",
    price: "$250",
    priceNote: "fixed",
  },
  {
    name: "Mobile app",
    nameZh: "手机应用",
    desc: "Cross-platform iOS & Android built with React Native.",
    descZh: "iOS & Android 跨平台开发",
    price: "Custom",
    priceNote: "quote",
  },
  {
    name: "Web app",
    nameZh: "网页应用",
    desc: "Full-stack application with backend, auth, and database.",
    descZh: "全栈应用，后端 + 数据库",
    price: "Custom",
    priceNote: "quote",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-gray-100 bg-sprout-light">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Services</h2>
          <span className="text-xs text-gray-400 hidden sm:block">服务 &amp; 价格</span>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-[1fr_auto] sm:grid-cols-[2fr_3fr_auto] gap-x-6 py-2 border-b border-gray-300 mb-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Service</p>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider hidden sm:block">Description</p>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">Price</p>
        </div>

        {/* Rows */}
        {services.map((s) => (
          <div
            key={s.name}
            className="grid grid-cols-[1fr_auto] sm:grid-cols-[2fr_3fr_auto] gap-x-6 py-5 border-b border-gray-200 last:border-b-0 items-center group"
          >
            {/* Name */}
            <div>
              <p className="text-sm font-semibold text-gray-900 group-hover:text-sprout transition-colors">
                {s.name}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{s.nameZh}</p>
            </div>

            {/* Description — hidden on mobile */}
            <div className="hidden sm:block">
              <p className="text-sm text-gray-600">{s.desc}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.descZh}</p>
            </div>

            {/* Price */}
            <div className="text-right">
              <p className={`text-xl font-bold ${s.priceNote === "fixed" ? "text-sprout" : "text-gray-500"}`}>
                {s.price}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                {s.priceNote === "fixed" ? "AUD" : "get a quote"}
              </p>
            </div>
          </div>
        ))}

        <p className="mt-8 text-xs text-gray-400">
          Prices are starting points for straightforward projects. Complex requirements are quoted individually.{" "}
          <a href="#contact" className="text-sprout hover:underline">Get in touch →</a>
        </p>
      </div>
    </section>
  );
}
