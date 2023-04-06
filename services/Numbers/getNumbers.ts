import { config } from "@/api";

const apiKey = process.env.NEXT_PUBLIC_API_KEY

export type Params = {
    service: string | string[];
    country?: string | string[];
}

export type NumberDataType = {
    service: string;
    country: string;
    operator: string;
    count: string;
    amount: string;
    repeat: string;
    time: string;
    active: number;
    description: string;
}

export type NumberResponseType = {
    status: number;
    data: NumberDataType[];
}

export const getNumbers = ({service, country}: Params): Promise<NumberResponseType> => {
    if(country !== '0') {
        return config.get(`?apikey=${apiKey}&method=getinfo&country=${country}&service=${service}`)
    } else {
        return config.get(`?apikey=${apiKey}&method=getinfo&service=${service}`)
    }  
}