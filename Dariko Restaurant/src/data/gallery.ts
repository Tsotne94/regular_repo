import type { Language } from "../hooks/useLanguage";

export interface GalleryImage {
  src: string;
  alt: Record<Language, string>;
  span?: "tall" | "wide";
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/wine-cheese.jpg",
    alt: {
      en: "Georgian wine evening with cheese, walnuts and olives",
      ru: "Грузинский винный вечер с сыром, орехами и оливками",
      ka: "ქართული ღვინის საღამო ყველით, ნიგვზითა და ზეითუნით",
    },
    span: "tall",
  },
  {
    src: "/images/hero-terrace.jpg",
    alt: {
      en: "Cozy terrace dining with neon signs and Georgian cuisine",
      ru: "Уютная трапеза на террасе с неоновыми вывесками и грузинской кухней",
      ka: "ტერასაზე მყუდრო სადილი ნეონის ნიშნებითა და ქართული სამზარეულოთი",
    },
  },
  {
    src: "/images/georgian-salad.jpg",
    alt: {
      en: "Fresh Georgian tomato and cucumber salad",
      ru: "Свежий грузинский салат из помидоров и огурцов",
      ka: "ახალი ქართული პამიდვრისა და კიტრის სალათი",
    },
  },
  {
    src: "/images/tea-pouring.jpg",
    alt: {
      en: "Traditional tea service with Georgian hospitality",
      ru: "Традиционное чаепитие с грузинским гостеприимством",
      ka: "ტრადიციული ჩაის მიწოდება ქართული სტუმართმოყვარეობით",
    },
    span: "wide",
  },
  {
    src: "/images/iced-latte.jpg",
    alt: {
      en: "Iced latte in crystal glass with garden greenery",
      ru: "Айс-латте в хрустальном бокале среди зелени",
      ka: "ყინულიანი ლატე ბროლის ჭიქაში ბაღის მწვანილის ფონზე",
    },
    span: "tall",
  },
  {
    src: "/images/whiskey-bar.jpg",
    alt: {
      en: "Warm bar atmosphere on a Friday evening",
      ru: "Тёплая атмосфера бара в пятничный вечер",
      ka: "ბარის თბილი ატმოსფერო პარასკევის საღამოს",
    },
  },
  {
    src: "/images/couple-dining.jpg",
    alt: {
      en: "Couple enjoying khachapuri on the outdoor terrace",
      ru: "Пара наслаждается хачапури на открытой террасе",
      ka: "წყვილი ხაჭაპურით ტკბება ღია ტერასაზე",
    },
  },
];
