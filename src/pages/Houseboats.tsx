import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const houseboats = [
  {
    id: 0,
    name: "Одиссей — VIP плавдом",
    description: "Комфортабельный плавдом класса «ВИП» с уникальным дизайном. Просторная кают-компания с кожаным диваном и баром, 2 каюты с двуспальными кроватями, баня на дровах, джакузи и барная стойка на верхней палубе. До 15 гостей.",
    price: 90000,
    capacity: 15,
    area: 120,
    image: "https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/bucket/33d2d8e0-6200-4f52-aba4-8df9c6ae210c.jpeg",
    features: ["VIP класс", "Баня на дровах", "Джакузи", "2 каюты", "Барная стойка", "Газовое барбекю"],
    badge: "VIP",
  },
  {
    id: 1,
    name: "Плавдом 2022 — «Волга»",
    description: "Комфортабельный плавдом 2022 г.п. с баней на дровах, верхней палубой и банкетной зоной на 12 персон. Салон с диваном, каюта с двуспальной кроватью, душ и санузел.",
    price: 45000,
    capacity: 15,
    area: 84,
    image: "https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/bucket/e1da963c-d2c9-4d16-ac95-82180d47946e.jpeg",
    features: ["Баня на дровах", "Верхняя палуба", "Каюта 2-спальная", "Барбекю"],
    slug: "houseboat",
  },
  {
    id: 2,
    name: "Плавдом 2022 — «Самара»",
    description: "Комфортабельный плавдом 2022 г.п. с баней на дровах, верхней палубой и банкетной зоной на 12 персон. Салон с диваном, каюта с двуспальной кроватью, душ и санузел.",
    price: 45000,
    capacity: 15,
    area: 84,
    image: "https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/bucket/e1da963c-d2c9-4d16-ac95-82180d47946e.jpeg",
    features: ["Баня на дровах", "Верхняя палуба", "Каюта 2-спальная", "Барбекю"],
    slug: "houseboat",
  },
  {
    id: 3,
    name: "Плавдом 2022 — «Жигули»",
    description: "Комфортабельный плавдом 2022 г.п. с баней на дровах, верхней палубой и банкетной зоной на 12 персон. Салон с диваном, каюта с двуспальной кроватью, душ и санузел.",
    price: 45000,
    capacity: 15,
    area: 84,
    image: "https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/bucket/e1da963c-d2c9-4d16-ac95-82180d47946e.jpeg",
    features: ["Баня на дровах", "Верхняя палуба", "Каюта 2-спальная", "Барбекю"],
    slug: "houseboat",
  },
  {
    id: 4,
    name: "Плавдом 2022 — «Тольятти»",
    description: "Комфортабельный плавдом 2022 г.п. с баней на дровах, верхней палубой и банкетной зоной на 12 персон. Салон с диваном, каюта с двуспальной кроватью, душ и санузел.",
    price: 45000,
    capacity: 15,
    area: 84,
    image: "https://cdn.poehali.dev/projects/0d666c78-fd3a-49f8-b310-c841f997bf41/bucket/e1da963c-d2c9-4d16-ac95-82180d47946e.jpeg",
    features: ["Баня на дровах", "Верхняя палуба", "Каюта 2-спальная", "Барбекю"],
    slug: "houseboat",
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
              style={{borderColor: boat.id === 0 ? "#1a8fc1" : "#a8ddb5", background: boat.id === 0 ? "#e8f4fa" : "#f0faf2"}}
            >
              {/* Photo */}
              <div className="relative h-52 overflow-hidden">
                <img src={boat.image} alt={boat.name} className="w-full h-full object-cover" />
                {boat.id === 0 && (
                  <div className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full" style={{background: "#1a8fc1"}}>
                    VIP
                  </div>
                )}
                <div className="absolute top-3 right-3 text-white text-sm font-bold px-3 py-1 rounded-full" style={{background: "rgba(26,143,193,0.85)"}}>
                  от {boat.price.toLocaleString("ru-RU")} ₽
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

                {/* Buttons */}
                <div className="mt-auto flex flex-col gap-2">
                  {(boat.id === 0 || boat.slug === "houseboat") && (
                    <Link to={boat.id === 0 ? "/odyssey" : "/houseboat"} className="w-full flex items-center justify-center gap-2 px-6 py-2 font-medium rounded-xl border transition-colors text-sm" style={{borderColor: "#1a8fc1", color: "#1a8fc1", background: "white"}}>
                      Подробнее и тарифы
                    </Link>
                  )}
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