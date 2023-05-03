import { Button } from '../ui/button'
import styles from './NotAllowed.module.scss'
import { useRouter } from 'next/router'
import React from 'react'

const NotAllowed = () => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>Hey :) We are sorry but You are not allowed to see this page.</p>

      <Button
        onClick={() => {
          router.push('/')
        }}
      >
        Go back to Home
      </Button>
    </div>
  )
}

export default NotAllowed
