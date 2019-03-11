import React from 'react'
import resources from './TeamResources.js'

const outputCard = (props) => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 350">
    <filter id="weather">
      <feTurbulence baseFrequency=".05,.004" width="200%" height="200%" top="-50%" type="fractalNoise" numOctaves="4" seed="0" result="FRACTAL-TEXTURE_10" />
      <feColorMatrix type="matrix" values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.2 1.1" in="FRACTAL-TEXTURE_10" result="FRACTAL-TEXTURE_20" />
      <feComposite in="SourceGraphic" in2="FRACTAL-TEXTURE_20" operator="in"/>
    </filter>
      <defs>
        <clipPath id="clip-path"><path id="clipPath" d="M192.73,343.83a39.11,39.11,0,0,1,37.56-68.62V68a12,12,0,0,0-12-12H16.69a12,12,0,0,0-12,12V331.83a12,12,0,0,0,12,12Z" style={{fill:'none',stroke:'#fff',strokeMiterLimit:'10px'}}/></clipPath>
      </defs>
      <title>card-template</title>
      <rect height="350" width="250" filter="url(#weather)" fill={resources[props.playerData.teamID].primaryColor}/>
      <g id="playerInfo">
        <g style={{clipPath:'url(#clip-path)'}}>
          <image
          width="250"
          height="350"
          xlinkHref={props.picUrl}/>
        </g>
          <path id="clipPath-2" data-name="clipPath" d="M192.73,343.83a39.11,39.11,0,0,1,37.56-68.62V68a12,12,0,0,0-12-12H16.69a12,12,0,0,0-12,12V331.83a12,12,0,0,0,12,12Z" style={{fill:'none',stroke:'#fff',strokeMiterLimit:'10px'}}/>
          <path
              id="dataBackground"
              d="M245.49,309.94a32.88,32.88,0,1,1-9.14-22.75V69.08s-.24-21.78-22-21.78h-192S4.69,47.39,4.69,29.87V6.69H14c0,15.12,15.28,15.09,15.28,15.09H225.36c19.91,0,20.13,19.88,20.13,19.88V309.94"
              style={{fill:'#f7f5e8',stroke:'#000',strokeMiterLimit:'10px'}}
          />
        <g id="data">
          <text transform="translate(25 39.74)" style={{fontSize:'15px',fontFamily:'Arial-BoldItalicMT, Arial',fontWeight:'700',fontStyle:'italic'}}>
            <tspan textLength="195" style={{fill:'#f4520b'}}>{resources[props.playerData.teamID].teamName.toUpperCase()}</tspan>
          </text>
          <g id="logo" transform="translate(88 286)"><svg height="47px">{resources[props.playerData.teamID].logo}</svg></g>
          <text transform="translate(46.62 13.31)" style={{fontSize:'13px',fontFamily:'Arial-BoldMT, Arial',fontWeight:'700'}}>
            <tspan fill="#fff">{props.playerData.name.toUpperCase()}</tspan>
          </text>
        </g>
      </g>
    </svg>
  )
}

export default outputCard
