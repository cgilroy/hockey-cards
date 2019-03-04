import { useState, useEffect } from 'react'
import Card from './Card.js'
// const url = "https://nhl.bamcontent.com/images/headshots/current/168x168/"+props.thirdStar.id+".jpg"
const App = () => {
  const [picUrls, updatePicUrls] = useState([])
  const teamID = 22;
  useEffect(
    () => {
      console.log('useEffect')
      const teamUrl = "https://statsapi.web.nhl.com/api/v1/teams/"+teamID+"/roster"
      fetch(teamUrl).then(results => results.json()).then(json => json.roster.map(player => {
        let actionShot = "https://nhl.bamcontent.com/images/actionshots/" + player.person.id + ".jpg"
        let headShot = "https://nhl.bamcontent.com/images/headshots/current/168x168/"+player.person.id+".jpg"
        let name = player.person.fullName
        let position = player.position.abbreviation
        let number = player.jerseyNumber
        return (
          <Card
            actionShot={actionShot}
            name={name}
            number={number}
            position={position}
            teamID={teamID}
          />
        )
      })).then(playerPics => {
        updatePicUrls(playerPics)
      })
    },
    []
  )
  return (
    <div>
      {picUrls}
      <style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }
      `}</style>
    </div>
  )
}

export default App
