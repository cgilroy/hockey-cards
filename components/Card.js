import React, { useState, useEffect } from 'react'
import resources from './TeamResources.js'
import LogoEDM from '../static/logos/NHL-icons-EDM.svg';
import _JSXStyle from 'styled-jsx/style'
import CardTemplate from './CardTemplate.js'

const Card = (props) => {

  return (
    <div className="card">
      <CardTemplate picUrl={props.picUrl} playerData={props.playerData} moreData={props.moreData}/>
      <style jsx>{`
        .card {
          height: 350px;
          width: 250px;
          font-family: sans-serif;
          box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: all 0.3s cubic-bezier(.25,.8,.25,1);
          -webkit-touch-callout: none;
          -webkit-user-select: none;
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
          align-items:center;
          display: flex;
          text-align:center
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
