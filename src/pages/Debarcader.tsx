import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const features = [
  { icon: "Layers", label: "2 этажа", desc: "Просторные открытые палубы на каждом уровне" },
  { icon: "Users", label: "До 100 гостей", desc: "Идеально для корпоративов и торжеств" },
  { icon: "UtensilsCrossed", label: "Банкетный зал", desc: "Полностью оборудованная кухня и зал" },
  { icon: "Music", label: "Звук и свет", desc: "Профессиональное оборудование для мероприятий" },
  { icon: "Waves", label: "Прямо на воде", desc: "Панорамный вид на Волгу с обоих этажей" },
  { icon: "ParkingSquare", label: "Причал", desc: "Собственный пирс для прибытия на лодках" },
];

const Debarcader = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#020d1a] to-blue-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,80,140,0.25),transparent_70%)] pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4 mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white text-2xl font-bold">
            <Icon name="Anchor" size={28} className="text-blue-400" />
            По Волге Дом
          </Link>
          <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <Icon name="ArrowLeft" size={18} />
            На главную
          </Link>
        </div>
      </header>

      <div className="relative z-10 px-6 pb-20 mx-auto max-w-5xl">
        {/* Badge */}
        <div className="flex justify-center pt-10 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm">
            <Icon name="Layers" size={16} />
            Двухэтажный дебаркадер
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Дебаркадер на <span className="text-blue-400">Волге</span>
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10 text-lg">
          Двухэтажная плавучая платформа для мероприятий, банкетов, корпоративов и незабываемого отдыха прямо на воде
        </p>

        {/* Main photo */}
        <div className="rounded-2xl overflow-hidden border border-blue-900/50 mb-4">
          <img
            src="https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/files/242b7ac6-ab59-484d-9a11-6e34f532ac3e.jpg"
            alt="Двухэтажный дебаркадер на Волге"
            className="w-full h-80 object-cover"
          />
        </div>

        {/* Interior photo */}
        <div className="rounded-2xl overflow-hidden border border-blue-900/50 mb-10">
          <img
            src="https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/files/9f48dcc3-b433-41c3-ae3b-2bc4edff5c27.jpg"
            alt="Интерьер дебаркадера — банкетный зал"
            className="w-full h-72 object-cover"
          />
          <div className="px-5 py-3 bg-blue-950/40 text-gray-400 text-sm">
            Банкетный зал первого этажа — до 100 гостей
          </div>
        </div>

        {/* Description */}
        <div className="rounded-2xl border border-blue-900/50 bg-blue-950/20 p-7 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Описание</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Наш двухэтажный дебаркадер — это монументальная плавучая платформа, надёжно пришвартованная у живописного берега Волги.
            Первый этаж вмещает просторный банкетный зал с панорамными окнами и профессиональной кухней.
            Второй этаж — открытая палуба с потрясающим видом на реку, идеальная для фуршетов, танцев и торжественных мероприятий под открытым небом.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Дебаркадер подходит для корпоративных мероприятий, свадеб, дней рождения, выпускных и частных вечеринок.
            Работаем круглый год — зимой уютный интерьер с панорамными видами на заснеженную Волгу, летом — открытые террасы и речной бриз.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {features.map(({ icon, label, desc }) => (
            <div
              key={label}
              className="flex flex-col p-4 rounded-xl border border-blue-900/50 bg-blue-950/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon name={icon} size={18} className="text-blue-400" />
                <span className="text-white font-semibold text-sm">{label}</span>
              </div>
              <span className="text-gray-400 text-xs leading-relaxed">{desc}</span>
            </div>
          ))}
        </div>

        {/* Pricing + CTA */}
        <div className="rounded-2xl border border-blue-500/30 bg-blue-600/10 p-8 text-center">
          <p className="text-gray-400 text-sm mb-2">Стоимость аренды</p>
          <div className="text-5xl font-bold text-white mb-1">
            от <span className="text-blue-400">45 000 ₽</span>
          </div>
          <p className="text-gray-400 text-sm mb-8">за мероприятие · до 6 часов · до 100 гостей</p>

          <button className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold rounded-xl transition-colors w-full md:w-auto">
            <Icon name="CalendarCheck" size={22} />
            Забронировать дебаркадер
          </button>
          <p className="text-gray-500 text-xs mt-4">Оставьте заявку — мы свяжемся с вами в течение 30 минут</p>
        </div>
      </div>
    </div>
  );
};

export default Debarcader;
