import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function PeopleContainer() {

  const [people, setPeople] = useState([]);

useEffect(()=>{
  fetch("https://65cf5380bdb50d5e5f5b0746.mockapi.io/person").then(
    (res) => res.json().then((data) => {
      setPeople(data);
    }));
},[])

  return (
    
    <div>
      <div className="father">
      {people.map(person => {
        return <Card name={person.name} imageUri={person.avatar} title={person.jobtitle}/>
      })}
    </div>
    </div>

    
  )
}
