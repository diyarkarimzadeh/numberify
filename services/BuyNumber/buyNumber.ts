import { config } from '@/api';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

interface Params {
  country: string;
  service: string;
  operator: string;
}

interface BuyNumberDataType {
  RESULT: number;
  ID: number;
  NUMBER: number;
  AREACODE: number;
  AMOUNT: number;
  REPEAT: number;
  TIME: string;
}

interface BuyNumberResponseType {
  status: number;
  data: BuyNumberDataType;
}

export const buyNumber = ({ country, service, operator }: Params): Promise<BuyNumberResponseType> => {
  return config.get(
    `?apikey=${apiKey}&method=getnum&country=${country}&operator=${operator}&service=${service}&test=1`
  );
};
