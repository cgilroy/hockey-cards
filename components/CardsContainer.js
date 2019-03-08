import { useState, useEffect } from 'react'
import Card from './Card.js'
import Deck from './Deck.js'
import ClosedPack from './ClosedPack.js'
import PlayerPicker from './PlayerPicker.js'
import PackOpenAnimation from './PackOpenAnimation.js'
// const url = "https://nhl.bamcontent.com/images/headshots/current/168x168/"+props.thirdStar.id+".jpg"
const CardsContainer = () => {
  const [cards, updateCards] = useState([])
  const teamID = 14;
  const [packOpen, updatePackOpen] = useState(false)
  const [isLoading, updateIsLoading] = useState(false)
  const [animatePackOpen, updateAnimatePackOpen] = useState(false)
  useEffect(
    () => {
      if (!packOpen) return
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
    [packOpen]
  )
  const openPack = () => {
    updatePackOpen(true)
  }
  console.log('cards',cards)
  return (
    <div>
      {!packOpen && <ClosedPack onClick={openPack}/>}
      {isLoading && <div className="loading"></div>}
      {cards}
      <PackOpenAnimation />
      <style jsx>{`
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
        }
      `}</style>
    </div>
  )
}

export default CardsContainer
