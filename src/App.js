import React from 'react'
import Foto from './componentes/imgs/foto.n.jpg'

function App() {
  return (
    <section>
      <header>
        <p>{'Minha foto: '}</p>
      </header>
      <div>
        <img src={Foto}/>
        <img src ='logo192.png'/>
      </div>
    </section>
  )
}

export default App;
