import type { Language } from "../hooks/useLanguage";

export interface MenuItem {
  name: Record<Language, string>;
  description: Record<Language, string>;
  price: string;
  unit?: Record<Language, string>;
}

export interface MenuCategory {
  key: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    key: "starters",
    items: [
      {
        name: { en: "Pkhali", ru: "Пхали", ka: "ფხალი" },
        description: {
          en: "Spinach & walnut rolls with aromatic herbs",
          ru: "Рулетики из шпината с грецким орехом и ароматными травами",
          ka: "ისპანახისა და ნიგვზის რულეტები არომატული მწვანილით",
        },
        price: "12",
      },
      {
        name: { en: "Badrijani", ru: "Баклажаны", ka: "ბადრიჯანი" },
        description: {
          en: "Eggplant rolls with walnut paste & pomegranate",
          ru: "Рулетики из баклажанов с ореховой пастой и гранатом",
          ka: "ბადრიჯნის რულეტები ნიგვზის პასტითა და ბროწეულით",
        },
        price: "14",
      },
      {
        name: { en: "Jonjoli", ru: "Джонджоли", ka: "ჯონჯოლი" },
        description: {
          en: "Pickled sprouts — a Georgian classic",
          ru: "Маринованные побеги — грузинская классика",
          ka: "მარინადში გამოყვანილი ყლორტები — ქართული კლასიკა",
        },
        price: "8",
      },
    ],
  },
  {
    key: "salads",
    items: [
      {
        name: { en: "Georgian Salad", ru: "Грузинский салат", ka: "ქართული სალათი" },
        description: {
          en: "Tomato, cucumber, walnut & fresh herbs",
          ru: "Помидоры, огурцы, грецкий орех и свежие травы",
          ka: "პამიდორი, კიტრი, ნიგოზი და ახალი მწვანილი",
        },
        price: "10",
      },
      {
        name: { en: "Beet & Walnut Salad", ru: "Салат из свёклы с орехами", ka: "ჭარხლისა და ნიგვზის სალათი" },
        description: {
          en: "Roasted beets with walnut cream dressing",
          ru: "Запечённая свёкла с ореховым соусом",
          ka: "შემწვარი ჭარხალი ნიგვზის კრემის სოუსით",
        },
        price: "12",
      },
    ],
  },
  {
    key: "khinkali",
    items: [
      {
        name: { en: "Beef Khinkali", ru: "Хинкали с мясом", ka: "ხინკალი ხორცით" },
        description: {
          en: "Hand-pleated dumplings with seasoned beef broth inside",
          ru: "Ручной лепки с приправленным мясным бульоном внутри",
          ka: "ხელით ნაკეცი ხინკალი სანელებლიანი ხორცის ბულიონით",
        },
        price: "2.5",
        unit: { en: "each", ru: "шт", ka: "ცალი" },
      },
      {
        name: { en: "Mushroom Khinkali", ru: "Хинкали с грибами", ka: "ხინკალი სოკოთი" },
        description: {
          en: "Filled with sauteed mushrooms & herbs",
          ru: "С начинкой из жареных грибов и зелени",
          ka: "მოშუშული სოკოთი და მწვანილით",
        },
        price: "2",
        unit: { en: "each", ru: "шт", ka: "ცალი" },
      },
      {
        name: { en: "Cheese Khinkali", ru: "Хинкали с сыром", ka: "ხინკალი ყველით" },
        description: {
          en: "Stuffed with melted Georgian cheese blend",
          ru: "С начинкой из расплавленного грузинского сыра",
          ka: "გადნობილი ქართული ყველის ნარევით",
        },
        price: "2",
        unit: { en: "each", ru: "шт", ka: "ცალი" },
      },
    ],
  },
  {
    key: "khachapuri",
    items: [
      {
        name: { en: "Adjarian Khachapuri", ru: "Аджарский хачапури", ka: "აჭარული ხაჭაპური" },
        description: {
          en: "Boat-shaped, with egg, butter & molten cheese",
          ru: "Лодочка с яйцом, маслом и расплавленным сыром",
          ka: "ნავის ფორმის, კვერცხით, კარაქითა და გადნობილი ყველით",
        },
        price: "18",
      },
      {
        name: { en: "Imeruli Khachapuri", ru: "Имерульский хачапури", ka: "იმერული ხაჭაპური" },
        description: {
          en: "Round, filled with Imeretian cheese",
          ru: "Круглый, с имеретинским сыром",
          ka: "მრგვალი, იმერული ყველით",
        },
        price: "15",
      },
      {
        name: { en: "Megruli Khachapuri", ru: "Мегрельский хачапури", ka: "მეგრული ხაჭაპური" },
        description: {
          en: "Double cheese — inside and on top",
          ru: "Двойной сыр — внутри и сверху",
          ka: "ორმაგი ყველი — შიგნით და ზემოდან",
        },
        price: "17",
      },
    ],
  },
  {
    key: "grilled",
    items: [
      {
        name: { en: "Mtsvadi", ru: "Мцвади", ka: "მწვადი" },
        description: {
          en: "Pork skewers grilled over grapevine embers",
          ru: "Свиные шашлыки на виноградных углях",
          ka: "ღორის მწვადი ვაზის ნაკვერცხლებზე შემწვარი",
        },
        price: "22",
      },
      {
        name: { en: "Chicken Tabaka", ru: "Цыплёнок табака", ka: "ტაბაკა" },
        description: {
          en: "Crispy pressed chicken with garlic sauce",
          ru: "Хрустящий цыплёнок под прессом с чесночным соусом",
          ka: "ხრაშუნა წნეხის ქათამი ნიორის სოუსით",
        },
        price: "28",
      },
      {
        name: { en: "Lamb Chops", ru: "Бараньи рёбрышки", ka: "ბატკნის ნეკნები" },
        description: {
          en: "Tender lamb with Georgian spices & tkemali",
          ru: "Нежная баранина с грузинскими специями и ткемали",
          ka: "ნაზი ბატკანი ქართული სანელებლებითა და ტყემლით",
        },
        price: "35",
      },
    ],
  },
  {
    key: "soups",
    items: [
      {
        name: { en: "Kharcho", ru: "Харчо", ka: "ხარჩო" },
        description: {
          en: "Spicy beef & walnut soup with rice",
          ru: "Острый суп из говядины с грецким орехом и рисом",
          ka: "ცხარე საქონლის ხორცისა და ნიგვზის წვნიანი ბრინჯით",
        },
        price: "14",
      },
      {
        name: { en: "Chikhirtma", ru: "Чихиртма", ka: "ჩიხირთმა" },
        description: {
          en: "Traditional chicken egg-drop soup with lemon",
          ru: "Традиционный куриный суп с яйцом и лимоном",
          ka: "ტრადიციული ქათმის წვნიანი კვერცხითა და ლიმონით",
        },
        price: "12",
      },
    ],
  },
  {
    key: "desserts",
    items: [
      {
        name: { en: "Churchkhela", ru: "Чурчхела", ka: "ჩურჩხელა" },
        description: {
          en: "Grape & walnut candy on a string",
          ru: "Виноградно-ореховая сладость на нитке",
          ka: "ყურძნისა და ნიგვზის ტკბილეული ძაფზე",
        },
        price: "6",
      },
      {
        name: { en: "Pelamushi", ru: "Пеламуши", ka: "ფელამუში" },
        description: {
          en: "Sweet grape pudding dusted with walnuts",
          ru: "Сладкий виноградный пудинг с орехами",
          ka: "ტკბილი ყურძნის პუდინგი ნიგვზით მოყრილი",
        },
        price: "8",
      },
    ],
  },
  {
    key: "drinks",
    items: [
      {
        name: { en: "Georgian Wine (glass)", ru: "Грузинское вино (бокал)", ka: "ქართული ღვინო (ბოკალი)" },
        description: {
          en: "Saperavi, Mukuzani, Kindzmarauli & more",
          ru: "Саперави, Мукузани, Киндзмараули и другие",
          ka: "საფერავი, მუკუზანი, კინძმარაული და სხვა",
        },
        price: "15",
      },
      {
        name: {
          en: "Georgian Wine (bottle)",
          ru: "Грузинское вино (бутылка)",
          ka: "ქართული ღვინო (ბოთლი)",
        },
        description: {
          en: "Curated selection from Kakheti vineyards",
          ru: "Избранная коллекция из виноградников Кахетии",
          ka: "კახეთის ვენახების შერჩეული კოლექცია",
        },
        price: "45-80",
      },
      {
        name: { en: "Latte / Cappuccino", ru: "Латте / Капучино", ka: "ლატე / კაპუჩინო" },
        description: {
          en: "Specialty coffee, perfectly crafted",
          ru: "Фирменный кофе, идеально приготовленный",
          ka: "სპეციალური ყავა, იდეალურად მომზადებული",
        },
        price: "8",
      },
      {
        name: { en: "Fresh Lemonade", ru: "Свежий лимонад", ka: "ახალი ლიმონათი" },
        description: {
          en: "House-made with seasonal fruits",
          ru: "Домашний, из сезонных фруктов",
          ka: "სახლში მომზადებული სეზონური ხილით",
        },
        price: "10",
      },
      {
        name: { en: "Cocktails", ru: "Коктейли", ka: "კოქტეილები" },
        description: {
          en: "Signature cocktails with a Georgian twist",
          ru: "Авторские коктейли с грузинским акцентом",
          ka: "ავტორის კოქტეილები ქართული ელფერით",
        },
        price: "18-25",
      },
    ],
  },
];
