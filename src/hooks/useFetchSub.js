import {useState, useEffect } from 'react'

export default function useFetchSub(url){
    const [dataCat, setDataCat] = useState(null);
    const [loadingCat, setLoadingCat] = useState(true);
    const [errorCat, setErrorCat] = useState(false);
    useEffect(() => {
      (async () => {
        try{
            const res  = await fetch(url);
            const json = await res.json();
            setDataCat(json);
            setLoadingCat(false);
        }  catch(err){
          setErrorCat(err); 
            setLoadingCat(false);
        }
      })();
    }, [url])
    
    return {loadingCat, dataCat, errorCat}

}