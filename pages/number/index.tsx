import React from 'react'
import { useRouter } from 'next/router'
import { Layout } from '@/components/layout'
import NumberCard from '@/components/numberCard/NumberCard';
import styles from '../../styles/number.module.scss'

const index = () => {

    const router = useRouter();
    const routerData = router.query;

  return (
    <div>
      {routerData.result && routerData.id ? <Layout>
      <div className={styles.container}>
        <NumberCard RESULT={routerData.result} ID={routerData.id} NUMBER={routerData.number} AREACODE={routerData.areaCode} AMOUNT={routerData.amount} REPEAT={routerData.repeat} TIME={routerData.time}/>
        
      </div>
    </Layout> : <p>Your not allowed to see this page</p>}
    
    </div>
  )
}

export default index