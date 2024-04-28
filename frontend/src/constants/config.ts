export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const API_KEY = import.meta.env.VITE_API_KEY;
export const API_KEY_HEADER_NAME = 'api-key';
export const ACCESS_TOKEN_HEADER_NAME = 'Bearer-token';
export const APP_TITLE = 'VolunteerActivities';

export const HACKATON_URL = 'https://best-lviv.org.ua/hack/';

export const CONTACTS = [
  { name: 'Дмитро', tg: 'dmytro_sheptytskyi' },
  { name: 'Володимир', tg: 'Volodymyr_010110' },
  { name: 'Максим', tg: 'maks0z1' },
  { name: 'Гнат', tg: 'spider_ierusalem' },
];

export const tg = (name: string) => `https://t.me/${name}`;
