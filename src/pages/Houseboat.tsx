import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const specs = [
  { icon: "Users", label: "До 15 гостей", desc: "Комфорт для 12 человек, максимум 15" },
  { icon: "Bed", label: "Каюта с 2-спальной кроватью", desc: "На главной палубе" },
  { icon: "Flame", label: "Баня на дровах", desc: "Панорамный вид, 1500 ₽/час от 2 часов" },
  { icon: "Armchair", label: "Верхняя палуба", desc: "Шезлонги и банкетная зона на 12 персон" },
  { icon: "ChefHat", label: "Камбуз", desc: "Холодильник, плита, горячая/холодная вода, посуда" },
  { icon: "UtensilsCrossed", label: "Барбекю", desc: "Угольный барбекю на кормовой площадке" },
  { icon: "ShowerHead", label: "Санузел с душем", desc: "Душевая кабина, всё необходимое" },
  { icon: "Sofa", label: "Салон с диваном", desc: "TV, музыкальный центр, выход на носовую палубу" },
  { icon: "Gauge", label: "14 × 6 м, до 12 км/ч", desc: "Экипаж — 1 капитан" },
];

const tariffs = [
  {
    season: "Май / Сентябрь",
    color: "#e8f5e9",
    rows: [
      { days: "Пн — Чт", hours: "10:00–20:00", price: "45 000 ₽" },
      { days: "Пт, Вс", hours: "10:00–20:00", price: "50 000 ₽" },
      { days: "Суббота", hours: "10:00–20:00", price: "55 000 ₽" },
    ],
  },
  {
    season: "Июнь",
    color: "#e3f2fd",
    rows: [
      { days: "Пн — Чт", hours: "10:00–20:00", price: "45 000 ₽" },
      { days: "Пт, Вс", hours: "10:00–20:00", price: "55 000 ₽" },
      { days: "Суббота", hours: "10:00–20:00", price: "60 000 ₽" },
    ],
  },
  {
    season: "Июль / Август",
    color: "#fff8e1",
    rows: [
      { days: "Пн — Чт", hours: "10:00–20:00", price: "50 000 ₽" },
      { days: "Пт, Вс", hours: "10:00–20:00", price: "60 000 ₽" },
      { days: "Суббота", hours: "10:00–20:00", price: "75 000 ₽" },
    ],
  },
];

