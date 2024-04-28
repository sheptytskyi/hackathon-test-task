export enum UserTypes {
  NeedHelp = 'needs',
  GiveHelp = 'helper',
}

export const ReadableUserTypes = {
  [UserTypes.NeedHelp]: 'Потребую допомоги',
  [UserTypes.GiveHelp]: 'Надаю допомогу',
};
