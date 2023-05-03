import { buyNumber } from '@/services/BuyNumber/buynumber'
import { BuyNumberDataType } from '@/services/BuyNumber/buynumber'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'

interface Props {
  service: string
  country: string
  operator: string
}

enum Result {
  success = 1,
}

const useBuyNumber = () => {
  const router = useRouter()
  const [buyNumberLoading, setBuyNumberLoading] = useState(false)
  const [response, setResponse] = useState<BuyNumberDataType>()
  const [status, setStatus] = useState<number>()

  const handleBuyNumber = ({ service, country, operator }: Props): void => {
    setBuyNumberLoading(true)
    buyNumber({ country, service, operator }).then(res => {
      setResponse(res.data)
      setStatus(res.status)
    })
  }

  useEffect(() => {
    if (response?.RESULT === Result.success) {
      router.push(
        {
          pathname: '/number',
          query: {
            amount: response.AMOUNT,
            areaCode: response.AREACODE,
            id: response.ID,
            number: response.NUMBER,
            repeat: response.REPEAT,
            result: response.RESULT,
            time: response.TIME,
          },
        },
        '/number'
      )
    }
  }, [status])

  return {
    handleBuyNumber,
    buyNumberLoading,
  }
}

export default useBuyNumber
