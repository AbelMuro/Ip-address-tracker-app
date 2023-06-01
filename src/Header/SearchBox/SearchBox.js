import React, {useState, useRef} from 'react';
import styles from './styles.module.css';
import icons from './icons';

function SearchBox () {
    const [query, setQuery] = useState('');
    const searchBox = useRef();
    const errorMessage = useRef();

    const handleChange = (e) => {
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

    const handleSubmit = () => {

    }

    return (
        <form className={styles.container} onClick={handleSubmit}>
            <input 
                value={query} 
                placeholder='Search for any IP address or domain'
                onChange={handleChange} 
                onBlur={handleBlur}
                className={styles.searchBox}
                ref={searchBox}
                required
                />
            <button className={styles.submitButton}>
                <img src={icons['arrow']} className={styles.arrow}/>
            </button>
            <div className={styles.errorMessage} ref={errorMessage}>
                Can't be empty
            </div>
        </form>
        )
}

export default SearchBox;