import React, { useEffect, useState, useCallback, useMemo, useContext, createContext, useRef } from 'react';

export default function UseEffectSetTimeout(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        var timer = setTimeout(() => {
            count < 9 ? setCount((count) => count + 1) : clearTimeout(timer)
        }, 1000)
    
        return () => clearTimeout(timer)
      })

      return(
        <>
        <p>Coount: { count }</p>
        </>
      )
}