export type Language = "ka" | "en" | "ru";

export interface Translations {
  nav: {
    home: string;
    about: string;
    menu: string;
    gallery: string;
    reservation: string;
    contact: string;
  };
  hero: {
    tagline: string;
    subtitle: string;
    cta: string;
    scroll: string;
  };
  about: {
    sectionLabel: string;
    title: string;
    description: string[];
    chefTitle: string;
    chefName: string;
    chefDescription: string;
    chefCredentials: string;
  };
  dishes: {
    sectionLabel: string;
    title: string;
    subtitle: string;
  };
  menu: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    categories: {
      breakfast: string;
      appetizers: string;
      mains: string;
      oven: string;
      desserts: string;
    };
    note: string;
    currency: string;
  };
  gallery: {
    sectionLabel: string;
    title: string;
    filters: {
      all: string;
      courtyard: string;
      food: string;
      atmosphere: string;
    };
  };
  reservation: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      phone: string;
      date: string;
      time: string;
      guests: string;
      requests: string;
      submit: string;
      success: string;
      guestOptions: string[];
    };
    validation: {
      nameRequired: string;
      phoneRequired: string;
      dateRequired: string;
      timeRequired: string;
    };
  };
  location: {
    sectionLabel: string;
    title: string;
    address: string;
    hours: string;
    hoursValue: string;
    everyDay: string;
    phone: string;
    email: string;
    getDirections: string;
  };
  footer: {
    description: string;
    followUs: string;
    copyright: string;
    madeWith: string;
  };
  dogFriendly: string;
}

const ka: Translations = {
  nav: {
    home: "მთავარი",
    about: "ჩვენ შესახებ",
    menu: "მენიუ",
    gallery: "გალერეა",
    reservation: "რეზერვაცია",
    contact: "კონტაქტი",
  },
  hero: {
    tagline: "ბარი და რესტორანი",
    subtitle: "ძველი თბილისის გულში, სადაც ქართული ტრადიციები თანამედროვე ევროპულ სამზარეულოს ხვდება",
    cta: "მაგიდის დაჯავშნა",
    scroll: "გადაახვიეთ ქვემოთ",
  },
  about: {
    sectionLabel: "ჩვენი ისტორია",
    title: "სადაც ტრადიცია თანამედროვეობას ხვდება",
    description: [
      "Blue Fox 2022 წელს ძველი თბილისის ისტორიულ ეზოში დაიბადა — ადგილას, სადაც ტურქუაზი აივნები და ასწლოვანი კედლები მოგვითხრობენ საუკუნეთა ისტორიას.",
      "ჩვენი სამზარეულო ქართული კულინარიული მემკვიდრეობის თანამედროვე გააზრებაა — სეზონური ინგრედიენტები, ხელოვნების დონეზე მომზადებული, რომლებიც პატივს მიაგებენ ჩვენს ფესვებს და ამავდროულად ახალ გემოვნებით გასაოცრებას გვპირდებიან.",
    ],
    chefTitle: "შეფ-მზარეული",
    chefName: "შეფი ზუკა",
    chefDescription:
      "იტალიის გასტრონომიული მეცნიერებების უნივერსიტეტის (UNISG) კურსდამთავრებული, შეფი ზუკა ვენის, პარიზის, კოპენჰაგენისა და ნიუ-იორკის სამზარეულოებში დაიხვეწა. მისი საკვები სეზონურობასა და ქართულ ტრადიციებზეა დაფუძნებული, თანამედროვე ევროპული ტექნიკით გადააზრებული.",
    chefCredentials: "UNISG · ვენა · პარიზი · კოპენჰაგენი · ნიუ-იორკი",
  },
  dishes: {
    sectionLabel: "სიგნატურა",
    title: "ხელნაკეთი, გულით",
    subtitle: "ქართული კულინარიული ტრადიცია, თანამედროვე ხედვით",
  },
  menu: {
    sectionLabel: "მენიუ",
    title: "ჩვენი მენიუ",
    subtitle: "სეზონური ინგრედიენტები, ტრადიციული რეცეპტები, თანამედროვე მიდგომა",
    categories: {
      breakfast: "საუზმე",
      appetizers: "წინამღვრები",
      mains: "ძირითადი",
      oven: "თონიდან",
      desserts: "დესერტი",
    },
    note: "ფასები მოიცავს 18% დღგ-ს და 10% მომსახურების საფასურს",
    currency: "₾",
  },
  gallery: {
    sectionLabel: "გალერეა",
    title: "ატმოსფერო",
    filters: {
      all: "ყველა",
      courtyard: "ეზო",
      food: "საჭმელი",
      atmosphere: "ატმოსფერო",
    },
  },
  reservation: {
    sectionLabel: "რეზერვაცია",
    title: "დაჯავშნეთ მაგიდა",
    subtitle: "შეარჩიეთ სასურველი თარიღი და დრო, დანარჩენს ჩვენ მოვაგვარებთ",
    form: {
      name: "სახელი",
      phone: "ტელეფონი",
      date: "თარიღი",
      time: "დრო",
      guests: "სტუმრების რაოდენობა",
      requests: "სპეციალური მოთხოვნები",
      submit: "რეზერვაცია",
      success: "თქვენი რეზერვაცია მიღებულია! მალე დაგიკავშირდებით.",
      guestOptions: ["1 სტუმარი", "2 სტუმარი", "3 სტუმარი", "4 სტუმარი", "5 სტუმარი", "6 სტუმარი", "7+ სტუმარი"],
    },
    validation: {
      nameRequired: "გთხოვთ შეიყვანოთ სახელი",
      phoneRequired: "გთხოვთ შეიყვანოთ ტელეფონის ნომერი",
      dateRequired: "გთხოვთ აირჩიოთ თარიღი",
      timeRequired: "გთხოვთ აირჩიოთ დრო",
    },
  },
  location: {
    sectionLabel: "მდებარეობა",
    title: "მოგვინახულეთ",
    address: "ძველი თბილისი, საქართველო",
    hours: "სამუშაო საათები",
    hoursValue: "08:00 — 23:00",
    everyDay: "ყოველდღე",
    phone: "+995 591 98 65 98",
    email: "bluefoxtbilisi@gmail.com",
    getDirections: "მიმართულების ნახვა",
  },
  footer: {
    description: "ბარი და რესტორანი ძველი თბილისის გულში",
    followUs: "გამოგვყევით",
    copyright: "© 2022–2026 Blue Fox. ყველა უფლება დაცულია.",
    madeWith: "შექმნილია სიყვარულით თბილისში",
  },
  dogFriendly: "ძაღლის მოყვარულთა სასურველი ადგილი",
};

