import Header from "../../Components/Header"
import React, {useState} from "react"
import './style.css'


const Inicio = () =>{


    let interval = setInterval(() =>{
        proxSlide()
    }, 6500)

    const [indexLista, setindexLista] = useState(1)

    const proxSlide = () => {
    
        if(indexLista !== 3) {
            setindexLista(indexLista + 1)
            
            
            
        } else if(indexLista === 3) {
            setindexLista(1)
            

        }
        
    }
    
    const voltarSlide = () => {
        
        if(indexLista !== 1) {
            setindexLista(indexLista - 1)
            
            
        } else if(indexLista === 1) {
            setindexLista(3)
            
            
        }
        
    }

    return(
        <div>
            <Header/>
            <main>
                <div className="container-slider" >
                    <button className="btn right" onClick={proxSlide}>X</button>
                    <button className="btn left" onClick={voltarSlide}>X</button>
                    {
                        indexLista === 1&&
                        <div className="container-slider-conteudo" > 
                            <h1>João Capistrano Honório de Abreu</h1>
                            <h3>Foi um renomado historiador brasileiro e um dos pioneiros no campo da historiografia no país. Além disso, contribuiu significativamente para os campos da etnografia e da linguística. Sua obra é reconhecida pelo rigoroso exame das fontes e pela visão crítica dos acontecimentos históricos, estabelecendo um contraponto importante em relação às pesquisas de Francisco Adolfo de Varnhagen.</h3>
                        </div>

                    }
                    {
                        indexLista ===2&&
                        <div className="container-slider-conteudo" > 
                            <h1>Estatua Capistrano de Abreu</h1>
                            <h3>A Praça Capistrano de Abreu é um verdadeiro encanto para todos que a visitam. Sua beleza paisagística e a presença dos monumentos tornam o local ainda mais especial. Um dos monumentos que chama a atenção é a estátua de Capistrano de Abreu, que se destaca no centro da praça com seus imponentes 2 metros de altura. Essa estátua é uma forma de homenagear o renomado escritor e evidencia a importância de sua obra para a cidade.</h3>
                        </div>
                    }
                    {
                        indexLista ===3&&
                        <div className="container-slider-conteudo" > 
                            <h1>Obras</h1>
                            <h3>A obra de Capistrano de Abreu é reconhecida por sua rigorosa investigação das fontes e por sua visão crítica dos fatos históricos. Seus estudos e pesquisas estabelecem um contraponto importante em relação aos trabalhos de Francisco Adolfo de Varnhagen.</h3>
                        </div>
                    }
                </div>
            </main>
        </div>
    )
}

export default Inicio