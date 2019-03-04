import React, { useState, useEffect } from 'react'
import resources from './TeamResources.js'
import LogoEDM from '../static/logos/NHL-icons-EDM.svg';

const Card = (props) => {

  // useEffect(
  //   () => {
  //     const teamUrl = "https://statsapi.web.nhl.com/api/v1/teams/22/roster"
  //     fetch(teamUrl).then(results => results.json()).then(json => json.roster.map(player => {
  //       let actionShot = "https://nhl.bamcontent.com/images/actionshots/" + player.person.id + ".jpg"
  //       let headShot = "https://nhl.bamcontent.com/images/headshots/current/168x168/"+player.person.id+".jpg"
  //       let name = player.person.fullName
  //       return (
  //         <img src={actionShot}/>
  //       )
  //     })).then(playerPics => {
  //       updatePicUrls(playerPics)
  //     })
  //   }
  // )
  return (
    <div className="card">
      <div className="card__playerPic">
        <div className="card__playerPic--gradient"></div>
        <img src={props.actionShot} />
      </div>
      <div className="card__playerInfo">
        <div className="card__playerInfoBanner" style={{backgroundColor:resources[props.teamID].primaryColor}}>
          <span>#{props.number}</span>
          <span>|</span>
          <span>{props.name}</span>
          <span>|</span>
          <span>{props.position}</span>
        </div>
      </div>
      <div className="card__logo">
        <div style={{width:'170px',height:"100px"}}>{resources[props.teamID].logo}</div>
      </div>
      <style jsx>{`
        .card {
          height: 350px;
          width: 250px;
          font-family: sans-serif;
          margin: 10px;
          box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        }
        .card:hover {
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
          transform: scale(1.1)
        }
        .card__playerPic {
          width: 100%;
          min-height: 300px;
          overflow: hidden;
          position: relative;
        }
        .card__playerPic--gradient {
          z-index:999;
          height:100%;
          width: 100%;
          position: absolute;
          top:0;
          background: linear-gradient(to top, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 20%);        }
        img {
          object-fit: cover;
          object-position: center;
          width: 100%;
          height: 100%;
        }
        .card__playerInfoBanner{
          text-transform: uppercase;
          display: flex;
          justify-content: space-evenly;
          width:100%;
        }
        .card__logo {
          display: flex;
          width: 100%;
          height: 65px;
          justify-content:center;
          position: absolute;
          bottom:0;
          z-index: 9999;
        }
        .card__playerInfoBanner span {
          padding: 5px 0;
          align-items:center
        }
        .card__playerInfo {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          height: 100%;
          z-index: 99999;
          align-items:center;
          color: white;
          text-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        }
      `}</style>
    </div>
  )
}

export default Card
