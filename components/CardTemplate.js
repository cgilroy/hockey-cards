import React from 'react'
import resources from './TeamResources.js'

const outputCard = (props) => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 350">
    <filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
	    <feTurbulence type="fractalNoise" baseFrequency="0.5 0.5" numOctaves="1" seed="1" stitchTiles="noStitch" x="0%" y="0%" width="200%" height="100%" result="turbulence"/>
	    <feTurbulence type="turbulence" baseFrequency="0.01 0.01" numOctaves="6" seed="1" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence1"/>
	    <feComposite in="turbulence" in2="turbulence1" operator="over" x="0%" y="0%" width="100%" height="100%" result="composite2"/>
	     <feColorMatrix type="matrix" values="1 0 0 0 0
          1 0 0 0 0
          1 0 0 0 0
          1 0 0 1 0"
          x="0%" y="0%" width="100%" height="100%" in="composite2" result="colormatrix"/>
	     <feComposite in="SourceGraphic" in2="colormatrix" operator="in" x="0%" y="0%" width="100%" height="100%" result="composite1"/>
      </filter>
      <defs>
        <clipPath id="clip-path"><path d="M192.73,343.83a39.11,39.11,0,0,1,37.56-68.62V68a12,12,0,0,0-12-12H16.69a12,12,0,0,0-12,12V331.83a12,12,0,0,0,12,12Z" style={{fill:'none',stroke:'#fff',strokeMiterLimit:'10px'}}/></clipPath>
      </defs>
      <g filter="url(#filter)">
        <rect height="350" width="250" filter="url(#filter)" fill={resources[props.playerData.teamID].primaryColor}/>
        <g id="playerInfo">
          <g style={{clipPath:"url(#clip-path)"}}>
            <image
            x="5" y="55" width="250" height="250"
            preserveAspectRatio="xMidYMid slice"
            xlinkHref={props.picUrl} />
            <g>
              <rect transform="translate(0 300)" width="200px" height="70px" style={{fill:'#f7f5e8'}}>
              </rect>
              <text  transform="translate(15 317)" style={{fontSize:'13px',fontFamily:'Arial-BoldMT, Arial',fontWeight:'700',pointerEvents:'none'}}>
                <tspan>{props.moreData[0].firstName.toUpperCase()}</tspan>
              </text>
              <text fill="#e54f4a" transform="translate(15 335)" style={{fontSize:'18px',fontFamily:'Arial-BoldMT, Arial',fontWeight:'700',pointerEvents:'none'}}>
                <tspan>{props.moreData[0].lastName.toUpperCase()}</tspan>
              </text>
            </g>

          </g>
            <path id="clipPath-2" dataName="clipPath" style={{clipPath:"url(#clip-path)"}} d="M192.73,343.83a39.11,39.11,0,0,1,37.56-68.62V68a12,12,0,0,0-12-12H16.69a12,12,0,0,0-12,12V331.83a12,12,0,0,0,12,12Z" style={{fill:'none',stroke:'#f3bc52',strokeMiterLimit:'10px'}}/>
            <path
                id="dataBackground"
                style={{clipPath:"url(#clip-path)"}}
                d="M245.49,309.94a32.88,32.88,0,1,1-9.14-22.75V69.08s-.24-21.78-22-21.78h-192S4.69,47.39,4.69,29.87V6.69H14c0,15.12,15.28,15.09,15.28,15.09H225.36c19.91,0,20.13,19.88,20.13,19.88V309.94"
                style={{fill:'#f7f5e8',stroke:'#000',strokeMiterLimit:'10px'}}
            />
          <g id="data">
            <text transform="translate(25 39.74)" style={{fontSize:'15px',fontFamily:'Arial-BoldItalicMT, Arial',fontWeight:'700',fontStyle:'italic',pointerEvents:'none'}}>
              <tspan textLength="195" style={{fill:'#e54f4a'}}>{resources[props.playerData.teamID].teamName.toUpperCase()}</tspan>
            </text>
            <g id="logo" transform="translate(88 286)"><svg height="47px">{resources[props.playerData.teamID].logo}</svg></g>
            <text transform="translate(20 15)" style={{fontSize:'15px',fontFamily:'Arial-BoldMT, Arial',fontWeight:'700',pointerEvents:'none'}}>
              <tspan fill="#fff">
                <tspan>#{props.playerData.number}</tspan>
                &#183;
                <tspan>{props.playerData.position}</tspan>
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default outputCard
