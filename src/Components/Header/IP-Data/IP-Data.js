import React, {useContext, useEffect, useState} from 'react';
import styles from './styles.module.css';
import { ContextQuery } from '../../../Context';

function IPdata () {
    const {query} = useContext(ContextQuery);
    const [data, setData] = useState(null)

    useEffect(() => {
        const apikey = process.env.apikey;

        fetch(`https://geo.ipify.org/api/v2/country?apiKey=${apikey}&ipAddress=192.212.174.101`)
            .then((response) => {
                return response.json()
            })
            .then((results) => {
                setData(results);
            })
    }, [query])

    useEffect(() => {
        console.log(data)
    },[data])

    return(
        <section className={styles.container}>
                <div className={styles.dataContainer}>
                    <h2 className={styles.title}>
                        ip address
                    </h2>
                    <p className={styles.data}>
                        {data ? data.ip : ''}
                    </p>
                </div>
                <div className={styles.verticalLine}></div>
                <div className={styles.dataContainer}>
                    <h2 className={styles.title}>
                        location
                    </h2>
                    <p className={styles.data}>
                        {data ? data.location.region : ''}
                        {data ? data.location.country : ''}
                    </p>
                </div>
                <div className={styles.verticalLine}></div>
                <div className={styles.dataContainer}>
                    <h2 className={styles.title}>
                        timezone
                    </h2>
                    <p className={styles.data}>
                        UTC -05:00
                    </p>
                </div>
                <div className={styles.verticalLine}></div>
                <div className={styles.dataContainer}>
                    <h2 className={styles.title}>
                        isp
                    </h2>
                    <p className={styles.data}>
                        SpaceX Starlink
                    </p>
                </div>
        </section>
    )
}

export default IPdata;