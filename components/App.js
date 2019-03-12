import CardsContainer from './CardsContainer.js'
import ClosedPack from './ClosedPack.js'
import _JSXStyle from 'styled-jsx/style'
import {useState,useEffect} from 'react'

export default function App() {
  const [packState, updatePack] = useState('closed')
  const [buttonState, updateButtonState] = useState('open')
  const [showPack, updateShowPack] = useState(true)
  const [showCards, updateShowCards] = useState(false)
  const [isLoading, updateIsLoading] = useState(false)
  const [cardsContainer, updateCardsContainer] = useState()
  const loadPack = () => {
    console.log('loadPack')
    updateIsLoading(true)
    updateButtonState('')
    updateCardsContainer(<CardsContainer doneLoad={doneLoad}/>)
    console.log('immediatecardcont',cardsContainer)
  }

  const doneLoad = () => {
    console.log('doneLoad')
    updateIsLoading(false)
    updatePack('open')
  }

  const reset = () => {
    updateIsLoading(false)
    updatePack('closed')
    console.log(packState)
    updateShowPack(true)
    updateShowCards(false)
    updateCardsContainer('')
    updateButtonState('open')
  }

  const doneAnimation = (e) => {
    console.log('doneAnimation',e.target)
    updateShowCards(true)
    updateButtonState('reset')
    // updateShowPack(false)
  }
  console.log('render-app',showCards)
  const button = () => {

    console.log(buttonState)
    let buttonStyle = (
      <style jsx>{`
      .btn {
        position: relative;
        display: block;
        padding: 0;
        cursor: pointer;
        overflow: hidden;
        min-width: 80px;
        border-width: 0;
        outline: none;
        border-radius: 2px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
        z-index: 99999;
        background-color: #2ecc71;
        color: #ecf0f1;
        animation: pulse 1s infinite;
        transition: background-color .3s;
      }
      @keyframes pulse
      {
           0% {
                transform: scale(1)
           }
           50% {
                transform: scale(1.1)
           }
           100% {
                transform: scale(1)
           }
      }

      .btn:hover, .btn:focus {
        background-color: #27ae60;
      }

      .btn > * {
        position: relative;
      }

      .btn span {
        display: block;
        padding: 12px 24px;
      }

      .btn:before {
        content: "";

        position: absolute;
        top: 50%;
        left: 50%;

        display: block;
        width: 0;
        padding-top: 0;

        border-radius: 100%;

        background-color: rgba(236, 240, 241, .3);

        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }

      .btn:active:before {
        width: 120%;
        padding-top: 120%;

        transition: width .2s ease-out, padding-top .2s ease-out;
      }
      `}</style>
    )
    let resetStyle = (
      <style jsx>{`
        .btn {
          top: 0;
          position: absolute;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
          animation: none;
        }
        `}
      </style>
    )
    if (buttonState === 'open') {
      return <div className="buttonRow__button btn" onClick={loadPack} >{buttonStyle}<span>OPEN</span></div>
    } else if (buttonState === 'reset') {
      return <div className="buttonRow__button btn" onClick={reset} >{buttonStyle}{resetStyle}<span>RESET</span></div>
    } else {
      return ''
    }
  }
  let displayCards = showCards ? {height:'100%',width:'100%'} : {display:'none'}

  return (
    <div className="app-container">
      {button()}
      {isLoading && <div className="loading"></div>}
      <div style={displayCards}>{cardsContainer}</div>
      {showPack && <ClosedPack packState={packState} doneAnimation={doneAnimation}/>}
      <style jsx>{`
        .app-container {
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: lightblue;
          position: relative;
          overflow: hidden;
        }
        .buttonRow {
          width: 100%;
          display: flex;

        }

        .loading {
          height: 8px;
          width: 200px;
          position: relative;
          overflow: hidden;
          background-color: #ddd;
          z-index: 999;
          border: 1px solid #eee
        }
        .loading:before{
          display: block;
          position: absolute;
          content: "";
          left: -200px;
          width: 20px;
          height: 8px;
          background-color: #2980b9;
          animation: loading 2s linear infinite;
        }

        @keyframes loading {
            from {left: -20px; width: 30%;}
            50% {width: 30%;}
            70% {width: 70%;}
            80% { left: 50%;}
            95% {left: 120%;}
            to {left: 100%;}
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
