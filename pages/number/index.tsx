import React from 'react'
import { useRouter } from 'next/router'
import { Layout } from '@/components/layout'
import NumberCard from '@/components/NumberCard/NumberCard';
import styles from '../../styles/number.module.scss'
import { useQuery } from 'react-query';
import { getCode } from '@/services/GetCode/getcode';
import NotAllowed from '@/components/NotAllowed/NotAllowed';

const index = () => {

  const router = useRouter();
  const routerData = router.query;
  const id = routerData.id;

  const { data, status, refetch } = useQuery(
    ['code', id],
    () => getCode({ id }).then((res) => res.data),
    { enabled: false, refetchOnWindowFocus: false, cacheTime: 0 }
  );

  const handleCheckForCode = () => {
    refetch();
  }

  return (
    <div>

      {routerData.result && routerData.id ?
        <Layout>
          <div className={styles.container}>
            <NumberCard
              result={routerData.result}
              id={routerData.id}
              number={routerData.number}
              areacode={routerData.areaCode}
              amount={routerData.amount}
              reapet={routerData.repeat}
              time={routerData.time}
              code={data?.CODE ? data.CODE : null}
              status={status}
              checkForCode={handleCheckForCode} />
          </div>
        </Layout> : <NotAllowed />}

    </div>
  )
}

export default index