import { useEffect, useState } from "react"
import axios from 'axios'


export default function UseFetch(url, option) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);



    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await fetch(url, option)
                const json = await res.json();
                setResponse(json)
            } catch (error) {
                setError(error);
            }
        }
        fetchdata()
    }, [])

    return { response, error }
}