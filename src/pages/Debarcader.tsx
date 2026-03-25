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
    <div className="min-h-screen" style={{background: "linear-gradient(135deg, #e8f5e9 0%, #f0faf0 40%, #d4f0d4 100%)"}}>

      {/* Header */}
      <header className="relative z-10 px-6 py-4 mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold" style={{color: "#1a8fc1"}}>
            <Icon name="Anchor" size={28} style={{color: "#1a8fc1"}} />
            По Волге Дом
          </Link>
          <Link to="/" className="flex items-center gap-2 font-medium transition-colors" style={{color: "#3a7a50"}}>
            <Icon name="ArrowLeft" size={18} />
            На главную
          </Link>
        </div>
      </header>

      <div className="px-6 pb-20 mx-auto max-w-5xl">
        {/* Badge */}
        <div className="flex justify-center pt-10 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium" style={{borderColor: "#90d4a0", background: "#d4f5da", color: "#2e7d4f"}}>
            <Icon name="Layers" size={16} />
            Двухэтажный дебаркадер
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{color: "#1b4332"}}>
          Дебаркадер на <span style={{color: "#1a8fc1"}}>Волге</span>
        </h1>
        <p className="text-center max-w-2xl mx-auto mb-10 text-lg" style={{color: "#5a9a6a"}}>
          Двухэтажная плавучая платформа для мероприятий, банкетов, корпоративов и незабываемого отдыха прямо на воде
        </p>

        {/* Main photo */}
        <div className="rounded-2xl overflow-hidden border mb-4" style={{borderColor: "#a8ddb5"}}>
          <img
            src="https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/bucket/dadaf61e-71e9-4a17-b564-a2b9d7d6a296.jpeg"
            alt="Двухэтажный дебаркадер на Волге"
            className="w-full h-80 object-cover"
          />
        </div>

        {/* Interior photo */}
        <div className="rounded-2xl overflow-hidden border mb-10" style={{borderColor: "#a8ddb5"}}>
          <img
            src="https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/files/9f48dcc3-b433-41c3-ae3b-2bc4edff5c27.jpg"
            alt="Интерьер дебаркадера — банкетный зал"
            className="w-full h-72 object-cover"
          />
          <div className="px-5 py-3 text-sm" style={{background: "#eaf7ec", color: "#5a9a6a"}}>
            Банкетный зал первого этажа — до 100 гостей
          </div>
        </div>

        {/* Description */}
        <div className="rounded-2xl border p-7 mb-8" style={{borderColor: "#a8ddb5", background: "#eaf7ec"}}>
          <h2 className="text-2xl font-bold mb-4" style={{color: "#1b4332"}}>Описание</h2>
          <p className="leading-relaxed mb-4" style={{color: "#3a7a50"}}>
            Наш двухэтажный дебаркадер — это монументальная плавучая платформа, надёжно пришвартованная у живописного берега Волги.
            Первый этаж вмещает просторный банкетный зал с панорамными окнами и профессиональной кухней.
            Второй этаж — открытая палуба с потрясающим видом на реку, идеальная для фуршетов, танцев и торжественных мероприятий под открытым небом.
          </p>
          <p className="leading-relaxed" style={{color: "#3a7a50"}}>
            Дебаркадер подходит для корпоративных мероприятий, свадеб, дней рождения, выпускных и частных вечеринок.
            Работаем круглый год — зимой уютный интерьер с панорамными видами на заснеженную Волгу, летом — открытые террасы и речной бриз.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {features.map(({ icon, label, desc }) => (
            <div key={label} className="flex flex-col p-4 rounded-xl border" style={{borderColor: "#a8ddb5", background: "#f0faf2"}}>
              <div className="flex items-center gap-2 mb-2">
                <Icon name={icon} size={18} style={{color: "#1a8fc1"}} />
                <span className="font-semibold text-sm" style={{color: "#1b4332"}}>{label}</span>
              </div>
              <span className="text-xs leading-relaxed" style={{color: "#5a9a6a"}}>{desc}</span>
            </div>
          ))}
        </div>

        {/* Pricing + CTA */}
        <div className="rounded-2xl border p-8 text-center" style={{borderColor: "#90d4a0", background: "#d4f5da"}}>
          <p className="text-sm mb-2" style={{color: "#5a9a6a"}}>Стоимость аренды</p>
          <div className="text-5xl font-bold mb-1" style={{color: "#1b4332"}}>
            от <span style={{color: "#1a8fc1"}}>45 000 ₽</span>
          </div>
          <p className="text-sm mb-8" style={{color: "#5a9a6a"}}>за мероприятие · до 6 часов · до 100 гостей</p>

          <button className="inline-flex items-center justify-center gap-3 px-10 py-4 text-white text-lg font-semibold rounded-xl transition-colors w-full md:w-auto" style={{background: "#1a8fc1"}}>
            <Icon name="CalendarCheck" size={22} />
            Забронировать дебаркадер
          </button>
          <p className="text-xs mt-4" style={{color: "#5a9a6a"}}>Оставьте заявку — мы свяжемся с вами в течение 30 минут</p>
        </div>
      </div>
    </div>
  );
};

export default Debarcader;