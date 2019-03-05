import { useState, useEffect } from 'react'
import Card from './Card.js'
import Deck from './Deck.js'
// const url = "https://nhl.bamcontent.com/images/headshots/current/168x168/"+props.thirdStar.id+".jpg"
const App = () => {
  const [cards, updateCards] = useState([])
  const teamID = 22;
  useEffect(
    () => {
      console.log('useEffect')
      const teamUrl = "https://statsapi.web.nhl.com/api/v1/teams/"+teamID+"/roster"
      var picPromises = []
      var playerData = []
      fetch(teamUrl).then(results => results.json()).then(json => {
        json.roster.map(player => {
          // let actionShot = "https://nhl.bamcontent.com/images/actionshots/" + player.person.id + ".jpg"
          // let headShot = "https://nhl.bamcontent.com/images/headshots/current/168x168/"+player.person.id+".jpg"
          let name = player.person.fullName
          let position = player.position.abbreviation
          let number = player.jerseyNumber
          playerData.push({name:name,position:position,number:number})
          picPromises.push(
            new Promise((resolve, reject) => {
              let img = new Image()
              img.onload = () => resolve(img)
              img.onerror = () => resolve(img)
              img.src = "https://nhl.bamcontent.com/images/actionshots/" + player.person.id + ".jpg"
            })
          )
        })

        Promise.all(picPromises).then(cards => {
            console.log(playerData)
            updateCards(<Deck cards={cards} playerData={playerData} teamID={teamID}/>)
        })
      }
    )
    },
    []
  )
  return (
    <div>
      {cards}
      <style jsx>{`

      `}</style>
    </div>
  )
}

export default App
