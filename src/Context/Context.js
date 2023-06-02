import React, {createContext, useReducer, useState} from 'react';
import {queryReducer} from './Reducers';

export const Context = createContext();

export default function ShareContext(App) {

    return () => {
        const [query, dispatchQuery] = useReducer(queryReducer, '');
        const [openDialog, setOpenDialog] = useState(false);
        const [latLong, setLatLong] = useState([0, 0]);

        const value = {
            query,
            dispatchQuery,
            openDialog,
            setOpenDialog,
            latLong,
            setLatLong
        }

        return (
            <Context.Provider value={value}>
                <App/>
            </Context.Provider>
        )
    }
}