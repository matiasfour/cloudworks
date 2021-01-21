import React from 'react';
import Concursos from "./Concursos"
import Recomendado from "./Recomendado"
import "./styles/main.css"
import Title from './Title';
import Image from "./Image";
import Img1 from "./images/hot100rock.png"
import Img2 from "./images/100rock.png"
import Img3 from "./images/nacional.png"
import Img4 from "./images/rocknacional.png"
import Img5 from "./images/romantica.png"
import Img6 from "./images/top40.png"
import Figura from './Figura';
import Pelado from "./images/lopez.png"
import Tauro from "./images/tauro.png"
import Coppola from "./images/coppola.png"
import ItemNoticia from './ItemNoticia';
const Main = (props) => {
    
    const images = [ {width: 240  , path : Img1 } ,
        {width: 240    , path : Img2  },
         {width: 240    , path : Img3 },
          {width: 240    , path : Img4  },
          {width: 240    , path : Img5  },
         {width: 240  , path : Img6  }]



    const title = {title: "¿QUÉ QUERÉS ESCUCHAR?" , size: 20 , family: "Arial, Helvetica, sans-serif" , weight: "bold"}

    const titlefig1 = {title: "PELADO LÓPEZ" , size: 16 , family: "Arial, Helvetica, sans-serif" , weight: "bold"}
    const titlefig2 = {title: "MARCELA TAURO" , size: 16 , family: "Arial, Helvetica, sans-serif" , weight: "bold"}
    const titlefig3 = {title: "GUILLERMO COPPOLA" , size: 16 , family: "Arial, Helvetica, sans-serif" , weight: "bold"}

    
        
    const text = {content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur hic debitis repellat sapiente accusantium! Vel vero numquam et." , 
                    size: 16 , family: "Arial, Helvetica, sans-serif" , weight: "bold",mtop : 5 , mleft: 0}

    const text2 = {content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, eius iste!" , 
                    size: 16 , family: "Arial, Helvetica, sans-serif" , weight: "bold",mtop : 5 , mleft: 0}

    return (

        <div>
            <div className="top">
                <Concursos/>
                <Recomendado/>
            </div>

            <div className="middle">
                    <div className="titlemiddle">
                        <Title   title={title.title} size={title.size}/>
                    </div>
                   

                <div className="images6">

                    {
                        images.map(img => {
                            return <Image path={img.path} width={img.width}  />
                        })
                    }
               
                    
                </div>
                
            </div> 


            <div className="bottom">
                <Title title={"NUESTRAS FIGURAS"}  size={22} mleft={50}  />
                
                    
                <div className="figuras">
                    <Figura  path={Pelado} title={titlefig1} text={text} />
                    <Figura   path={Tauro} title={titlefig2} text={text} />
                    <Figura   path={Coppola} title={titlefig3} text={text}  />
                </div>


                <div className="noticias">

                    <Title title={"ÚLTIMAS NOTICIAS DE ESPECTACULOS"}  size={22}  mb={0}  />
                    <div className="list">
                        <ItemNoticia  text={text2}  />
                        <ItemNoticia   text={text2}/>
                        <ItemNoticia   text={text2}/>
                        <ItemNoticia   text={text2}/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Main;
