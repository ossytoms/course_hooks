import React, { useEffect, useState, useCallback, useMemo, useContext, createContext, useRef } from 'react';

function UseMemoThemeStyle(){
    
    const [dark, setDark] = useState(false)
    var themeStyle = useMemo(() => {
        return({
          backgroundColor: dark ? 'black' : 'white',
          color: dark ? 'white' : 'black'
        })
      }, [dark])

      useEffect(() => {
        console.log('Theme changed: ' + (dark ? 'black' : 'White'))
      }, [themeStyle])

      return(
        <>
        <button style={themeStyle} onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        </>
      )
}


export{ UseMemoThemeStyle }