import { useState, useEffect } from 'react'
import Card from './Card.js'
import Deck from './Deck.js'
import PlayerPicker from './PlayerPicker.js'
// const url = "https://nhl.bamcontent.com/images/headshots/current/168x168/"+props.thirdStar.id+".jpg"
const App = () => {
  const [cards, updateCards] = useState([])
  const teamID = 14;
  useEffect(
    () => {
      console.log('useEffect')
      const teamUrls = "https://statsapi.web.nhl.com/api/v1/teams/" //+teamID+"/roster"
      var playerData = []
      fetch(teamUrls).then(teamResults => teamResults.json()).then(teamJSON => teamJSON.teams.map(team => team.id)).then(teamIDArray => {
        var teamRosterPromises = []
        console.log(teamIDArray)
        teamIDArray.map(id => {
          teamRosterPromises.push(fetch("https://statsapi.web.nhl.com/api/v1/teams/"+id+"/roster").then(results => results.json()).then(json => {
            return json.roster.map(player => {
              player.teamID = id
              return player
            })
          }))
        })
        console.log('teamrp',teamRosterPromises)
        Promise.all(teamRosterPromises).then(rosterArray => {
          let playerList = [].concat(...rosterArray);
          updateCards(<PlayerPicker playerList={playerList} />)
        })
      })
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

// .then(results => results.json()).then(json => {
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
// })

export default App
