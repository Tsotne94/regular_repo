export interface MenuItem {
  name: { ka: string; en: string; ru: string };
  description?: { ka: string; en: string; ru: string };
  price: number;
}

export interface MenuCategory {
  key: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    key: "breakfast",
    items: [
      {
        name: { en: "Shakshuka", ka: "შაქშუქა", ru: "Шакшука" },
        description: {
          en: "Baked eggs in spiced tomato sauce",
          ka: "კვერცხი სუნელებიან პომიდვრის სოუსში",
          ru: "Яйца в пряном томатном соусе",
        },
        price: 24,
      },
      {
        name: { en: "The Moroccan", ka: "მაროკოული", ru: "Марокканский" },
        description: {
          en: "North African spiced eggs",
          ka: "ჩრდილოაფრიკული სუნელებიანი კვერცხი",
          ru: "Яйца с северо-африканскими специями",
        },
        price: 24,
      },
      {
        name: { en: "Georgian Menemen", ka: "ქართული მენემენი", ru: "Грузинский Менемен" },
        description: {
          en: "Scrambled eggs with peppers & tomatoes",
          ka: "აცლილი კვერცხი წიწაკით და პომიდვრით",
          ru: "Яйца с перцами и томатами",
        },
        price: 24,
      },
      {
        name: {
          en: "Eggs Benedict",
          ka: "ეგგს ბენედიქტ",
          ru: "Яйца Бенедикт",
        },
        description: {
          en: "Salmon, Bacon, or Spinach",
          ka: "ორაგული, ბეკონი ან ისპანახი",
          ru: "Лосось, бекон или шпинат",
        },
        price: 24,
      },
      {
        name: {
          en: "BLT & Poached Egg Sandwich",
          ka: "BLT & მოხარშული კვერცხის სენდვიჩი",
          ru: "BLT сэндвич с яйцом пашот",
        },
        description: {
          en: "With labneh",
          ka: "ლაბნეთი",
          ru: "С лабне",
        },
        price: 24,
      },
      {
        name: {
          en: "Feta & Spinach Omelet",
          ka: "ფეტა და ისპანახის ომლეტი",
          ru: "Омлет с фетой и шпинатом",
        },
        price: 24,
      },
      {
        name: { en: "Gouda Omelet", ka: "გუდას ომლეტი", ru: "Омлет с гаудой" },
        price: 24,
      },
      {
        name: {
          en: "Gouda Turkey & Rocket Sandwich",
          ka: "გუდა, ინდაური და რუკოლას სენდვიჩი",
          ru: "Сэндвич с гаудой, индейкой и руколой",
        },
        description: {
          en: "Shoti bread",
          ka: "შოთის პურზე",
          ru: "На хлебе шоти",
        },
        price: 15,
      },
      {
        name: {
          en: "Gouda Bacon Tomato Sandwich",
          ka: "გუდა ბეკონი პომიდვრის სენდვიჩი",
          ru: "Сэндвич с гаудой, беконом и томатами",
        },
        description: {
          en: "Shoti bread with oregano",
          ka: "შოთის პურზე ორეგანოთი",
          ru: "На хлебе шоти с орегано",
        },
        price: 15,
      },
      {
        name: { en: "Catalana", ka: "კატალანა", ru: "Каталана" },
        price: 23,
      },
      {
        name: {
          en: "Poached Eggs with Labneh & Dukkah",
          ka: "მოხარშული კვერცხი ლაბნეთი და დუქათი",
          ru: "Яйца пашот с лабне и дуккой",
        },
        price: 23,
      },
      {
        name: {
          en: "Chicken Sausage Bacon Eggs",
          ka: "ქათმის სოსისი, ბეკონი, კვერცხი",
          ru: "Куриная сосиска, бекон, яйца",
        },
        description: {
          en: "With roasted tomatoes",
          ka: "შემწვარი პომიდვრით",
          ru: "С жареными томатами",
        },
        price: 23,
      },
      {
        name: {
          en: "English Muffin",
          ka: "ინგლისური მაფინი",
          ru: "Английский маффин",
        },
        description: {
          en: "With butter, honey & jam",
          ka: "კარაქით, თაფლით და ჯემით",
          ru: "С маслом, мёдом и джемом",
        },
        price: 23,
      },
      {
        name: {
          en: "Red Fruit & Chia Smoothie Bowl",
          ka: "წითელი ხილის და ჩიას სმუთი ბოული",
          ru: "Смузи-боул с чиа и красными фруктами",
        },
        price: 23,
      },
      {
        name: {
          en: "Granola Yogurt & Acacia Honey",
          ka: "გრანოლა იოგურტი და აკაციის თაფლი",
          ru: "Гранола с йогуртом и акациевым мёдом",
        },
        price: 23,
      },
      {
        name: {
          en: "Waffles with Mascarpone",
          ka: "ვაფლი მასკარპონეთი",
          ru: "Вафли с маскарпоне",
        },
        description: {
          en: "With red fruits",
          ka: "წითელი ხილით",
          ru: "С красными фруктами",
        },
        price: 23,
      },
    ],
  },
  {
    key: "appetizers",
    items: [
      {
        name: {
          en: "Georgian Salad",
          ka: "ქართული სალათი",
          ru: "Грузинский салат",
        },
        description: {
          en: "Tomato, cucumber, green pepper",
          ka: "პომიდორი, კიტრი, წიწაკა",
          ru: "Помидор, огурец, зелёный перец",
        },
        price: 21,
      },
      {
        name: { en: "Phkali Platter", ka: "ფხალი", ru: "Пхали" },
        description: {
          en: "Spinach, ekala, beetroot, eggplant, bell pepper, cabbage, onion, mchadi",
          ka: "ისპანახი, ეკალა, ჭარხალი, ბადრიჯანი, წიწაკა, კომბოსტო, ხახვი, მჭადი",
          ru: "Шпинат, экала, свёкла, баклажан, перец, капуста, лук, мчади",
        },
        price: 29,
      },
      {
        name: {
          en: "Crispy Oyster Mushroom",
          ka: "ხრაშუნა სოკო",
          ru: "Хрустящие вешенки",
        },
        description: {
          en: "Chimichurri sauce",
          ka: "ჩიმიჩური სოუსი",
          ru: "Соус чимичурри",
        },
        price: 23,
      },
      {
        name: {
          en: "Seasonal Potatoes",
          ka: "სეზონური კარტოფილი",
          ru: "Сезонный картофель",
        },
        price: 25,
      },
      {
        name: {
          en: "Pickled Vegetables",
          ka: "მწნილი",
          ru: "Маринованные овощи",
        },
        price: 19,
      },
      {
        name: { en: "Chikhirtma", ka: "ჩიხირთმა", ru: "Чихиртма" },
        description: {
          en: "Chicken broth, vinegar, chili flakes",
          ka: "ქათმის ბულიონი, ძმარი, წიწაკის ფანტელი",
          ru: "Куриный бульон, уксус, хлопья чили",
        },
        price: 23,
      },
    ],
  },
  {
    key: "mains",
    items: [
      {
        name: {
          en: "Chicken Mtsvadi",
          ka: "ქათმის მწვადი",
          ru: "Куриный мцвади",
        },
        price: 27,
      },
      {
        name: { en: "Lamb Mtsvadi", ka: "ბატკნის მწვადი", ru: "Бараний мцвади" },
        price: 43,
      },
      {
        name: { en: "Pork Mtsvadi", ka: "ღორის მწვადი", ru: "Свиной мцвади" },
        price: 29,
      },
      {
        name: { en: "Khinkali", ka: "ხინკალი", ru: "Хинкали" },
        description: {
          en: "5 pieces, black pepper sauce",
          ka: "5 ცალი, შავი პილპილის სოუსი",
          ru: "5 штук, соус с чёрным перцем",
        },
        price: 25,
      },
      {
        name: { en: "Beef Kebab", ka: "ძროხის ქაბაბი", ru: "Говяжий кебаб" },
        description: {
          en: "Flat bread, pomegranate molasses",
          ka: "პური, ბროწეულის ბადაგი",
          ru: "Лепёшка, гранатовая патока",
        },
        price: 35,
      },
    ],
  },
  {
    key: "oven",
    items: [
      {
        name: {
          en: "Imeruli Khachapuri",
          ka: "იმერული ხაჭაპური",
          ru: "Имерули хачапури",
        },
        price: 23,
      },
      {
        name: {
          en: "Adjaruli Khachapuri",
          ka: "აჭარული ხაჭაპური",
          ru: "Аджарули хачапури",
        },
        description: {
          en: "Available until 17:00",
          ka: "ხელმისაწვდომია 17:00-მდე",
          ru: "Доступно до 17:00",
        },
        price: 25,
      },
    ],
  },
  {
    key: "desserts",
    items: [
      {
        name: { en: "Nazuki", ka: "ნაზუქი", ru: "Назуки" },
        description: {
          en: "White chocolate, strawberry, sea buckthorn puree",
          ka: "თეთრი შოკოლადი, მარწყვი, ობლეპიხის პიურე",
          ru: "Белый шоколад, клубника, пюре из облепихи",
        },
        price: 19,
      },
      {
        name: {
          en: "Basque Cheesecake",
          ka: "ბასკური ჩიზქეიქი",
          ru: "Баскский чизкейк",
        },
        description: {
          en: "With chocolate ice cream",
          ka: "შოკოლადის ნაყინით",
          ru: "С шоколадным мороженым",
        },
        price: 15,
      },
    ],
  },
];