const en: Translations = {
  nav: {
    home: "Home",
    about: "About",
    menu: "Menu",
    gallery: "Gallery",
    reservation: "Reserve",
    contact: "Contact",
  },
  hero: {
    tagline: "Bar & Restaurant",
    subtitle:
      "In the heart of Old Tbilisi, where Georgian traditions meet contemporary European cuisine",
    cta: "Reserve a Table",
    scroll: "Scroll to explore",
  },
  about: {
    sectionLabel: "Our Story",
    title: "Where Tradition Meets the Contemporary",
    description: [
      "Blue Fox was born in 2022 in a historic courtyard of Old Tbilisi — a place where turquoise balconies and century-old walls whisper stories of generations past.",
      "Our kitchen is a modern reinterpretation of Georgian culinary heritage — seasonal ingredients, crafted with artistry, honoring our roots while promising new flavors to discover.",
    ],
    chefTitle: "Head Chef",
    chefName: "Chef Zuka",
    chefDescription:
      "A graduate of UNISG (University of Gastronomic Sciences) in Italy, Chef Zuka honed his craft in the kitchens of Vienna, Paris, Copenhagen, and New York. His cooking is rooted in seasonality and local Georgian traditions, reimagined with contemporary European technique.",
    chefCredentials: "UNISG · Vienna · Paris · Copenhagen · New York",
  },
  dishes: {
    sectionLabel: "Signature",
    title: "Handcrafted with Heart",
    subtitle: "Georgian culinary tradition, through a contemporary lens",
  },
  menu: {
    sectionLabel: "Menu",
    title: "Our Menu",
    subtitle: "Seasonal ingredients, traditional recipes, modern approach",
    categories: {
      breakfast: "Breakfast",
      appetizers: "Appetizers",
      mains: "Main Courses",
      oven: "From the Oven",
      desserts: "Desserts",
    },
    note: "Prices include 18% VAT and 10% Service Fee",
    currency: "₾",
  },
  gallery: {
    sectionLabel: "Gallery",
    title: "Atmosphere",
    filters: {
      all: "All",
      courtyard: "Courtyard",
      food: "Food",
      atmosphere: "Atmosphere",
    },
  },
  reservation: {
    sectionLabel: "Reservation",
    title: "Reserve a Table",
    subtitle: "Choose your preferred date and time, we will take care of the rest",
    form: {
      name: "Full Name",
      phone: "Phone Number",
      date: "Date",
      time: "Time",
      guests: "Number of Guests",
      requests: "Special Requests",
      submit: "Reserve Now",
      success: "Your reservation has been received! We will contact you shortly.",
      guestOptions: ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5 Guests", "6 Guests", "7+ Guests"],
    },
    validation: {
      nameRequired: "Please enter your name",
      phoneRequired: "Please enter your phone number",
      dateRequired: "Please select a date",
      timeRequired: "Please select a time",
    },
  },
  location: {
    sectionLabel: "Location",
    title: "Visit Us",
    address: "Old Tbilisi, Georgia",
    hours: "Opening Hours",
    hoursValue: "8:00 AM — 11:00 PM",
    everyDay: "Every Day",
    phone: "+995 591 98 65 98",
    email: "bluefoxtbilisi@gmail.com",
    getDirections: "Get Directions",
  },
  footer: {
    description: "Bar & Restaurant in the heart of Old Tbilisi",
    followUs: "Follow Us",
    copyright: "© 2022–2026 Blue Fox. All rights reserved.",
    madeWith: "Made with love in Tbilisi",
  },
  dogFriendly: "Dog-friendly courtyard",
};

