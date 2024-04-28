export enum AdStatus {
  Active = 'active',
  Closed = 'closed',
}

export enum AdPriority {
  Moderate = 'moderate',
  High = 'high',
}

export enum AdCategory {
  Medical = 'Медична допомога',
  Food = 'Харчові продукти',
  House = 'Житлові потреби',
  Commitment = 'Транспортні потреби',
  Psyco = 'Психологічна підтримка',
  Children = 'Дитячі потреби',
  Help = 'Допомога учасникам війни',
  Education = 'Освітні потреби',
  Finance = 'Фінансова допомога',
}

export const AdCategoriesOptions = [
  { value: 1, label: AdCategory.Medical },
  { value: 2, label: AdCategory.Food },
  { value: 3, label: AdCategory.House },
  { value: 4, label: AdCategory.Commitment },
  { value: 5, label: AdCategory.Psyco },
  { value: 6, label: AdCategory.Children },
  { value: 7, label: AdCategory.Help },
  { value: 8, label: AdCategory.Education },
  { value: 9, label: AdCategory.Finance },
];

export const ReadableAdStatus = {
  [AdStatus.Active]: 'Активне',
  [AdStatus.Closed]: 'Закрите',
};

export const AdStatusOptions = [
  { value: AdStatus.Active, label: ReadableAdStatus[AdStatus.Active] },
  { value: AdStatus.Closed, label: ReadableAdStatus[AdStatus.Closed] },
];

export const ReadableAdPriority = {
  [AdPriority.Moderate]: 'Помірний',
  [AdPriority.High]: 'Високий',
};

export const AdPriorityOptions = [
  {
    value: AdPriority.Moderate,
    label: ReadableAdPriority[AdPriority.Moderate],
  },
  { value: AdPriority.High, label: ReadableAdPriority[AdPriority.High] },
];
