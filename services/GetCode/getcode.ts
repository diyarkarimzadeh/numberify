import { config } from '@/api';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export type CodeDataType = {
  RESULT: number;
  CODE: string;
  DESCRIPTION: string;
};

export type CodeResponseType = {
  status: number;
  data: CodeDataType;
};

export type Params = {
  id: string | string[];
};

export const getCode = ({ id }: Params): Promise<CodeResponseType> => {
  return config.get(`?apikey=${apiKey}&method=checkstatus&id=${id}&test=2`);
};
