import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { getNumbers, NumberDataType } from '@/services/Numbers/getnumbers';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import styles from './NumberListLayout.module.scss'
import { BuyNumberDataType } from '@/pages/services';

type Props = {
    service: string,
    country: string,
    buyNumber: ({ service, country, operator }: BuyNumberDataType) => void
}

const NumberLayout = ({ service, country, buyNumber }: Props) => {

    const { data, status } = useQuery(["numbers", service, country], () => getNumbers({ service, country }).then((res) => res.data));

    if (status === "loading") {
        return (
            <div className='flex justify-center items-center mt-8'>
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.container_list}>
                {data?.map((item) => (
                    <div>
                        <ServiceCard service={item.service} country={item.country} count={item.count} amount={item.amount} repeat={item.repeat} active={item.active} time={item.time} description={item.description} operator={item.operator} buyNumber={buyNumber} />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default NumberLayout