import { useState, useEffect } from 'react'

export const useAsync = (asyncFunction, dependencies = []) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        
        asyncFunction()
            .then(response => {
                setData(response)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            }) 
    }, [...dependencies])

    return {
        data,
        error,
        loading
    }
}