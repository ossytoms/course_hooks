import React, { useContext } from 'react';
import UserContext from './App';

export default function DeepComponent() {
const x = useContext(UserContext)
    return(
        <>
            <p>{`I am a deep component, also providing count: ${x}`}</p>
        </>
    )
}