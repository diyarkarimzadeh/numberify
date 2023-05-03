import styles from './NumberCard.module.scss'
import { Button } from '@/components/ui/button'
import { trimNumber } from '@/utils/utils'
import { useRouter } from 'next/router'
import React from 'react'
import { useState, useRef, useEffect } from 'react'

type Props = {
  result: string | string[]
  id: string | string[]
  number: string | string[]
  areacode: string | string[]
  amount: string | string[]
  reapet: string | string[]
  time: string | string[]
  code: string
  status: 'loading' | 'success' | 'idle' | 'error'
  checkForCode: () => void
}

const NumberCard = ({ result, id, number, areacode, amount, reapet, time, code, status, checkForCode }: Props) => {
  const router = useRouter()

  const [timer, setTimer] = useState({ minute: trimNumber(typeof time === 'string' && time), second: 0 })

  let intervalRef = useRef<NodeJS.Timer | null>(null)

  const decreaseSec = () => {
    setTimer({ ...timer, second: timer.second - 1 })
  }

  const decreaseMin = () => {
    setTimer({ minute: timer.minute - 1, second: 59 })
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (timer.second > 0) {
        decreaseSec()
      } else {
        if (timer.minute > 0) {
          decreaseMin()
        } else {
          router.push('/')
        }
      }
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [timer])

  return (
    <div className={styles.main}>
      <div className={styles.main_header}>
        <div>
          <p className={styles.main_header_p}>Here is your Temp Number</p>
        </div>
        <div className={styles.main_header_div}>
          <p className={styles.main_header_div_p}>
            {timer.minute >= 10 ? timer.minute : `0${timer.minute}`}:
            {timer.second >= 10 ? timer.second : `0${timer.second}`}
          </p>
        </div>
      </div>

      <div className={styles.main_price}>
        <p>{number}</p>
      </div>
      <div className={styles.main_info}>
        <div>
          <p className={styles.main_info_p}>Your code:</p>
        </div>
        <div>
          <p className={styles.main_info_p}>
            {status === 'idle'
              ? 'Nothing to show here'
              : status === 'loading'
              ? 'Loading...'
              : status === 'success' && code}
          </p>
        </div>
      </div>
      <div className={styles.main_button}>
        <Button onClick={checkForCode} variant='outline' className={styles.main_button_btn}>
          Check for Code
        </Button>
      </div>
      <div className={styles.main_button}>
        <Button
          onClick={() => {
            router.push('/')
          }}
          variant='outline'
          className={styles.main_button_btnback}
        >
          Back to Home
        </Button>
      </div>
    </div>
  )
}

export default NumberCard
