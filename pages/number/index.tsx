import styles from '../../styles/number.module.scss'
import NotAllowed from '@/components/NotAllowed/NotAllowed'
import NumberCard from '@/components/NumberCard/NumberCard'
import { Layout } from '@/components/layout'
import { getCode } from '@/services/GetCode/getcode'
import { useRouter } from 'next/router'
import React from 'react'
import { useQuery } from 'react-query'

const index = () => {
  const router = useRouter()
  const { id, result, number, areaCode, amount, repeat, time } = router.query

  const { data, status, refetch } = useQuery(['code', id], () => getCode({ id }).then(res => res.data), {
    enabled: false,
    refetchOnWindowFocus: false,
    cacheTime: 0,
  })

  const handleCheckForCode = () => {
    refetch()
  }

  return (
    <div>
      {result && id ? (
        <Layout>
          <div className={styles.container}>
            <NumberCard
              result={result}
              id={id}
              number={number}
              areacode={areaCode}
              amount={amount}
              reapet={repeat}
              time={time}
              code={data?.CODE ? data.CODE : null}
              status={status}
              checkForCode={handleCheckForCode}
            />
          </div>
        </Layout>
      ) : (
        <NotAllowed />
      )}
    </div>
  )
}

export default index
