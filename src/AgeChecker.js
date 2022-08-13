import { useEffect, useState } from 'react';
import DeepComponent from './DeepComponent';

export default function AgeChecker({ number }) {
    const [decision, setDecision] = useState()


    useEffect(() => {
        let result
        if(number < 18) result = "No way"
        if(number < 21) result = "Not in the US"
        if(number >= 21) result = "Ok to drink"
        setDecision(result)
    }, [number])

    return(
        <>
        <DeepComponent />
        {number}: {decision}
        </>
    )
}