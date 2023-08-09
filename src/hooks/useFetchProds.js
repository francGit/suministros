import {useState, useEffect } from 'react'

export default function useFetchProds(url){
    const [dataProd, setDataProd] = useState(null);
    const [loadingProd, setLoadingProd] = useState(true);
    const [errorProd, setErrorProd] = useState(false);
    useEffect(() => {
      (async () => {
        try{
            const res  = await fetch(url);
            const json = await res.json();
            setDataProd(json);
            setLoadingProd(false);
        }  catch(err){
          setErrorProd(err); 
            setLoadingCat(false);
        }
      })();
    }, [url])
    
    return {loadingProd, dataProd, errorProd}

}