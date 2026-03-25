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
    <div className="relative min-h-screen overflow-hidden flex flex-col" style={{background: "linear-gradient(135deg, #e8f5e9 0%, #f0faf0 40%, #d4f0d4 100%)"}}>
      {/* Background soft blobs */}
      <div className="absolute inset-0" style={{background: "radial-gradient(circle at 80% 90%, rgba(144,238,144,0.35), transparent 60%)"}}></div>
      <div className="absolute inset-0" style={{background: "radial-gradient(circle at 10% 10%, rgba(200,255,200,0.2), transparent 50%)"}}></div>

      {/* Navigation */}
      <header className="relative z-10 px-6 py-4 mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold" style={{color: "#1a8fc1"}}>
              <Icon name="Anchor" size={28} style={{color: "#1a8fc1"}} />
              По Волге Дом
            </Link>
            <nav className="hidden ml-12 space-x-8 md:flex">
              {navItems.map((item, index) => (
                <Link
                  key={item}
                  to={navSlugs[index]}
                  className="transition-colors font-medium"
                  style={{color: "#3a7a50"}}
                  onMouseEnter={e => (e.currentTarget.style.color = "#1a8fc1")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#3a7a50")}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="px-4 py-2 font-medium transition-colors" style={{color: "#3a7a50"}}>
              Войти
            </Link>
            <Link
              to="/booking"
              className="px-5 py-2 rounded-lg font-semibold text-white transition-colors"
              style={{background: "#1a8fc1"}}
            >
              Забронировать
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col flex-1 items-center justify-center px-6 py-12 mx-auto text-center max-w-7xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border text-sm font-medium" style={{borderColor: "#90d4a0", background: "#d4f5da", color: "#2e7d4f"}}>
          <Icon name="Waves" size={16} />
          Уникальный отдых на воде
        </div>

        <h1 className="max-w-4xl mx-auto text-4xl font-bold md:text-5xl lg:text-6xl leading-tight" style={{color: "#1b4332"}}>
          Ваш отдых на <span style={{color: "#1a8fc1"}}>Волге</span> —<br />
          под ключ, круглый год
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg" style={{color: "#3a7a50"}}>
          Бронируйте хаусботы, дебаркадеры, баню на понтоне и водную технику.<br />
          Незабываемый опыт — от уютного проживания до активного отдыха на воде.
        </p>
        <div className="flex flex-col mt-10 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link
            to="/booking"
            className="flex items-center justify-center px-8 py-3 text-lg font-semibold text-white rounded-xl transition-colors shadow-md"
            style={{background: "#1a8fc1"}}
          >
            Забронировать сейчас
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Link>
          <Link
            to="/catalog"
            className="flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-xl transition-colors border"
            style={{color: "#1b4332", borderColor: "#90d4a0", background: "#c8f0d0"}}
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
              className="flex flex-col items-center p-5 rounded-xl border transition-all hover:shadow-md"
              style={{borderColor: "#a8ddb5", background: "#eaf7ec"}}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full mb-3" style={{background: "#c2eec8"}}>
                <Icon name={icon} size={24} style={{color: "#1a8fc1"}} />
              </div>
              <span className="font-semibold text-sm" style={{color: "#1b4332"}}>{label}</span>
              <span className="text-xs mt-1" style={{color: "#5a9a6a"}}>{desc}</span>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="w-full mt-20">
          <p className="mb-8" style={{color: "#5a9a6a"}}>
            Нам доверяют <span style={{color: "#1b4332", fontWeight: 600}}>тысячи гостей</span> — корпоративы, романтические вечера и семейный отдых
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {stats.map(({ icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon name={icon} size={22} className="mb-1" style={{color: "#1a8fc1"}} />
                <span className="text-2xl font-bold" style={{color: "#1b4332"}}>{value}</span>
                <span className="text-sm" style={{color: "#5a9a6a"}}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
