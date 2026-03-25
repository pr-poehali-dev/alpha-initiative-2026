import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const houseboats = [
  {
    id: 1,
    name: "Волжский закат",
    description: "Уютный хаусбот для двоих с панорамными окнами и террасой. Идеален для романтического отдыха или тихого уединения на Волге. Есть кухня, спальня и открытая палуба.",
    price: 7500,
    capacity: 2,
    area: 35,
    image: "https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/files/0d04ea55-dca1-4a0e-b5bc-4200713caa31.jpg",
    features: ["Панорамные окна", "Открытая терраса", "Кухня", "Wi-Fi"],
  },
  {
    id: 2,
    name: "Речной простор",
    description: "Двухэтажный хаусбот с просторной крышей-палубой и шезлонгами. Большие панорамные окна, 2 спальни, гостиная с видом на реку.",
    price: 12000,
    capacity: 4,
    area: 60,
    image: "https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/files/9e4fd67b-802a-4282-89d9-6e79e93163aa.jpg",
    features: ["2 спальни", "Крышная палуба", "Шезлонги", "Барбекю"],
  },
  {
    id: 3,
    name: "Деревянная сказка",
    description: "Камерный хаусбот в деревенском стиле с цветами на палубе и сказочной атмосферой. Вечерняя подсветка, тёплый интерьер, причал с лодкой.",
    price: 8500,
    capacity: 2,
    area: 40,
    image: "https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/files/d338e9af-b704-4e53-98fc-85226a6b7e05.jpg",
    features: ["Деревянный интерьер", "Лодка в аренду", "Вечерняя подсветка", "Цветочная палуба"],
  },
  {
    id: 4,
    name: "Семейный берег",
    description: "Просторный хаусбот для большой компании или семьи с детьми. Широкая палуба, зона барбекю, 3 спальни и место для рыбалки.",
    price: 16000,
    capacity: 8,
    area: 90,
    image: "https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/files/ca697a98-d27d-4797-8a54-12bc6979c034.jpg",
    features: ["3 спальни", "Зона барбекю", "Рыбалка", "Место для детей"],
  },
  {
    id: 5,
    name: "VIP Ночная Волга",
    description: "Премиальный хаусбот с джакузи на палубе, дизайнерским интерьером и ночной подсветкой. Для тех, кто ищет настоящий люкс на воде.",
    price: 25000,
    capacity: 4,
    area: 75,
    image: "https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/files/15ae8200-9a0a-4464-8100-6c1946dba41d.jpg",
    features: ["Джакузи", "Дизайнерский интерьер", "Ночная подсветка", "Консьерж-сервис"],
  },
];

const Houseboats = () => {
  return (
    <div className="min-h-screen" style={{background: "linear-gradient(135deg, #e8f5e9 0%, #f0faf0 40%, #d4f0d4 100%)"}}>

      {/* Header */}
      <header className="relative z-10 px-6 py-4 mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold" style={{color: "#1a8fc1"}}>
            <Icon name="Anchor" size={28} style={{color: "#1a8fc1"}} />
            По Волге Дом
          </Link>
          <Link to="/" className="flex items-center gap-2 transition-colors font-medium" style={{color: "#3a7a50"}}>
            <Icon name="ArrowLeft" size={18} />
            На главную
          </Link>
        </div>
      </header>

      {/* Page Title */}
      <div className="px-6 pt-10 pb-6 mx-auto max-w-7xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border text-sm font-medium" style={{borderColor: "#90d4a0", background: "#d4f5da", color: "#2e7d4f"}}>
          <Icon name="Ship" size={16} />
          Все хаусботы
        </div>
        <h1 className="text-4xl font-bold md:text-5xl" style={{color: "#1b4332"}}>Хаусботы на <span style={{color: "#1a8fc1"}}>Волге</span></h1>
        <p className="mt-4 max-w-xl mx-auto" style={{color: "#5a9a6a"}}>
          Выберите свой идеальный дом на воде — от уютного для двоих до просторного для всей компании
        </p>
      </div>

      {/* Cards */}
      <div className="px-6 pb-20 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {houseboats.map((boat) => (
            <div
              key={boat.id}
              className="flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{borderColor: "#a8ddb5", background: "#f0faf2"}}
            >
              {/* Photo */}
              <div className="relative h-52 overflow-hidden">
                <img src={boat.image} alt={boat.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 text-white text-sm font-bold px-3 py-1 rounded-full" style={{background: "rgba(26,143,193,0.85)"}}>
                  от {boat.price.toLocaleString("ru-RU")} ₽/сут
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-xl font-bold mb-2" style={{color: "#1b4332"}}>{boat.name}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{color: "#5a9a6a"}}>{boat.description}</p>

                {/* Specs */}
                <div className="flex items-center gap-4 mb-4 text-sm" style={{color: "#3a7a50"}}>
                  <span className="flex items-center gap-1">
                    <Icon name="Users" size={14} style={{color: "#1a8fc1"}} />
                    до {boat.capacity} чел.
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Maximize2" size={14} style={{color: "#1a8fc1"}} />
                    {boat.area} м²
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {boat.features.map((f) => (
                    <span key={f} className="px-2 py-1 rounded-md text-xs border" style={{background: "#d4f5da", color: "#2e7d4f", borderColor: "#90d4a0"}}>
                      {f}
                    </span>
                  ))}
                </div>

                {/* Book Button */}
                <div className="mt-auto">
                  <button className="w-full flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-colors" style={{background: "#1a8fc1"}}>
                    <Icon name="CalendarCheck" size={18} />
                    Забронировать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Houseboats;
