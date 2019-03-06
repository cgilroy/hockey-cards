import {useState,useEffect} from 'react'
import Deck from './Deck.js'
const PlayerPicker = (props) => {
  var outputPlayers = []
  while(outputPlayers.length < 10){
      var r = Math.floor(Math.random()*(props.playerList.length-1)) + 1;
      console.log('r',r)
      if(outputPlayers.indexOf(r) === -1) outputPlayers.push(r);
  }

  const [cards,setCards] = useState('')

  useEffect(
    () => {
      var picPromises = []
      var playerData = []
      console.log('effectoutput',outputPlayers)
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
      console.log('picPromises',picPromises)
        Promise.all(picPromises).then(cards => {
            console.log('cards',cards)
            setCards(<Deck cards={cards} playerData={playerData}/>)
        })
    },[]
  )

  console.log('outputPlayers',cards)
  return(cards)
}

//   json.roster.map(player => {
//     // let actionShot = "https://nhl.bamcontent.com/images/actionshots/" + player.person.id + ".jpg"
//     // let headShot = "https://nhl.bamcontent.com/images/headshots/current/168x168/"+player.person.id+".jpg"
//     let name = player.person.fullName
//     let position = player.position.abbreviation
//     let number = player.jerseyNumber
//     playerData.push({name:name,position:position,number:number})
//     picPromises.push(
//       new Promise((resolve, reject) => {
//         let img = new Image()
//         img.onload = () => resolve(img)
//         img.onerror = () => resolve(img)
//         img.src = "https://nhl.bamcontent.com/images/actionshots/" + player.person.id + ".jpg"
//       })
//     )
//   })
//
//   Promise.all(picPromises).then(cards => {
//       console.log('cards',cards)
//       // updateCards(<Deck cards={cards} playerData={playerData} teamID={teamID}/>)
//   })

export default PlayerPicker
