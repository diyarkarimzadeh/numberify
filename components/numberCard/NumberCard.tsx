import React from 'react'
import styles from './NumberCard.module.scss'
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { trimNumber } from '@/utils/utils';

type Props = {
    result: string | string[];
    id: string | string[];
    number: string | string[];
    areacode: string | string[];
    amount: string | string[];
    reapet: string | string[];
    time: string | string[];
    code: string;
    status: "loading" | "success" | "idle" | "error"
    checkForCode: () => void;
}

const NumberCard = ({ result, id, number, areacode, amount, reapet, time, code, status, checkForCode }: Props) => {

    const router = useRouter();

    const [num, setNum] = useState({ min: trimNumber(typeof time === "string" && time), second: 0 })

    let intervalRef = useRef<NodeJS.Timer | null>(null);

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
                <div className={styles.main_header_div}><p className={styles.main_header_div_p}>{num.min >= 10 ? num.min : `0${num.min}`}:{num.second >= 10 ? num.second : `0${num.second}`}</p></div>
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
                        {status === "idle" ? 'Nothing to show here' : status === "loading" ? 'Loading...' : status === "success" && code}
                    </p>
                </div>
            </div>
            <div className={styles.main_button}>
                <Button onClick={checkForCode} variant="outline" className={styles.main_button_btn}>Check for Code</Button>
            </div>
            <div className={styles.main_button}>
                <Button onClick={() => { router.push('/') }} variant="outline" className={styles.main_button_btnback}>Back to Home</Button>
            </div>
        </div>
    )
}

export default NumberCard