const ru: Translations = {
  nav: {
    home: "Главная",
    about: "О нас",
    menu: "Меню",
    gallery: "Галерея",
    reservation: "Бронь",
    contact: "Контакты",
  },
  hero: {
    tagline: "Бар и Ресторан",
    subtitle:
      "В самом сердце Старого Тбилиси, где грузинские традиции встречаются с современной европейской кухней",
    cta: "Забронировать стол",
    scroll: "Листайте вниз",
  },
  about: {
    sectionLabel: "Наша История",
    title: "Где традиции встречают современность",
    description: [
      "Blue Fox родился в 2022 году в историческом дворике Старого Тбилиси — месте, где бирюзовые балконы и вековые стены хранят истории прошлых поколений.",
      "Наша кухня — это современная интерпретация грузинского кулинарного наследия: сезонные ингредиенты, искусно приготовленные, чтящие наши корни и открывающие новые вкусы.",
    ],
    chefTitle: "Шеф-повар",
    chefName: "Шеф Зука",
    chefDescription:
      "Выпускник UNISG (Университет гастрономических наук) в Италии, шеф Зука оттачивал своё мастерство на кухнях Вены, Парижа, Копенгагена и Нью-Йорка. Его кулинария основана на сезонности и местных грузинских традициях, переосмысленных через призму современной европейской техники.",
    chefCredentials: "UNISG · Вена · Париж · Копенгаген · Нью-Йорк",
  },
  dishes: {
    sectionLabel: "Фирменные блюда",
    title: "Ручная работа от сердца",
    subtitle: "Грузинская кулинарная традиция через современную призму",
  },
  menu: {
    sectionLabel: "Меню",
    title: "Наше Меню",
    subtitle: "Сезонные ингредиенты, традиционные рецепты, современный подход",
    categories: {
      breakfast: "Завтрак",
      appetizers: "Закуски",
      mains: "Основные",
      oven: "Из печи",
      desserts: "Десерты",
    },
    note: "Цены включают 18% НДС и 10% за обслуживание",
    currency: "₾",
  },
  gallery: {
    sectionLabel: "Галерея",
    title: "Атмосфера",
    filters: {
      all: "Все",
      courtyard: "Двор",
      food: "Еда",
      atmosphere: "Атмосфера",
    },
  },
  reservation: {
    sectionLabel: "Бронирование",
    title: "Забронировать стол",
    subtitle: "Выберите удобную дату и время, об остальном позаботимся мы",
    form: {
      name: "Имя",
      phone: "Телефон",
      date: "Дата",
      time: "Время",
      guests: "Количество гостей",
      requests: "Особые пожелания",
      submit: "Забронировать",
      success: "Ваша бронь принята! Мы скоро свяжемся с вами.",
      guestOptions: ["1 Гость", "2 Гостя", "3 Гостя", "4 Гостя", "5 Гостей", "6 Гостей", "7+ Гостей"],
    },
    validation: {
      nameRequired: "Пожалуйста, введите ваше имя",
      phoneRequired: "Пожалуйста, введите номер телефона",
      dateRequired: "Пожалуйста, выберите дату",
      timeRequired: "Пожалуйста, выберите время",
    },
  },
  location: {
    sectionLabel: "Расположение",
    title: "Посетите нас",
    address: "Старый Тбилиси, Грузия",
    hours: "Часы работы",
    hoursValue: "08:00 — 23:00",
    everyDay: "Каждый день",
    phone: "+995 591 98 65 98",
    email: "bluefoxtbilisi@gmail.com",
    getDirections: "Показать маршрут",
  },
  footer: {
    description: "Бар и ресторан в сердце Старого Тбилиси",
    followUs: "Подписывайтесь",
    copyright: "© 2022–2026 Blue Fox. Все права защищены.",
    madeWith: "Сделано с любовью в Тбилиси",
  },
  dogFriendly: "Дружелюбно к собакам",
};

export const translations: Record<Language, Translations> = { ka, en, ru };

export function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "ka";
  const stored = localStorage.getItem("bluefox-lang");
  if (stored === "ka" || stored === "en" || stored === "ru") return stored;
  return "ka";
}

export function storeLanguage(lang: Language) {
  if (typeof window !== "undefined") {
    localStorage.setItem("bluefox-lang", lang);
  }
}
