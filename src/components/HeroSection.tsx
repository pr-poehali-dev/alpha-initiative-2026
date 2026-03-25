import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const features = [
  { icon: "Ship", label: "Хаусботы", desc: "Проживание на воде" },
  { icon: "Layers", label: "Дебаркадеры", desc: "Просторные платформы" },
  { icon: "Flame", label: "Баня на понтоне", desc: "Пар прямо на реке" },
  { icon: "Sailboat", label: "Водная техника", desc: "Катера и гидроциклы" },
];

const stats = [
  { icon: "Star", value: "4.9", label: "Рейтинг" },
  { icon: "Users", value: "3 200+", label: "Гостей" },
  { icon: "Calendar", value: "5 лет", label: "На рынке" },
  { icon: "MapPin", value: "12+", label: "Локаций" },
];

const navItems = ["Хаусботы", "Дебаркадер", "Баня на воде", "Водная техника", "Цены", "О нас"];
const navSlugs = ["/houseboats", "/debarcader", "#banya", "#watercraft", "#pricing", "#about"];

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-[#020d1a] to-blue-950 flex flex-col">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,80,140,0.35),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,40,90,0.25),transparent_60%)]"></div>

      {/* Navigation */}
      <header className="relative z-10 px-6 py-4 mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 text-white text-2xl font-bold">
              <Icon name="Anchor" size={28} className="text-blue-400" />
              По Волге Дом
            </Link>
            <nav className="hidden ml-12 space-x-8 md:flex">
              {navItems.map((item, index) => (
                <Link
                  key={item}
                  to={navSlugs[index]}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="px-4 py-2 text-white hover:text-gray-200 transition-colors">
              Войти
            </Link>
            <Link
              to="/booking"
              className="px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-600 transition-colors"
            >
              Забронировать
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col flex-1 items-center justify-center px-6 py-12 mx-auto text-center max-w-7xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm">
          <Icon name="Waves" size={16} />
          Уникальный отдых на воде
        </div>

        <h1 className="max-w-4xl mx-auto text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
          Ваш отдых на <span className="text-blue-400">Волге</span> —<br />
          под ключ, круглый год
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300">
          Бронируйте хаусботы, дебаркадеры, баню на понтоне и водную технику.<br />
          Незабываемый опыт — от уютного проживания до активного отдыха на воде.
        </p>
        <div className="flex flex-col mt-10 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link
            to="/booking"
            className="flex items-center justify-center px-8 py-3 text-lg font-medium text-gray-900 bg-white rounded-md hover:bg-gray-100 transition-colors"
          >
            Забронировать сейчас
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Link>
          <Link
            to="/catalog"
            className="flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
          >
            <Icon name="LayoutGrid" size={20} className="mr-2" />
            Смотреть каталог
          </Link>
        </div>

        {/* Features row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full max-w-4xl">
          {features.map(({ icon, label, desc }) => (
            <div
              key={label}
              className="flex flex-col items-center p-5 rounded-xl border border-blue-900/50 bg-blue-950/30 backdrop-blur-sm hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/20 mb-3">
                <Icon name={icon} size={24} className="text-blue-400" />
              </div>
              <span className="text-white font-semibold text-sm">{label}</span>
              <span className="text-gray-400 text-xs mt-1">{desc}</span>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="w-full mt-20">
          <p className="mb-8 text-gray-400">
            Нам доверяют <span className="text-white">тысячи гостей</span> — корпоративы, романтические вечера и семейный отдых
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {stats.map(({ icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon name={icon} size={22} className="text-blue-400 mb-1" />
                <span className="text-white text-2xl font-bold">{value}</span>
                <span className="text-gray-400 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;