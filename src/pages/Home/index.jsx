import './style.css'

import { Link } from 'react-router-dom'

function Home(){
    return(
        <>
     
    
       
      <main>
        Meu conteúdo

        <Link to= '/about'>
        <button type="button">Navegar</button>
        </Link>

      </main>

        </>
    )
}

export default Home