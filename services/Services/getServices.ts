import { config } from '@/api';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

interface ServiceDataType {
  id: string;
  name: string;
  name_en: string;
  description: string;
  image: string;
  active: number;
  emoji: string;
}

interface ServicesResponseType {
  status: number;
  data: ServiceDataType[];
}

export const getServices = (): Promise<ServicesResponseType> => {
  return config.get(`?apikey=${apiKey}&method=getservice`);
};
