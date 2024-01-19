import React from 'react'

export default function Card({firstname, lastname, title, imageUri}) {
  return (
    <div class="container">
        <div class="personalInfo">
            <p class="nameStyle">{firstname}<br />{lastname}</p>
            <p class="titleStyle">{title}</p>
        </div>

        <div>
          <img class="personImage" src={imageUri} alt=''></img>
        </div>
        <div>
            
        </div>
    </div>
  )
}
