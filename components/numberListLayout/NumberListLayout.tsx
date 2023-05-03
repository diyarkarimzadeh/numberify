import styles from './NumberListLayout.module.scss'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import { getNumbers } from '@/services/Numbers/getnumbers'
import React, { useState } from 'react'
import { useQuery } from 'react-query'

interface buyNumberProps {
  service: string
  country: string
  operator: string
}

interface Props {
  service: string
  country: string
  buyNumber: ({ service, country, operator }: buyNumberProps) => void
}

const NumberLayout = ({ service, country, buyNumber }: Props) => {
  const { data, status } = useQuery(['numbers', service, country], () =>
    getNumbers({ service, country }).then(res => res.data)
  )

  if (status === 'loading') {
    return (
      <div className='flex justify-center items-center mt-8'>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_list}>
        {data?.map(item => (
          <div>
            <ServiceCard
              service={item.service}
              country={item.country}
              count={item.count}
              amount={item.amount}
              operator={item.operator}
              buyNumber={buyNumber}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NumberLayout
