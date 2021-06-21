import {useState, useEffect} from 'react'
import { getGiffs } from '../helpers/getGiffs'


export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGiffs(category)
            .then(gifs => {
                setstate({
                    data: gifs,
                    loading: false
                })
            })
    }, [category])

    return state
}