import React, {useContext, useRef, useEffect} from 'react';
import styles from './styles.module.css';
import { Context } from '../../Context';

function Dialog() {
    const {openDialog, setOpenDialog} = useContext(Context);
    const overlay = useRef();
    const dialog = useRef();

    const handleClose = () => {
        setOpenDialog(false);
    }

    useEffect(() => {
        if(openDialog){
            overlay.current.style.display = 'block';
            setTimeout(() => {
                overlay.current.style.opacity = '1';
                dialog.current.style.opacity = '1';
            }, 10)
        }
        else {
            overlay.current.style.opacity = '';
            dialog.current.style.opacity = '';
            setTimeout(() => {
                overlay.current.style.display = '';
            }, 200)
        } 
    }, [openDialog])

    return ( 
        <div className={styles.overlay} ref={overlay}>
            <dialog open={openDialog} className={styles.container} ref={dialog}>
                <div className={styles.message}>
                    Invalid Input
                </div>
                <button className={styles.closeButton} onClick={handleClose}>
                    OK
                </button>
            </dialog>            
        </div>

    )
}

export default Dialog;