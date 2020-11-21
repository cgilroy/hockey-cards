import {useState,useEffect} from 'react'
import Deck from './Deck.js'
const PlayerPicker = (props) => {
  var outputPlayers = []
  while(outputPlayers.length < 10){
      var r = Math.floor(Math.random()*(props.playerList.length-1)) + 1;
      if(outputPlayers.indexOf(r) === -1) outputPlayers.push(r);
  }

  const [cards,setCards] = useState('')
  const defaultImg = (image) => {
    image.src = 'static/skater.jpg'
  }

  useEffect(
    () => {
      var picPromises = []
      var playerData = []
      var playerPromises = []
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
            img.onerror = () => defaultImg(img)
            img.src = "https://cms.nhl.bamgrid.com/images/actionshots/" + props.playerList[index].person.id + ".jpg"
          })
        )
        playerPromises.push(
          fetch('https://statsapi.web.nhl.com'+props.playerList[index].person.link).then(response => response.json()).then(json => json.people)
        )
      })
        Promise.all(picPromises).then(cards => {
          Promise.all(playerPromises).then(json => {
            setCards(<Deck cards={cards} playerData={playerData} moreData={json}/>)
            props.doneLoad()
          })
        })
    },[]
  )
  return(cards)
}

export default PlayerPicker
