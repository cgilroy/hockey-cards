import CardsContainer from './CardsContainer.js'
import ClosedPack from './ClosedPack.js'
import _JSXStyle from 'styled-jsx/style'
import {useState,useEffect} from 'react'

export default function App() {
  const [packState, updatePack] = useState('closed')
  const [showPack, updateShowPack] = useState(true)
  const [showCards, updateShowCards] = useState(false)
  const [isLoading, updateIsLoading] = useState(false)
  const [cardsContainer, updateCardsContainer] = useState()
  const loadPack = () => {
    console.log('loadPack')
    updateIsLoading(true)
    updateCardsContainer(<CardsContainer doneLoad={doneLoad}/>)
  }

  const doneLoad = () => {
    console.log('doneLoad')
    updateIsLoading(false)
    updatePack('open')
  }

  const doneAnimation = () => {
    console.log('doneAnimation')
    updateShowPack(false)
    updateShowCards(true)
  }
  console.log('render-app')
  return (
    <div className="app-container">
      <button onClick={loadPack} style={{position:'absolute',left:0}}>Load Pack</button>
      {isLoading && <div className="loading"></div>}
      {cardsContainer}
      {showPack && <ClosedPack packState={packState} doneAnimation={doneAnimation}/>}
      <style jsx>{`
        .app-container {
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #778
        }
        .loading {
          border: 6px solid #f3f3f3; /* Light grey */
          border-top: 6px solid #3498db; /* Blue */
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 2s linear infinite;
          position: absolute;
          top: calc(50% - 25px);
          left: calc(50% - 25px);
          z-index: 999
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
