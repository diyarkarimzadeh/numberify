import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { buyNumber } from '@/services/BuyNumber/buyNumber';

type Props = {
    service: string;
    country: string;
    operator: string;
}

const useBuyNumber = ({service, country, operator}: Props) => {
    const router = useRouter();
    const [buyNumberLoading, setBuyNumberLoading] = useState(false);
    const [fetch, setFetch] = useState(false);

    const { data, status } = useQuery(["buyNumber", service, country, operator], () => buyNumber({ country, service, operator }).then((res) => res.data), { enabled: fetch });

    useEffect(() => {
        if (status === "success") {
          setFetch(false);
          if (data.RESULT === 1) {
            router.push({
              pathname: '/number',
              query: {
                amount: data.AMOUNT,
                areaCode: data.AREACODE,
                id: data.ID,
                number: data.NUMBER,
                repeat: data.REPEAT,
                result: data.RESULT,
                time: data.TIME
              }
            }, '/number')
          } else {
            console.log('error')
            
          }
        }
      }, [status])
    
      const handleBuy = () => {
        setBuyNumberLoading(true);
        setFetch(true);
      }

      return {
        handleBuy,
        buyNumberLoading
      }
  
}

export default useBuyNumber