import React from 'react';
import Header from './Components/Header';
import ShareContext from './Context';
import Map from './Components/Map';
import Dialog from './Components/Dialog';
import './styles.css';

function App() {

    return(
        <main>
            <Header />
            <Dialog/>
            <Map/>
        </main>
    )
}

export default ShareContext(App);