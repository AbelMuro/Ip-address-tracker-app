import React, {createContext, useReducer} from 'react';
import {queryReducer} from './Reducers';

export const ContextQuery = createContext();

export default function ShareContext(App) {
    return () => {
        const [query, dispatchQuery] = useReducer(queryReducer, '');

        const value = {
            query,
            dispatchQuery
        }

        return (
            <ContextQuery.Provider value={value}>
                <App/>
            </ContextQuery.Provider>
        )
    }
}