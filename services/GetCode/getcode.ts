import { config } from '@/api';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

interface CodeDataType {
  RESULT: number;
  CODE: string;
  DESCRIPTION: string;
}

interface CodeResponseType {
  status: number;
  data: CodeDataType;
}

interface Params {
  id: string | string[];
}

export const getCode = ({ id }: Params): Promise<CodeResponseType> => {
  return config.get(`?apikey=${apiKey}&method=checkstatus&id=${id}&test=2`);
};
