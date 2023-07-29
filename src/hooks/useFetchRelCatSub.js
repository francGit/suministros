import {useState, useEffect } from 'react'

export default function useFetchRelCatSub(url){
    const [reldatasub, setReldatasub] = useState(null);
    const [loadsub, setLoadsub] = useState(true);
    const [ersub, setErsub] = useState(false);
    useEffect(() => {
      (async () => {
        try{
            const res  = await fetch(url);
            const json = await res.json();
            setReldatasub(json);
            setLoadsub(false);
        }  catch(err){
          setErsub(err); 
          setLoadsub(false);
        }
      })();
    }, [url])
    
    return {loadsub, reldatasub, ersub}

}