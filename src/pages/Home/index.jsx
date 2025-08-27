import './style.css'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

function Home(){
    return(
        <>
      <Header />
      <Header titulo={ "Página sobre nós"}/>
       
      <main>
        Meu conteúdo
      </main>

     <Footer />)
        </>
    )
}

export default Home