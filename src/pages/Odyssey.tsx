import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const specs = [
  { icon: "Users", label: "До 15 гостей", desc: "Комфорт для 12 человек, максимум 15" },
  { icon: "Bed", label: "2 каюты", desc: "Двуспальные кровати на главной палубе" },
  { icon: "Flame", label: "Баня на дровах", desc: "Панорамное остекление, с/у с душем" },
  { icon: "Waves", label: "Джакузи", desc: "На верхней палубе с видом на Волгу" },
  { icon: "ChefHat", label: "Камбуз", desc: "Газовая плита, холодильник, посуда" },
  { icon: "Music", label: "Аудиосистема", desc: "Мощный звук, USB и Bluetooth" },
  { icon: "Armchair", label: "Носовая палуба", desc: "Ротанговая мебель для отдыха" },
  { icon: "UtensilsCrossed", label: "Барбекю", desc: "Газовое барбекю на кормовой палубе" },
  { icon: "GlassWater", label: "Барная стойка", desc: "Стол на 12 персон на верхней палубе" },
];

const Odyssey = () => {
  return (
    <div className="min-h-screen" style={{background: "linear-gradient(135deg, #e8f5e9 0%, #f0faf0 40%, #d4f0d4 100%)"}}>

      {/* Header */}
      <header className="relative z-10 px-6 py-4 mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold" style={{color: "#1a8fc1"}}>
            <Icon name="Anchor" size={28} style={{color: "#1a8fc1"}} />
            По Волге Дом
          </Link>
          <Link to="/houseboats" className="flex items-center gap-2 font-medium transition-colors" style={{color: "#3a7a50"}}>
            <Icon name="ArrowLeft" size={18} />
            Все хаусботы
          </Link>
        </div>
      </header>

      <div className="px-6 pb-20 mx-auto max-w-5xl">
        {/* Badge */}
        <div className="flex justify-center pt-10 mb-4 gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white" style={{background: "#1a8fc1"}}>
            VIP
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium" style={{borderColor: "#90d4a0", background: "#d4f5da", color: "#2e7d4f"}}>
            <Icon name="Ship" size={16} />
            Плавдом «Одиссей»
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{color: "#1b4332"}}>
          Плавдом <span style={{color: "#1a8fc1"}}>«Одиссей»</span>
        </h1>
        <p className="text-center max-w-2xl mx-auto mb-10 text-lg" style={{color: "#5a9a6a"}}>
          Воплощение шика и комфорта на воде — уникальный дизайн, неповторимый интерьер и полный набор удобств для незабываемого отдыха на Волге
        </p>

        {/* Main photo */}
        <div className="rounded-2xl overflow-hidden border mb-10" style={{borderColor: "#a8ddb5"}}>
          <img
            src="https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/bucket/33d2d8e0-6200-4f52-aba4-8df9c6ae210c.jpeg"
            alt="VIP плавдом Одиссей на Волге"
            className="w-full object-cover"
            style={{maxHeight: "480px"}}
          />
        </div>

        {/* Description */}
        <div className="rounded-2xl border p-7 mb-8" style={{borderColor: "#a8ddb5", background: "#eaf7ec"}}>
          <h2 className="text-2xl font-bold mb-4" style={{color: "#1b4332"}}>Описание</h2>
          <p className="leading-relaxed mb-4" style={{color: "#3a7a50"}}>
            Предлагаем вам комфортабельный плавдом класса «ВИП» — «Одиссей». Уникальный внешний вид и неповторимый дизайн интерьера делают его особенным среди всех плавдомов подобного уровня.
          </p>
          <p className="leading-relaxed mb-4" style={{color: "#3a7a50"}}>
            Большое пространство кают-компании соединило в себе гостевую зону с мягким кожаным диваном и банкетным столом, бар и камбуз с полным оснащением.
          </p>
          <p className="leading-relaxed" style={{color: "#3a7a50"}}>
            Посадка и высадка — <strong>Коптев овраг</strong> (пос. Управленческий) и <strong>пристань Поляна Фрунзе</strong> (пос. Управленческий). Иное оговаривается индивидуально.
          </p>
        </div>

        {/* Specs — main deck */}
        <h2 className="text-xl font-bold mb-4" style={{color: "#1b4332"}}>Характеристики</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {specs.map(({ icon, label, desc }) => (
            <div key={label} className="flex flex-col p-4 rounded-xl border" style={{borderColor: "#a8ddb5", background: "#f0faf2"}}>
              <div className="flex items-center gap-2 mb-2">
                <Icon name={icon} size={18} style={{color: "#1a8fc1"}} />
                <span className="font-semibold text-sm" style={{color: "#1b4332"}}>{label}</span>
              </div>
              <span className="text-xs leading-relaxed" style={{color: "#5a9a6a"}}>{desc}</span>
            </div>
          ))}
        </div>

        {/* Extra info */}
        <div className="rounded-2xl border p-6 mb-10" style={{borderColor: "#a8ddb5", background: "#f0faf2"}}>
          <h3 className="font-bold mb-3" style={{color: "#1b4332"}}>Дополнительно</h3>
          <ul className="space-y-2 text-sm" style={{color: "#3a7a50"}}>
            <li className="flex items-start gap-2"><Icon name="Check" size={16} style={{color: "#1a8fc1", marginTop: 2}} />Баня на 3 часа включена в стоимость</li>
            <li className="flex items-start gap-2"><Icon name="Check" size={16} style={{color: "#1a8fc1", marginTop: 2}} />Дополнительный час хода сверх 5 часов — 5 000 ₽/час</li>
            <li className="flex items-start gap-2"><Icon name="Check" size={16} style={{color: "#1a8fc1", marginTop: 2}} />Пассажировместимость — до 15 человек</li>
            <li className="flex items-start gap-2"><Icon name="Check" size={16} style={{color: "#1a8fc1", marginTop: 2}} />Индивидуальные условия оговариваются отдельно</li>
          </ul>
        </div>

        {/* Pricing + CTA */}
        <div className="rounded-2xl border p-8 text-center" style={{borderColor: "#90d4a0", background: "#d4f5da"}}>
          <p className="text-sm mb-2" style={{color: "#5a9a6a"}}>Стоимость аренды</p>
          <div className="text-5xl font-bold mb-1" style={{color: "#1b4332"}}>
            <span style={{color: "#1a8fc1"}}>90 000 ₽</span>
          </div>
          <p className="text-sm mb-8 mt-1" style={{color: "#5a9a6a"}}>5 часов хода · баня включена · до 15 гостей</p>

          <button className="inline-flex items-center justify-center gap-3 px-10 py-4 text-white text-lg font-semibold rounded-xl transition-colors w-full md:w-auto" style={{background: "#1a8fc1"}}>
            <Icon name="CalendarCheck" size={22} />
            Забронировать «Одиссей»
          </button>
          <p className="text-xs mt-4" style={{color: "#5a9a6a"}}>Оставьте заявку — мы свяжемся с вами в течение 30 минут</p>
        </div>
      </div>
    </div>
  );
};

export default Odyssey;
