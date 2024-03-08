import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
    <div className='header'>
        <div class="logo">
                <img src="https://images.fotmob.com/image_resources/logo/leaguelogo/dark/38.png" alt="" srcset="" width="42" height="42"></img>
            </div>
            <div class="league">
                <div class="bundesliga">
                    Bundesliga
                </div>
                <div class="country">
                    Österreich
                </div> </div>
            <div class="date">
                <div>
                    2023/24
                </div>
            </div>           
           
    </div>
    <div class="detailSelection">
            <div class="selection">Übersicht</div>
            <div class="selection"><Link to="/" className='linkStyle'>Tabelle</Link></div>
            <div class="selection"><Link to="Match" className='linkStyle'>Spiele</Link></div>
            <div class="selection">Statistiken</div>
            <div class="selection">Transfers</div>
        </div>

        <div class="borderline">

        </div>
    </div>
    
  )
}
