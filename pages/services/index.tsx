import styles from '../../styles/services.module.scss'
import NumberLayout from '@/components/NumberListLayout/NumberListLayout'
import { Layout } from '@/components/layout'
import useBuyNumber from '@/hooks/use-buynumber'
import { getCountries } from '@/services/Countries/getcountries'
import { getServices } from '@/services/Services/getservices'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'

interface BuyNumberDataType {
  service: string
  country: string
  operator: string
}

const index = () => {
  const [serviceValue, setServiceValue] = useState('')
  const [countryValue, setCountryValue] = useState('')
  const { handleBuyNumber, buyNumberLoading } = useBuyNumber()

  const { data: servicesData, status: servicesStatus } = useQuery('services', () => getServices().then(res => res))
  const { data: countriesData, status: countriesStatus } = useQuery('countries', () => getCountries().then(res => res))

  if ((servicesStatus === 'loading' && countriesStatus === 'loading') || buyNumberLoading) {
    return (
      <Layout>
        <div className='flex justify-center items-center mt-8'>
          <p>Loading...</p>
        </div>
      </Layout>
    )
  }

  if (servicesStatus === 'error' || countriesStatus === 'error') {
    return (
      <Layout>
        <div className='flex justify-center items-center mt-8'>
          <p>An error happened, Please try again later.</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className={styles.services}>
        <div>
          <p className={styles.text}>How you can purchase a Temp Number from Numberify?</p>
          <p>
            1. First select your service of choice from services list <br className='hidden sm:inline' /> 2. Then if you
            want, you can select your desired country, If you don't care about that, Just choose Doesn't Matter{' '}
            <br className='hidden sm:inline' /> 3. Then press the Search for Temp Numbers button and select your desired
            Temp Number from the list
          </p>
        </div>

        <div className={styles.container}>
          <div>
            <p className={styles.text}>Please select your service and your country of choice from the list 👽</p>
          </div>

          <div className={styles.selector_container}>
            <div className={styles.selector}>
              <FormControl sx={{ m: 1, minWidth: 260 }}>
                <InputLabel>Services</InputLabel>
                <Select
                  value={serviceValue}
                  label='Services'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setServiceValue(e.target.value)}
                >
                  {servicesData?.data.map(service => (
                    <MenuItem value={service.id}>
                      {service.emoji ? service.emoji : '👾'} {service.name_en}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className={styles.selector}>
              <FormControl sx={{ m: 1, minWidth: 260 }}>
                <InputLabel id='demo-select-small'>Countries</InputLabel>
                <Select
                  value={countryValue}
                  label='Countries'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setCountryValue(e.target.value)}
                >
                  <MenuItem value='0'>Doesn't Matter</MenuItem>
                  {countriesData?.data.map(country => (
                    <MenuItem value={country.id}>
                      {country.emoji ? country.emoji : null} {country.name_en}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>

        {serviceValue && countryValue ? (
          <div className={styles.services_numberlayout}>
            <NumberLayout service={serviceValue} country={countryValue} buyNumber={handleBuyNumber} />
          </div>
        ) : null}
      </div>
    </Layout>
  )
}

export default index