const Houseboat = () => {
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
        <div className="flex justify-center pt-10 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium" style={{borderColor: "#90d4a0", background: "#d4f5da", color: "#2e7d4f"}}>
            <Icon name="Ship" size={16} />
            Плавдом 2022 года постройки
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{color: "#1b4332"}}>
          Плавдом с <span style={{color: "#1a8fc1"}}>баней на Волге</span>
        </h1>
        <p className="text-center max-w-2xl mx-auto mb-10 text-lg" style={{color: "#5a9a6a"}}>
          Незабываемая прогулка по Волге на комфортабельном плавдоме 2022 г.п. с баней, верхней палубой и банкетной зоной
        </p>

        {/* Photo */}
        <div className="rounded-2xl overflow-hidden border mb-10" style={{borderColor: "#a8ddb5"}}>
          <img
            src="https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/bucket/e1da963c-d2c9-4d16-ac95-82180d47946e.jpeg"
            alt="Плавдом на Волге 2022"
            className="w-full object-cover"
            style={{maxHeight: "480px"}}
          />
        </div>

        {/* Description */}
        <div className="rounded-2xl border p-7 mb-8" style={{borderColor: "#a8ddb5", background: "#eaf7ec"}}>
          <h2 className="text-2xl font-bold mb-4" style={{color: "#1b4332"}}>Описание</h2>
          <p className="leading-relaxed mb-4" style={{color: "#3a7a50"}}>
            Предлагаем провести незабываемую прогулку по Волге на превосходном комфортабельном плавдоме 2022 года постройки. Вместимость по тарифу — до 15 гостей (комфорт 12 человек).
          </p>
          <p className="leading-relaxed mb-4" style={{color: "#3a7a50"}}>
            На главной палубе расположен салон с большим раскладным диваном и полноценной кухонной зоной с TV и музыкальным центром, одной каютой с двуспальной кроватью. Из салона выход на меблированную носовую палубу.
          </p>
          <p className="leading-relaxed" style={{color: "#3a7a50"}}>
            Открытая верхняя палуба с шезлонгами и банкетной зоной на 12 персон. Русская баня на дровах с панорамным видом — 1 500 ₽/час от 2 часов.
          </p>
        </div>

        {/* Specs */}
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

        {/* Tariffs */}
        <h2 className="text-xl font-bold mb-4" style={{color: "#1b4332"}}>Тарифы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {tariffs.map((t) => (
            <div key={t.season} className="rounded-2xl border overflow-hidden" style={{borderColor: "#a8ddb5"}}>
              <div className="px-4 py-3 font-bold text-center" style={{background: t.color, color: "#1b4332"}}>
                {t.season}
              </div>
              <div className="divide-y" style={{borderColor: "#a8ddb5"}}>
                {t.rows.map((r) => (
                  <div key={r.days} className="flex justify-between items-center px-4 py-3" style={{background: "#f0faf2"}}>
                    <div>
                      <div className="text-sm font-medium" style={{color: "#1b4332"}}>{r.days}</div>
                      <div className="text-xs" style={{color: "#5a9a6a"}}>{r.hours}</div>
                    </div>
                    <div className="font-bold" style={{color: "#1a8fc1"}}>{r.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra conditions */}
        <div className="rounded-2xl border p-6 mb-10" style={{borderColor: "#a8ddb5", background: "#f0faf2"}}>
          <h3 className="font-bold mb-3" style={{color: "#1b4332"}}>Условия аренды</h3>
          <ul className="space-y-2 text-sm" style={{color: "#3a7a50"}}>
            <li className="flex items-start gap-2"><Icon name="Check" size={16} style={{color: "#1a8fc1", marginTop: 2}} />При бронировании за 14 дней — 2 часа бани в подарок</li>
            <li className="flex items-start gap-2"><Icon name="Check" size={16} style={{color: "#1a8fc1", marginTop: 2}} />Аренда на сутки — доплата +15 000 ₽/ночь</li>
            <li className="flex items-start gap-2"><Icon name="Check" size={16} style={{color: "#1a8fc1", marginTop: 2}} />В стоимость включено не более 5 часов хода; сверх — 5 000 ₽/час</li>
            <li className="flex items-start gap-2"><Icon name="Check" size={16} style={{color: "#1a8fc1", marginTop: 2}} />Возвратный залог при посадке — 5 000 ₽</li>
            <li className="flex items-start gap-2"><Icon name="Check" size={16} style={{color: "#1a8fc1", marginTop: 2}} />Баня — 1 500 ₽/час, от 2 часов</li>
            <li className="flex items-start gap-2"><Icon name="MapPin" size={16} style={{color: "#1a8fc1", marginTop: 2}} />Отправление: Коптев овраг и пристань Поляна Фрунзе (пос. Управленческий)</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border p-8 text-center" style={{borderColor: "#90d4a0", background: "#d4f5da"}}>
          <p className="text-sm mb-2" style={{color: "#5a9a6a"}}>Стоимость аренды</p>
          <div className="text-5xl font-bold mb-1" style={{color: "#1b4332"}}>
            от <span style={{color: "#1a8fc1"}}>45 000 ₽</span>
          </div>
          <p className="text-sm mb-8 mt-1" style={{color: "#5a9a6a"}}>10 часов · до 15 гостей · баня на борту</p>
          <button className="inline-flex items-center justify-center gap-3 px-10 py-4 text-white text-lg font-semibold rounded-xl transition-colors w-full md:w-auto" style={{background: "#1a8fc1"}}>
            <Icon name="CalendarCheck" size={22} />
            Забронировать плавдом
          </button>
          <p className="text-xs mt-4" style={{color: "#5a9a6a"}}>Оставьте заявку — мы свяжемся с вами в течение 30 минут</p>
        </div>
      </div>
    </div>
  );
};

export default Houseboat;
