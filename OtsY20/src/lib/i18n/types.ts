export type Locale = "en" | "ka" | "ru";

export interface Translations {
  nav: {
    about: string;
    menu: string;
    gallery: string;
    reserve: string;
    contact: string;
  };
  hero: {
    tagline: string;
    tagline2: string;
    scroll: string;
  };
  about: {
    label: string;
    heading1: string;
    heading2: string;
    p1: string;
    p2: string;
    chef: string;
  };
  menu: {
    label: string;
    heading: string;
    currency: string;
    starters: string;
    mains: string;
    sides: string;
    desserts: string;
    seasonal: string;
    dietary: string;
    items: {
      [key: string]: {
        name: string;
        description: string;
      };
    };
  };
  gallery: {
    label: string;
    heading: string;
  };
  wine: {
    label: string;
    heading: string;
    description: string;
  };
  reservation: {
    label: string;
    heading: string;
    hours: string;
    date: string;
    time: string;
    selectTime: string;
    guests: string;
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    submit: string;
    confirmNote: string;
    required: string;
    invalidNumber: string;
    confirmTitle: string;
    confirmGuest: string;
    confirmGuests: string;
    confirmMessage: string;
    confirmAnother: string;
  };
  contact: {
    tagline: string;
    contactLabel: string;
    oldTown: string;
    viewMap: string;
    hoursLabel: string;
    tueSun: string;
    closedMon: string;
    followLabel: string;
    rights: string;
    location: string;
  };
}
