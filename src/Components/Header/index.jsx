import './style.css'

function Header( {titulo ='Bem-vindo'} ){
    return (
          <header>
                   <h1>
                        {
                        titulo 
                                 ?  titulo
                                : 'minha página React'}</h1>
         </header>
    )
}



export default Header