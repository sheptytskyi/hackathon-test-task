export enum AdStatus {
  Active = 'active',
  Closed = 'closed',
  Completed = 'completed',
}

export enum AdPriority {
  Moderate = 'moderate',
  Critical = 'critical',
}

export const ReadableAdStatus = {
  [AdStatus.Active]: 'Активне',
  [AdStatus.Closed]: 'Закрите',
  [AdStatus.Completed]: 'Завершене',
};

export const ReadableAdPriority = {
  [AdPriority.Moderate]: 'Помірна',
  [AdPriority.Critical]: 'Важка',
};
