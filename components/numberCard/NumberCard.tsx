import React from 'react'
import styles from './NumberCard.module.scss'
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { trimNumber } from '@/utils/utils';

type Props = {
    RESULT: string | string[];
    ID: string | string[];
    NUMBER: string | string[];
    AREACODE: string | string[];
    AMOUNT: string | string[];
    REPEAT: string | string[];
    TIME: string | string[];
}

const NumberCard = ({ RESULT, ID, NUMBER, AREACODE, AMOUNT, REPEAT, TIME }: Props) => {
    
    const router = useRouter();
    const [num, setNum] = useState({ min: trimNumber(typeof TIME === "string" && TIME), second: 0 })

    let intervalRef = useRef<any>();

    const decreaseSec = () => {
        setNum({ ...num, second: num.second - 1 })
    };

    const decreaseMin = () => {
        setNum({ min: num.min - 1, second: 59 })
    }

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if (num.second > 0) { decreaseSec() } else {
                if (num.min > 0) { decreaseMin() } else { router.push('/') }
            }
        }, 1000);
        return () => clearInterval(intervalRef.current);
    }, [num]);


    return (

        <div className={styles.main}>
            <div className={styles.main_header}>
                <div><p className={styles.main_header_p}>Here is your Temp Number</p></div>
                <div className={styles.main_header_div}><p className={styles.main_header_div_p}>ID: {ID}</p></div>
            </div>

            <div className={styles.main_price}>
                <p>{NUMBER}</p>
            </div>
            <div className={styles.main_info}>
                <div>
                    <p className={styles.main_info_p}>Operator Code: 1</p>
                </div>
                <div>
                    <p className={styles.main_info_p}>{num.min >= 10 ? num.min : `0${num.min}`}:{num.second >= 10 ? num.second : `0${num.second}`}</p>
                </div>
            </div>
            <div className={styles.main_button}>
                <Button variant="outline" className={styles.main_button_btn}>Check for Code</Button>
            </div>
        </div>
    )
}

export default NumberCard