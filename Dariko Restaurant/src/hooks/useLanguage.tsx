import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

export type Language = "en" | "ru" | "ka";

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "ka", label: "GE" },
];

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.about": "Our Story",
    "nav.gallery": "Gallery",
    "nav.reserve": "Reservation",
    "nav.contact": "Contact",

    // Hero
    "hero.tagline": "Georgian Restaurant",
    "hero.headline": "Where Every Meal Becomes a Celebration",
    "hero.subtitle":
      "Experience the warmth of Georgian hospitality, centuries-old recipes, and the art of the supra — right here at Dariko.",
    "hero.cta.menu": "Explore the Menu",
    "hero.cta.reserve": "Reserve a Table",
    "hero.scroll": "Scroll to discover",

    // About
    "about.label": "Our Story",
    "about.headline": "Born from the Heart of Georgia",
    "about.p1":
      "In Georgia, a meal is never just a meal. It is a supra — a feast of flavors, stories, and togetherness. At Dariko, we carry this tradition into every dish we serve.",
    "about.p2":
      "Our recipes travel through generations — from the clay ovens of Kakheti to the walnut groves of Imereti. Each dish is handcrafted with the same love and care that Georgian grandmothers have passed down for centuries.",
    "about.p3":
      "Step into our space — a blend of modern energy and timeless warmth. The terrace blooms with greenery, the kitchen hums with tradition, and the wine flows as freely as the conversation.",
    "about.signature": "Welcome to Dariko. Welcome home.",

    // Menu
    "menu.label": "The Menu",
    "menu.headline": "A Taste of Georgia",
    "menu.subtitle":
      "Each dish tells a story passed down through generations. Handcrafted with the freshest ingredients and centuries of tradition.",
    "menu.starters": "Starters",
    "menu.salads": "Salads",
    "menu.khinkali": "Khinkali",
    "menu.khachapuri": "Khachapuri",
    "menu.grilled": "Grilled Meats",
    "menu.soups": "Soups",
    "menu.desserts": "Desserts",
    "menu.drinks": "Drinks",

    // Gallery
    "gallery.label": "Gallery",
    "gallery.headline": "Moments at Dariko",
    "gallery.subtitle":
      "A glimpse into the warmth, flavors, and atmosphere that await you.",

    // Reservation
    "reserve.label": "Reservation",
    "reserve.headline": "Reserve Your Table",
    "reserve.subtitle":
      "Join us for an unforgettable Georgian dining experience. Book your table and let us take care of the rest.",
    "reserve.name": "Full Name",
    "reserve.name.placeholder": "Your name",
    "reserve.phone": "Phone Number",
    "reserve.phone.placeholder": "+995 ...",
    "reserve.date": "Date",
    "reserve.time": "Time",
    "reserve.guests": "Number of Guests",
    "reserve.guest": "guest",
    "reserve.guests_plural": "guests",
    "reserve.notes": "Special Requests",
    "reserve.notes.placeholder":
      "Allergies, celebrations, seating preference...",
    "reserve.submit": "Confirm Reservation",
    "reserve.success.title": "Table Reserved!",
    "reserve.success.message":
      "We look forward to welcoming you at Dariko. You will receive a confirmation shortly.",
    "reserve.success.back": "Make Another Reservation",

    // Instagram
    "instagram.label": "Follow Along",
    "instagram.headline": "Stay Connected",
    "instagram.cta": "Follow us on Instagram",

    // Contact
    "contact.label": "Find Us",
    "contact.headline": "Visit Dariko",
    "contact.hours": "Working Hours",
    "contact.hours.value": "Every day: 10:00 — 00:00",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.location.value": "Tbilisi, Georgia",
    "contact.map": "Open in Google Maps",
    "contact.instagram": "Instagram",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.tagline": "Made with love in Tbilisi",
  },
  ru: {
    // Nav
    "nav.home": "Главная",
    "nav.menu": "Меню",
    "nav.about": "О нас",
    "nav.gallery": "Галерея",
    "nav.reserve": "Бронирование",
    "nav.contact": "Контакты",

    // Hero
    "hero.tagline": "Грузинский ресторан",
    "hero.headline": "Где каждая трапеза становится праздником",
    "hero.subtitle":
      "Откройте для себя тепло грузинского гостеприимства, вековые рецепты и искусство супры — прямо здесь, в Дарико.",
    "hero.cta.menu": "Посмотреть меню",
    "hero.cta.reserve": "Забронировать стол",
    "hero.scroll": "Листайте вниз",

    // About
    "about.label": "Наша история",
    "about.headline": "Рождён в сердце Грузии",
    "about.p1":
      "В Грузии трапеза — это никогда не просто еда. Это супра — праздник вкусов, историй и единения. В Дарико мы несём эту традицию в каждом блюде.",
    "about.p2":
      "Наши рецепты прошли через поколения — от глиняных печей Кахетии до ореховых рощ Имерети. Каждое блюдо готовится с той же любовью и заботой, что грузинские бабушки передавали веками.",
    "about.p3":
      "Войдите в наше пространство — сочетание современной энергии и вечного тепла. Терраса утопает в зелени, кухня звучит традициями, а вино льётся так же свободно, как и беседа.",
    "about.signature": "Добро пожаловать в Дарико. Добро пожаловать домой.",

    // Menu
    "menu.label": "Меню",
    "menu.headline": "Вкус Грузии",
    "menu.subtitle":
      "Каждое блюдо рассказывает историю, передаваемую из поколения в поколение. Приготовлено вручную из свежайших ингредиентов и вековых традиций.",
    "menu.starters": "Закуски",
    "menu.salads": "Салаты",
    "menu.khinkali": "Хинкали",
    "menu.khachapuri": "Хачапури",
    "menu.grilled": "Мясо на гриле",
    "menu.soups": "Супы",
    "menu.desserts": "Десерты",
    "menu.drinks": "Напитки",

    // Gallery
    "gallery.label": "Галерея",
    "gallery.headline": "Моменты в Дарико",
    "gallery.subtitle":
      "Загляните в тепло, вкусы и атмосферу, которые ждут вас.",

    // Reservation
    "reserve.label": "Бронирование",
    "reserve.headline": "Забронируйте столик",
    "reserve.subtitle":
      "Присоединяйтесь к незабываемому грузинскому ужину. Забронируйте столик, а об остальном позаботимся мы.",
    "reserve.name": "Полное имя",
    "reserve.name.placeholder": "Ваше имя",
    "reserve.phone": "Номер телефона",
    "reserve.phone.placeholder": "+995 ...",
    "reserve.date": "Дата",
    "reserve.time": "Время",
    "reserve.guests": "Количество гостей",
    "reserve.guest": "гость",
    "reserve.guests_plural": "гостей",
    "reserve.notes": "Особые пожелания",
    "reserve.notes.placeholder":
      "Аллергии, праздники, предпочтения по рассадке...",
    "reserve.submit": "Подтвердить бронирование",
    "reserve.success.title": "Столик забронирован!",
    "reserve.success.message":
      "Мы с нетерпением ждём вас в Дарико. Вы получите подтверждение в ближайшее время.",
    "reserve.success.back": "Забронировать ещё",

    // Instagram
    "instagram.label": "Подписывайтесь",
    "instagram.headline": "Оставайтесь на связи",
    "instagram.cta": "Подпишитесь на нас в Instagram",

    // Contact
    "contact.label": "Как нас найти",
    "contact.headline": "Посетите Дарико",
    "contact.hours": "Часы работы",
    "contact.hours.value": "Ежедневно: 10:00 — 00:00",
    "contact.phone": "Телефон",
    "contact.location": "Расположение",
    "contact.location.value": "Тбилиси, Грузия",
    "contact.map": "Открыть в Google Картах",
    "contact.instagram": "Инстаграм",

    // Footer
    "footer.rights": "Все права защищены.",
    "footer.tagline": "Сделано с любовью в Тбилиси",
  },
  ka: {
    // Nav
    "nav.home": "მთავარი",
    "nav.menu": "მენიუ",
    "nav.about": "ჩვენ შესახებ",
    "nav.gallery": "გალერეა",
    "nav.reserve": "დაჯავშნა",
    "nav.contact": "კონტაქტი",

    // Hero
    "hero.tagline": "ქართული რესტორანი",
    "hero.headline": "სადაც ყოველი სუფრა დღესასწაულია",
    "hero.subtitle":
      "იგრძენი ქართული სტუმართმოყვარეობის სითბო, საუკუნოვანი რეცეპტები და სუფრის ხელოვნება — აქ, დარიკოში.",
    "hero.cta.menu": "მენიუს ნახვა",
    "hero.cta.reserve": "მაგიდის დაჯავშნა",
    "hero.scroll": "გადაფურცლე",

    // About
    "about.label": "ჩვენი ისტორია",
    "about.headline": "საქართველოს გულიდან დაბადებული",
    "about.p1":
      "საქართველოში სუფრა არასდროს არის უბრალოდ საჭმელი. ეს არის სუფრა — გემოვნების, ამბების და ერთობის დღესასწაული. დარიკოში ჩვენ ამ ტრადიციას ყოველ კერძში ვატარებთ.",
    "about.p2":
      "ჩვენი რეცეპტები თაობიდან თაობას გადაეცემა — კახეთის თიხის თონეებიდან იმერეთის ნიგვზის ბაღებამდე. ყოველი კერძი იმავე სიყვარულითა და ზრუნვით მზადდება, რომელსაც ქართველი ბებიები საუკუნეების განმავლობაში გადასცემდნენ.",
    "about.p3":
      "შემოდი ჩვენს სივრცეში — თანამედროვე ენერგიისა და მარადიული სითბოს შერწყმა. ტერასა მწვანით არის მოფენილი, სამზარეულო ტრადიციებით ჟღერს, ხოლო ღვინო ისევე თავისუფლად მიედინება, როგორც საუბარი.",
    "about.signature": "კეთილი იყოს შენი მობრძანება დარიკოში. კეთილი იყოს შენი მობრძანება სახლში.",

    // Menu
    "menu.label": "მენიუ",
    "menu.headline": "საქართველოს გემო",
    "menu.subtitle":
      "ყოველი კერძი მოგვითხრობს ამბავს, რომელიც თაობიდან თაობას გადაეცემა. ხელით მომზადებული უახლესი ინგრედიენტებითა და საუკუნოვანი ტრადიციებით.",
    "menu.starters": "წინდები",
    "menu.salads": "სალათები",
    "menu.khinkali": "ხინკალი",
    "menu.khachapuri": "ხაჭაპური",
    "menu.grilled": "შემწვარი ხორცი",
    "menu.soups": "წვნიანები",
    "menu.desserts": "დესერტები",
    "menu.drinks": "სასმელები",

    // Gallery
    "gallery.label": "გალერეა",
    "gallery.headline": "მომენტები დარიკოში",
    "gallery.subtitle":
      "შეხედე სითბოს, გემოებსა და ატმოსფეროს, რომელიც გელოდება.",

    // Reservation
    "reserve.label": "დაჯავშნა",
    "reserve.headline": "დაჯავშნე მაგიდა",
    "reserve.subtitle":
      "შემოგვიერთდი დაუვიწყარი ქართული სადილისთვის. დაჯავშნე მაგიდა და დანარჩენს ჩვენ მოვაგვარებთ.",
    "reserve.name": "სახელი და გვარი",
    "reserve.name.placeholder": "თქვენი სახელი",
    "reserve.phone": "ტელეფონის ნომერი",
    "reserve.phone.placeholder": "+995 ...",
    "reserve.date": "თარიღი",
    "reserve.time": "დრო",
    "reserve.guests": "სტუმრების რაოდენობა",
    "reserve.guest": "სტუმარი",
    "reserve.guests_plural": "სტუმარი",
    "reserve.notes": "სპეციალური მოთხოვნები",
    "reserve.notes.placeholder":
      "ალერგიები, დღესასწაულები, ადგილის პრეფერენცია...",
    "reserve.submit": "დაჯავშნის დადასტურება",
    "reserve.success.title": "მაგიდა დაჯავშნილია!",
    "reserve.success.message":
      "მოუთმენლად გელოდებით დარიკოში. დადასტურებას მალე მიიღებთ.",
    "reserve.success.back": "ახალი დაჯავშნა",

    // Instagram
    "instagram.label": "გამოგვყევი",
    "instagram.headline": "დაგვიკავშირდი",
    "instagram.cta": "გამოგვყევი Instagram-ზე",

    // Contact
    "contact.label": "როგორ მოგვიძებნო",
    "contact.headline": "ეწვიე დარიკოს",
    "contact.hours": "სამუშაო საათები",
    "contact.hours.value": "ყოველდღე: 10:00 — 00:00",
    "contact.phone": "ტელეფონი",
    "contact.location": "მისამართი",
    "contact.location.value": "თბილისი, საქართველო",
    "contact.map": "გახსნა Google Maps-ში",
    "contact.instagram": "ინსტაგრამი",

    // Footer
    "footer.rights": "ყველა უფლება დაცულია.",
    "footer.tagline": "შექმნილია სიყვარულით თბილისში",
  },
};

function isValidLang(val: string | null): val is Language {
  return val === "en" || val === "ru" || val === "ka";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("dariko-lang");
      return isValidLang(saved) ? saved : "en";
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("dariko-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
  }, []);

  const t = useCallback(
    (key: string) => {
      return translations[lang][key] ?? key;
    },
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
