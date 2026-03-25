import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const photos = [
  {
    src: "https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/bucket/6e67953d-d4cc-4907-941b-0bfd8cb94c0c.jpeg",
    alt: "Баня на понтоне снаружи — вид с палубы",
    caption: "Баня на понтоне с панорамными окнами и шезлонгами",
  },
  {
    src: "https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/bucket/80984e0d-6a29-497f-9a4f-2f095741ff95.jpeg",
    alt: "Парилка с видом на Волгу",
    caption: "Парилка с панорамным окном и видом на Волгу",
  },
  {
    src: "https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/bucket/6f679ddf-cb97-4c2c-b7de-105a2c8827fb.jpeg",
    alt: "Санузел с душем",
    caption: "Санузел с душем — всё необходимое на борту",
  },
];

const features = [
  { icon: "Users", label: "До 6 человек", desc: "Комфортно для компании или семьи" },
  { icon: "Flame", label: "Дровяная парилка", desc: "Настоящий жар и приятный аромат дерева" },
  { icon: "Eye", label: "Панорамные окна", desc: "Вид на Волгу из парной и комнаты отдыха" },
  { icon: "Waves", label: "Купание в Волге", desc: "После парилки — прямо в реку с понтона" },
  { icon: "Snowflake", label: "Зимой — прорубь", desc: "Каркасный прорубь для закалённых духом" },
  { icon: "ShowerHead", label: "Душ и санузел", desc: "Полноценный санузел на борту" },
];

const Banya = () => {
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
            <Icon name="Flame" size={16} />
            Баня на понтоне
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{color: "#1b4332"}}>
          Баня на понтоне <span style={{color: "#1a8fc1"}}>на Волге</span>
        </h1>
        <p className="text-center max-w-2xl mx-auto mb-10 text-lg" style={{color: "#5a9a6a"}}>
          Уникальная возможность отдохнуть и попариться прямо на воде с потрясающим видом на реку
        </p>

        {/* Photos grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="md:row-span-2 rounded-2xl overflow-hidden border" style={{borderColor: "#a8ddb5"}}>
            <img src={photos[0].src} alt={photos[0].alt} className="w-full h-full object-cover" style={{minHeight: "300px"}} />
          </div>
          <div className="rounded-2xl overflow-hidden border" style={{borderColor: "#a8ddb5"}}>
            <img src={photos[1].src} alt={photos[1].alt} className="w-full h-52 object-cover" />
            <div className="px-4 py-2 text-sm" style={{background: "#eaf7ec", color: "#5a9a6a"}}>{photos[1].caption}</div>
          </div>
          <div className="rounded-2xl overflow-hidden border" style={{borderColor: "#a8ddb5"}}>
            <img src={photos[2].src} alt={photos[2].alt} className="w-full h-52 object-cover" />
            <div className="px-4 py-2 text-sm" style={{background: "#eaf7ec", color: "#5a9a6a"}}>{photos[2].caption}</div>
          </div>
        </div>

        {/* Description */}
        <div className="rounded-2xl border p-7 mb-8" style={{borderColor: "#a8ddb5", background: "#eaf7ec"}}>
          <h2 className="text-2xl font-bold mb-4" style={{color: "#1b4332"}}>Описание</h2>
          <p className="leading-relaxed mb-3" style={{color: "#3a7a50"}}>
            Баня на понтоне на Волге! Вместимость до 6 человек. Уникальная возможность отдохнуть и попариться прямо на воде с потрясающим видом.
          </p>
          <p className="leading-relaxed mb-3" style={{color: "#3a7a50"}}>
            После парилки — можно сразу нырять в Волгу. Зимой оборудован каркасный прорубь.
          </p>
          <p className="leading-relaxed" style={{color: "#3a7a50"}}>
            Уютная, чистая баня с панорамными окнами из комнаты отдыха и парной. На борту — полноценный санузел с душем.
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
            от <span style={{color: "#1a8fc1"}}>3 000 ₽</span> <span className="text-2xl font-medium" style={{color: "#3a7a50"}}>/час</span>
          </div>
          <p className="text-sm mb-8 mt-1" style={{color: "#5a9a6a"}}>Минимальное время аренды — 3 часа (от 9 000 ₽)</p>

          <button className="inline-flex items-center justify-center gap-3 px-10 py-4 text-white text-lg font-semibold rounded-xl transition-colors w-full md:w-auto" style={{background: "#1a8fc1"}}>
            <Icon name="CalendarCheck" size={22} />
            Забронировать баню
          </button>
          <p className="text-xs mt-4" style={{color: "#5a9a6a"}}>Оставьте заявку — мы свяжемся с вами в течение 30 минут</p>
        </div>
      </div>
    </div>
  );
};

export default Banya;
