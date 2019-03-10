import {useState,useEffect} from 'react'
import Deck from './Deck.js'
const PlayerPicker = (props) => {
  var outputPlayers = []
  while(outputPlayers.length < 10){
      var r = Math.floor(Math.random()*(props.playerList.length-1)) + 1;
      if(outputPlayers.indexOf(r) === -1) outputPlayers.push(r);
  }

  const [cards,setCards] = useState('')

  useEffect(
    () => {
      var picPromises = []
      var playerData = []
      outputPlayers.map(index => {
        // let actionShot = "https://nhl.bamcontent.com/images/actionshots/" + player.person.id + ".jpg"
        // let headShot = "https://nhl.bamcontent.com/images/headshots/current/168x168/"+player.person.id+".jpg"
        let name = props.playerList[index].person.fullName
        let position = props.playerList[index].position.abbreviation
        let number = props.playerList[index].jerseyNumber
        let teamID = props.playerList[index].teamID
        playerData.push({name:name,position:position,number:number,teamID:teamID})
        picPromises.push(
          new Promise((resolve, reject) => {
            let img = new Image()
            img.onload = () => resolve(img)
            img.onerror = () => resolve(img)
            img.src = "https://nhl.bamcontent.com/images/actionshots/" + props.playerList[index].person.id + ".jpg"
          })
        )

      })
        Promise.all(picPromises).then(cards => {
            setCards(<Deck cards={cards} playerData={playerData}/>)
            props.doneLoad()
        })
    },[]
  )

  console.log('outputPlayers',cards)
  return(cards)
}

export default PlayerPicker
