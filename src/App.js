import React from 'react';
import Header from './Components/Header';
import ShareContext from './Context';
import './styles.css';

function App() {

    return(
        <main>
            <Header />
        </main>
    )
}

export default ShareContext(App);