export const menuData = {
  breakfast: {
    subcategories: [
      {
        en: 'Specially Prepared Dishes with Eggs',
        ka: 'კვერცხის სპეციალური კერძები',
        price: 24,
        items: [
          { en: 'Shakshuka', ka: 'შაქშუკა' },
          { en: 'The Moroccan', ka: 'მაროკანული' },
          { en: 'Georgian Menemen', ka: 'ქართული მენემენი' },
          { en: 'Eggs Benedict (Salmon, Bacon, or Spinach)', ka: 'კვერცხი ბენედიქტი (ორაგული, ბეკონი ან ისპანახი)' },
          { en: 'BLT & Poached Egg Sandwich with Labneh', ka: 'ბეკონის, სალათისა და კვერცხი პაშოტის სენდვიჩი ლაბნეთი' },
          { en: 'Feta & Spinach Omelet', ka: 'ფეტასა და ისპანახის ომლეტი' },
          { en: 'Gouda Omelet', ka: 'გაუდას ომლეტი' },
        ],
      },
      {
        en: 'Shoti Sandwiches',
        ka: 'შოთის სენდვიჩები',
        price: 15,
        items: [
          { en: 'Gouda, Turkey & Rocket', ka: 'გაუდა, ინდაური და რუკოლა' },
          { en: 'Gouda, Bacon, Tomato & Oregano', ka: 'გაუდა, ბეკონი, პომიდორი და ორეგანო' },
        ],
      },
      {
        en: 'Light Breakfast',
        ka: 'მსუბუქი საუზმე',
        price: 23,
        items: [
          { en: 'Catalana: Serrano Ham on Toast with Tomato Dressing', ka: 'კატალანა: სერანოს ლორი ტოსტზე, პომიდვრის დრესინგით' },
          { en: 'Poached Eggs with Homemade Labneh & Dukkah', ka: 'კვერცხი პაშოტი ლაბნეთი და დუქათი' },
          { en: 'Chicken Sausage, Bacon, Eggs & Roasted Tomatoes', ka: 'ქათმის ძეხვი, ბეკონი, კვერცხი და შემწვარი პომიდორი' },
          { en: 'English Muffin with Butter, Honey & Jam', ka: 'ტოსტი კარაქით, თაფლით და ჯემით' },
          { en: 'Red Fruit & Chia Smoothie Bowl', ka: 'სმუზი-ბოული წითელი ხილით და ჩიათი' },
          { en: 'Granola, Yogurt & Acacia Honey', ka: 'გრანოლა, იოგურტი და აკაციის თაფლი' },
          { en: 'Waffles with Mascarpone & Red Fruits', ka: 'ვაფლები მასკარპონეთი და წითელი ხილით' },
        ],
      },
    ],
  },
  appetizers: {
    items: [
      { en: 'Georgian Salad', ka: 'ქართული სალათი', description: { en: 'Tomato, cucumber, green pepper', ka: 'პომიდორი, კიტრი, წიწაკა' }, price: 21 },
      { en: 'Phkali Platter', ka: 'ფხალის ასორტი', description: { en: 'Spinach, ekala, beetroot, eggplant, bell pepper, cabbage, onion, mchadi', ka: 'ისპანახი, ეკალა, ჭარხალი, ბადრიჯანი, წიწაკა, კომბოსტო, ხახვი, მჭადი' }, price: 29 },
      { en: 'Crispy Oyster Mushroom', ka: 'ხრაშუნა სოკო', description: { en: 'With chimichurri sauce', ka: 'ჩიმიჩური სოუსით' }, price: 23 },
      { en: 'Seasonal Potatoes', ka: 'სეზონური კარტოფილი', description: { en: '', ka: '' }, price: 25 },
      { en: 'Pickled Vegetables', ka: 'მწნილები', description: { en: '', ka: '' }, price: 19 },
      { en: 'Chikhirtma', ka: 'ჩიხირთმა', description: { en: 'Chicken broth, vinegar, chili flakes', ka: 'ქათმის ბულიონი, ძმარი, წიწაკის ფანტელები' }, price: 23 },
    ],
  },
  mains: {
    items: [
      { en: 'Chicken Mtsvadi', ka: 'ქათმის მწვადი', description: { en: '', ka: '' }, price: 27 },
      { en: 'Lamb Mtsvadi', ka: 'ბატკნის მწვადი', description: { en: '', ka: '' }, price: 43 },
      { en: 'Pork Mtsvadi', ka: 'ღორის მწვადი', description: { en: '', ka: '' }, price: 29 },
      { en: 'Khinkali', ka: 'ხინკალი', description: { en: '5 pieces, black pepper sauce', ka: '5 ცალი, შავი პილპილის სოუსი' }, price: 25 },
      { en: 'Beef Kebab', ka: 'საქონლის ქაბაბი', description: { en: 'Flat bread, pomegranate molasses', ka: 'ლავაში, ბროწეულის ბადაგი' }, price: 35 },
    ],
  },
  oven: {
    items: [
      { en: 'Imeruli Khachapuri', ka: 'იმერული ხაჭაპური', description: { en: '', ka: '' }, price: 23 },
      { en: 'Adjaruli Khachapuri', ka: 'აჭარული ხაჭაპური', description: { en: 'Available until 17:00', ka: '17:00-მდე' }, price: 25 },
    ],
  },
  desserts: {
    items: [
      { en: 'Nazuki', ka: 'ნაზუქი', description: { en: 'White chocolate, strawberry, sea buckthorn purée', ka: 'თეთრი შოკოლადი, მარწყვი, ობლეპიხის პიურე' }, price: 19 },
      { en: 'Basque Cheesecake', ka: 'ბასკური ჩიზქეიქი', description: { en: 'Chocolate ice cream', ka: 'შოკოლადის ნაყინი' }, price: 15 },
    ],
  },
}
