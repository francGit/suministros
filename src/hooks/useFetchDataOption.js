import {useState, useEffect } from 'react'

export default function useFetchDataOption(url){
    const [resultOption, setResultOption] = useState(null);
    const [loadingOption, setLoadingOption] = useState(true);
    const [errorOption, setErrorOption] = useState(false);
    useEffect(() => {
      (async () => {
        try{
            const res  = await fetch(url);
            const json = await res.json();
            setResultOption(json);
            setLoadingOption(false);
        }  catch(err){
            setErrorOption(err); 
            setLoadingOption(false);
        }
      })();
    }, [url])
    
    return {loadingOption, resultOption, errorOption}

}