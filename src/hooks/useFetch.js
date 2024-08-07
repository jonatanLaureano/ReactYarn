import { useState, useEffect } from "react"
import axios from "axios"

const useFetch = (endpoint) => {
    const [ data, setData ] = useState()
    const [ error , setError] = useState()

    useEffect(() => {//peticion
        axios.get(`${process.env.REACT_APP_URL_API}${endpoint}`)//es una promesa
        .then(({data}) => setData(data))
        .catch(err => setError(err))
    },[endpoint])

    return [data, error]
}

export default useFetch