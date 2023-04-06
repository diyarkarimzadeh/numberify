import React from 'react'
import styles from './ServicesCard.module.scss'
import { NumberDataType } from '@/services/Numbers/getNumbers';
import { getServiceById } from '@/utils/utils';
import { getCountryById } from '@/utils/utils';
import { Button } from "@/components/ui/button"
import { convertTomanToDollar } from '@/utils/utils';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { BuyNumberDataType } from '@/pages/services';

const ServiceCard = ({ service, country, operator, count, amount, repeat, time, active, description, buyNumber }: NumberDataType & { buyNumber: ({ service, country, operator }: BuyNumberDataType) => void }) => {

  return (
    <AlertDialog>
      <div className={styles.main}>
        <div className={styles.main_header}>
          <div><p className={styles.main_header_p}>{getServiceById(service)}</p></div>
          <div className={styles.main_header_div}><p className={styles.main_header_div_p}>{getCountryById(country)}</p></div>
        </div>

        <div className={styles.main_price}>
          <p>{convertTomanToDollar(amount)}.00 <span className={styles.main_price_span}>USD</span></p>
        </div>

        <div className={styles.main_info}>
          <div>
            <p className={styles.main_info_p}>Operator Code: {operator}</p>
          </div>

          <div>
            <p className={styles.main_info_p}>Count: {count}</p>
          </div>
        </div>
        <div className={styles.main_button}>
          <AlertDialogTrigger className={styles.main_button_container}>
            <Button variant="outline" className={styles.main_button_container_btn} >Buy</Button>
          </AlertDialogTrigger>
        </div>
      </div>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. You will purchase a Temp Number of {getCountryById(country)} for {getServiceById(service)}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => { buyNumber({ service, country, operator }) }}>Buy Temp Number</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  )
}

export default ServiceCard