import React, {useContext, useEffect, useState} from 'react';
import styles from './styles.module.css';
import { Context } from '../../../Context';
import CircularProgress from '@mui/material/CircularProgress';
import useMediaQuery from '../../../Hooks/useMediaQuery';

function IPdata () {
    const {query, setOpenDialog, setLatLong} = useContext(Context);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const mobile = useMediaQuery('(max-width: 620px)');

    useEffect(() => {
        const apikey = process.env.apikey;
        setLoading(true);

        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apikey}&ipAddress=${query}&domain=${query}`)
            .then((response) => {
                if(response.status != 200)
                    throw new Error('Invalid Input');
                else
                    return response.json();
                })
            .then((results) => {
                setData(results);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setOpenDialog(true);
            })            
    }, [query])

    useEffect(() => {
        if(data)
            setLatLong([data.location.lat, data.location.lng]);
    },[data])

    return loading ? 
        (<section className={styles.loadingContainer}>
            <CircularProgress className={styles.loadingIcon}/>
        </section>)
        :
        (<section className={styles.container}>
                <div className={styles.dataContainer}>
                    <h2 className={styles.title}>
                        ip address
                    </h2>
                    <p className={styles.data}>
                        {data ? data.ip : ''}
                    </p>
                </div>
                {mobile ? <></> : <div className={styles.verticalLine}></div>}
                <div className={styles.dataContainer}>
                    <h2 className={styles.title}>
                        location
                    </h2>
                    <p className={styles.data}>
                        {data ? data.location.city: ''},
                        {data ? " " + data.location.region + " " : ''}
                        {data ? data.location.country : ''}
                    </p>
                </div>
                {mobile ? <></> : <div className={styles.verticalLine}></div>}
                <div className={styles.dataContainer}>
                    <h2 className={styles.title}>
                        timezone
                    </h2>
                    <p className={styles.data}>
                     {data ? data.location.timezone : ''}
                    </p>
                </div>
                {mobile ? <></> : <div className={styles.verticalLine}></div>}
                <div className={styles.dataContainer}>
                    <h2 className={styles.title}>
                        isp
                    </h2>
                    <p className={styles.data}>
                    {data ? data.isp : ''}
                    </p>
                </div>
        </section>)
    
}

export default IPdata;