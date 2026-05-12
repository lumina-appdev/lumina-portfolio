const projects = [
  {
    num: "01",
    title: "Sprout Booking",
    titleZh: "在线预约系统",
    desc: "Full-stack booking platform for service businesses. Clients book appointments online; owners manage availability from a dashboard.",
    descZh: "面向服务型企业的全栈预约平台，支持在线预约和后台管理。",
    tags: ["Next.js", "Spring Boot", "Supabase"],
    github: "https://github.com/lumina-appdev/lumina-booking",
    status: "live",
  },
  {
    num: "02",
    title: "Sprout Menu",
    titleZh: "数字菜单",
    desc: "React Native digital menu for restaurants and cafes. Scan a QR code to browse on any device — no app download required.",
    descZh: "餐厅、咖啡馆数字菜单应用，扫码即可查看，无需下载 App。",
    tags: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/lumina-appdev/lumina-menu",
    status: "live",
  },
  {
    num: "03",
    title: "Coming Soon",
    titleZh: "即将推出",
    desc: "Next project in progress. Have something in mind? It could be yours.",
    descZh: "下一个项目正在开发中。有想法？欢迎联系。",
    tags: [],
    github: null,
    status: "soon",
  },
];

export default function Work() {
  return (
    <section id="work" className="border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Work</h2>
          <span className="text-xs text-gray-400 hidden sm:block">项目展示</span>
        </div>

        {/* Numbered list */}
        <ul className="divide-y divide-gray-100">
          {projects.map((p) => (
            <li key={p.num} className="py-8 grid grid-cols-[3rem_1fr] gap-6 group">
              {/* Number */}
              <span className="text-xs font-mono text-gray-300 group-hover:text-sprout transition-colors pt-0.5">
                {p.num}
              </span>

              {/* Content */}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className={`font-semibold text-lg leading-snug ${p.status === "soon" ? "text-gray-400" : "text-gray-900"}`}>
                    {p.title}
                  </h3>
                  <span className="text-xs text-gray-400">{p.titleZh}</span>
                  {p.status === "live" && (
                    <span className="text-xs font-medium text-sprout">● Live</span>
                  )}
                </div>

                <p className={`text-sm leading-relaxed mb-1 ${p.status === "soon" ? "text-gray-400" : "text-gray-600"}`}>
                  {p.desc}
                </p>
                <p className="text-xs text-gray-400 mb-4">{p.descZh}</p>

                <div className="flex flex-wrap items-center gap-4">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-500 font-medium">
                      {tag}
                    </span>
                  ))}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-sprout transition-colors ml-auto"
                    >
                      View on GitHub →
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
