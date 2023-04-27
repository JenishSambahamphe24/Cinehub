import React, { useState, createContext, useEffect, useContext } from "react";

export const API_URL = `http://www.omdbapi.com/?apikey=a5c55ebd`
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [querry, setQuerry] = useState('');
    const [isError, setIsError] = useState({ show: false, msg: '' })

    const getMovies = async function (url) {
        if (!querry) {
            setIsLoading(false)
            return
        }

        setIsLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json();

            if (data.Response === 'True') {
                setMovie(data.Search)
                setIsLoading(false)
                setIsError({
                    show: false,
                    msg:''
                })
            } else {
                setIsError({
                    show: true,
                    msg: data.Error
                })
                setIsLoading(false)
            }
        } catch (error) {
            setIsLoading(false)
            setIsError({
                show: true,
                msg: 'Something went wrong. Please try again later.'
            })
        }
    }

    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovies(`${API_URL}&s=${querry}`)
        }, 500);

        return ()=>clearTimeout(timerOut)
    },[querry])

    return (
        <AppContext.Provider value={{querry, setQuerry, isLoading, isError, movie }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}


export { AppContext, AppProvider, useGlobalContext };
