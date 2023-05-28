import React, { useEffect, useState } from "react";
const AppContext = React.createContext();
const AppProvider =({children})=>{
    const url=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
    const [isLoading,setLoading]=useState(true);
    const [movie,setMovie]=useState([]);
    const [isError,setIsError]=useState({show:"false",msg:""})
    const [query,setQuery]=useState("titanic");
    async function getData(url){
        setLoading(true);
        try{
            const data=await fetch(url);
        const MovieData = await data.json();
        console.log(MovieData);
        if(MovieData.Response === "True"){
            setLoading(false);
            setMovie(MovieData.Search);
            setIsError({
                show:false,
                msg:""
            })
            setLoading(false);
        }
        else{
            setIsError({
                show:true,
                msg:MovieData.Error
            })
        }
       
        }
        catch(error){
            console.log(error);
        }
        
    }
    useEffect(()=>{
        let timeOut=setTimeout(()=>{
            getData(`${url}&s=${query}`);
        },500)
        return () => clearTimeout(timeOut);
    },[query])
    return <AppContext.Provider value={{isError,isLoading,movie,query,setQuery}}>
        {children}
    </AppContext.Provider>
}
export {AppContext , AppProvider}