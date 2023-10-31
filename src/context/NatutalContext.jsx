
import { createContext, useState,useEffect } from "react";
import axios from 'axios';

export const NatutalContext = createContext();

export const ProviderContext = ({ children }) => {
    const [fotos, setFotos] = useState([]);
  


 
     useEffect(() => {
        const access_token='TbESQq4kqCfP2mwvXNeaxU3PtnJyiHPAadsySLI36zN7I78n3rRYEpLr'
        axios.get('https://api.pexels.com/v1/search?query=nature', {
        headers: {
            'Authorization': `${access_token}`
          }
        })
        .then((res) => {
          setFotos(res.data.photos)
        })
        .catch((error) => {
          console.error(error)
        })
     
    }, [])


    return (
        <NatutalContext.Provider value={{fotos,setFotos}}>
            {children}
        </NatutalContext.Provider>


        );
};

