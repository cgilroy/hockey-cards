import React from 'react'
import LogoNJD from '../static/logos/NHL-icons-NJD.svg';
import LogoNYI from '../static/logos/NHL-icons-NYI.svg';
import LogoNYR from '../static/logos/NHL-icons-NYR.svg';
import LogoPHI from '../static/logos/NHL-icons-PHI.svg';
import LogoPIT from '../static/logos/NHL-icons-PIT.svg';
import LogoBOS from '../static/logos/NHL-icons-BOS.svg';
import LogoBUF from '../static/logos/NHL-icons-BUF.svg';
import LogoMTL from '../static/logos/NHL-icons-MTL.svg';
import LogoOTT from '../static/logos/NHL-icons-OTT.svg';
import LogoTOR from '../static/logos/NHL-icons-TOR.svg';
import LogoCAR from '../static/logos/NHL-icons-CAR.svg';
import LogoFLA from '../static/logos/NHL-icons-FLA.svg';
import LogoTBL from '../static/logos/NHL-icons-TBL.svg';
import LogoWSH from '../static/logos/NHL-icons-WSH.svg';
import LogoCHI from '../static/logos/NHL-icons-CHI.svg';
import LogoDET from '../static/logos/NHL-icons-DET.svg';
import LogoNSH from '../static/logos/NHL-icons-NSH.svg';
import LogoSTL from '../static/logos/NHL-icons-STL.svg';
import LogoCGY from '../static/logos/NHL-icons-CGY.svg';
import LogoCOL from '../static/logos/NHL-icons-COL.svg';
import LogoEDM from '../static/logos/NHL-icons-EDM.svg';
import LogoVAN from '../static/logos/NHL-icons-VAN.svg';
import LogoANA from '../static/logos/NHL-icons-ANA.svg';
import LogoDAL from '../static/logos/NHL-icons-DAL.svg';
import LogoLAK from '../static/logos/NHL-icons-LAK.svg';
import LogoSJS from '../static/logos/NHL-icons-SJS.svg';
import LogoCBJ from '../static/logos/NHL-icons-CBJ.svg';
import LogoMIN from '../static/logos/NHL-icons-MIN.svg';
import LogoWPG from '../static/logos/NHL-icons-WPG.svg';
import LogoARI from '../static/logos/NHL-icons-ARI.svg';
import LogoVGK from '../static/logos/NHL-icons-VGK.svg';
import LogoSEA from '../static/logos/NHL-icons-SEA.svg';

const teamResources = {
  "1": {
    "teamName": "New Jersey Devils",
    "logo": <LogoNJD />,
    "primaryColor": "#CE1126"
  },
  "2": {
    "teamName": "New York Islanders",
    "logo": <LogoNYI />,
    "primaryColor": "#00539B"
  },
  "3": {
    "teamName":"New York Rangers",
    "logo": <LogoNYR />,
    "primaryColor":"#0038A8"
  },
  "4": {
    "teamName":"Philadelphia Flyers",
    "logo":<LogoPHI />,
    "primaryColor":"#F74902"
  },
  "5": {
    "teamName":"Pittsburgh Penguins",
    "logo":<LogoPIT />,
    "primaryColor":"#FCB514"
  },
  "6": {
    "teamName":"Boston Bruins",
    "logo":<LogoBOS />,
    "primaryColor":"#000000"
  },
  "7": {
    "teamName":"Buffalo Sabres",
    "logo":<LogoBUF/>,
    "primaryColor":"#002654"
  },
  "8": {
    "teamName":"Montréal Canadiens",
    "logo":<LogoMTL/>,
    "primaryColor":"#AF1E2D"
  },
  "9": {
    "teamName":"Ottawa Senators",
    "logo":<LogoOTT/>,
    "primaryColor":"#E31837"
  },
  "10": {
    "teamName":"Toronto Maple Leafs",
    "logo":<LogoTOR/>,
    "primaryColor":"#003E7E"
  },
  "12": {
    "teamName":"Carolina Hurricanes",
    "logo":<LogoCAR/>,
    "primaryColor":"#CC0000"
  },
  "13": {
    "teamName":"Florida Panthers",
    "logo":<LogoFLA/>,
    "primaryColor":"#041E42"
  },
  "14": {
    "teamName":"Tampa Bay Lightning",
    "logo":<LogoTBL/>,
    "primaryColor":"#002868"
  },
  "15": {
    "teamName":"Washington Capitals",
    "logo":<LogoWSH/>,
    "primaryColor":"#C8102E"
  },
  "16": {
    "teamName":"Chicago Blackhawks",
    "logo":<LogoCHI/>,
    "primaryColor":"#CF0A2C"
  },
  "17": {
    "teamName":"Detroit Red Wings",
    "logo":<LogoDET/>,
    "primaryColor":"#CE1126"
  },
  "18": {
    "teamName":"Nashville Predators",
    "logo":<LogoNSH/>,
    "primaryColor":"#041E42"
  },
  "19": {
    "teamName":"St. Louis Blues",
    "logo":<LogoSTL/>,
    "primaryColor":"#002F87"
  },
  "20": {
    "teamName":"Calgary Flames",
    "logo":<LogoCGY/>,
    "primaryColor":"#C8102E"
  },
  "21": {
    "teamName":"Colorado Avalanche",
    "logo":<LogoCOL/>,
    "primaryColor":"#6F263D"
  },
  "22": {
    "teamName":"Edmonton Oilers",
    "logo":<LogoEDM/>,
    "primaryColor":"#041E42"
  },
  "23": {
    "teamName":"Vancouver Canucks",
    "logo":<LogoVAN/>,
    "primaryColor":"#001F5B"
  },
  "24": {
    "teamName":"Anaheim Ducks",
    "logo":<LogoANA/>,
    "primaryColor":"#B09862"
  },
  "25": {
    "teamName":"Dallas Stars",
    "logo":<LogoDAL/>,
    "primaryColor":"#006847"
  },
  "26": {
    "teamName":"Los Angeles Kings",
    "logo":<LogoLAK/>,
    "primaryColor":"#111111"
  },
  "28": {
    "teamName":"San Jose Sharks",
    "logo":<LogoSJS/>,
    "primaryColor":"#006D75"
  },
  "29": {
    "teamName":"Columbus Blue Jackets",
    "logo":<LogoCBJ/>,
    "primaryColor":"#002654"
  },
  "30": {
    "teamName":"Minnesota Wild",
    "logo":<LogoMIN/>,
    "primaryColor":"#154734"
  },
  "52": {
    "teamName":"Winnipeg Jets",
    "logo":<LogoWPG/>,
    "primaryColor":"#041E42"
  },
  "53": {
    "teamName":"Arizona Coyotes",
    "logo":<LogoARI/>,
    "primaryColor":"#8C2633"
  },
  "54": {
    "teamName":"Vegas Golden Knights",
    "logo":<LogoVGK/>,
    "primaryColor":"#B4975A"
  },
  "55": {
    "teamName":"Seattle Kraken",
    "logo":<LogoSEA/>,
    "primaryColor":"#001628"
  }
}

export default teamResources;
