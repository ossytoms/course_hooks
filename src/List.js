import React, { useEffect, useState, useCallback } from 'react';

function List({ getItems }){
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems())
        console.log('Updating items')
    }, [getItems])

    return items.map(item => <li key={item}>{item}</li>)
}

export default List;