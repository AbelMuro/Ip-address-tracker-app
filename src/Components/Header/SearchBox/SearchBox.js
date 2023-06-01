import React, {useState, useRef, useContext} from 'react';
import styles from './styles.module.css';
import icons from './icons';
import { ContextQuery } from '../../../Context';

function SearchBox () {
    const [query, setQuery] = useState('');
    const {dispatchQuery} = useContext(ContextQuery);
    const searchBox = useRef();
    const errorMessage = useRef();

    const handleChange = (e) => {
        searchBox.current.style.border = '';
        errorMessage.current.style.display = '';
        searchBox.current.setCustomValidity('');
        setQuery(e.target.value);
    }

    const handleBlur = (e) => {
        const isValid = e.target.checkValidity();

        if(isValid){
            searchBox.current.style.border = '';
            errorMessage.current.style.display = '';
        }
        else{
            searchBox.current.style.border = '2px solid red';
            errorMessage.current.style.display = 'block'
        }
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        searchBox.current.style.border = '2px solid red';
        errorMessage.current.style.display = 'block';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchQuery(query);
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <input 
                value={query} 
                placeholder='Search for any IP address or domain'
                onChange={handleChange} 
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                className={styles.searchBox}
                ref={searchBox}
                required
                />
            <button className={styles.submitButton}>
                <img src={icons['arrow']} className={styles.arrow} alt='arrow'/>
            </button>
            <div className={styles.errorMessage} ref={errorMessage}>
                Can't be empty
            </div>
        </form>
        )
}

export default SearchBox;