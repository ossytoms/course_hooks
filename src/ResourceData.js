import React, { useEffect, useState, useCallback } from 'react';


export default function ResourceData({ resourceType }){

    var [data, setData]  = useState()

    useEffect(
        () => {
          fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setData(json[0].title))
        }, [resourceType]
      )
      return(
        <>
        {JSON.stringify(data)}
        </>
      );
}

