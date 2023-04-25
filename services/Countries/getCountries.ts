import { config } from '@/api';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export type CountryDataType = {
  id: string;
  name: string;
  name_en: string;
  areacode: string;
  emoji: string;
  image: string;
  active: string;
};

export type CountryResponseType = {
  status: number;
  data: CountryDataType[];
};

export const getCountries = (): Promise<CountryResponseType> => {
  return config.get(`?apikey=${apiKey}&method=getcountry`);
};
