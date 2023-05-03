import { countries } from '@/constants/countries'
import { services } from '@/constants/services'

export const getServiceById = (id: string | string[]): string => {
  let serviceName: string
  services.map(serviceItem => {
    if (serviceItem.id === id) {
      serviceName = serviceItem.name_en
    }
  })
  return serviceName
}

export const getCountryById = (id: string | string[]): string => {
  let countryName: string
  countries.map(countryItem => {
    if (countryItem.id === id) {
      countryName = countryItem.name_en
    }
  })
  return countryName
}

export const convertTomanToDollar = (price: string): number => {
  return Math.round(parseInt(price) / 55000 + 5)
}

export const trimNumber = (value: string): number => {
  const stringValue = value.toString()
  let trimValue = stringValue?.slice(3, 5)
  return parseInt(trimValue)
}
