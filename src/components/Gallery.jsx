import IconHeart from "./IconHeart";
import { NaturalContext} from "../context/NaturalContext";
import { useContext } from "react";

const Gallery = ({isHome}) => {

  const { fotos, setFotos } = useContext(NaturalContext);
  let usedRow=true
  let usedCora=true

  const onHandle=(id)=>{
    let index = fotos.findIndex(x => x.id === id)
    fotos[index].linked=!fotos[index].linked
    setFotos([...fotos])
    }

  return <div className="gallery grid-columns-5 p-3">
    {fotos.map((foto) => {
        usedRow=false
        if (!isHome){
            
            if (foto.linked)
                usedRow=true
                usedCora=false         
        }
        else{
            usedRow=true
        } 
       
        if (usedRow){
            return(  <div  className="container"  key={foto.id} >  
                        <img className="photo "  src={foto.src.portrait } alt="" onClick={() => onHandle(foto.id)} />
                        {usedCora && <IconHeart className='mysvg'  filled={foto.linked}/>}
                    </div>
            )
        }
    })}   
 </div>
};
export default Gallery;
