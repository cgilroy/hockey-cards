import { useState, useEffect } from 'react'
import Card from './Card.js'
import Deck from './Deck.js'
import ClosedPack from './ClosedPack.js'
import PlayerPicker from './PlayerPicker.js'
import PackOpenAnimation from './PackOpenAnimation.js'
import _JSXStyle from 'styled-jsx/style'
// const url = "https://nhl.bamcontent.com/images/headshots/current/168x168/"+props.thirdStar.id+".jpg"
const CardsContainer = (props) => {
  const [cards, updateCards] = useState([])
  const teamID = 14;
  const [animatePackOpen, updateAnimatePackOpen] = useState(false)
  useEffect(
    () => {
      const teamUrls = "https://statsapi.web.nhl.com/api/v1/teams/" //+teamID+"/roster"
      var playerData = []
      fetch(teamUrls).then(teamResults => teamResults.json()).then(teamJSON => teamJSON.teams.map(team => team.id)).then(teamIDArray => {
        var teamRosterPromises = []
        teamIDArray.map(id => {
          teamRosterPromises.push(fetch("https://statsapi.web.nhl.com/api/v1/teams/"+id+"/roster").then(results => results.json()).then(json => {
            return json.roster.map(player => {
              player.teamID = id
              return player
            })
          }))
        })
        Promise.all(teamRosterPromises).then(rosterArray => {
          let playerList = [].concat(...rosterArray);
          updateCards(<PlayerPicker playerList={playerList} doneLoad={props.doneLoad}/>)
        })
      })
    },
    []
  )
  const openPack = () => {
    updatePackOpen(true)
  }
  return (
    <div style={{width:'100%',height:"100%",overflow:'hidden',position:'relative',display:'flex',alignItems:'center'}}>
      {cards}
    </div>
  )
}

export default CardsContainer
