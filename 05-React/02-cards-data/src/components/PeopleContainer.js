import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function PeopleContainer() {

  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);

useEffect(()=>{
  fetch("https://65cf5380bdb50d5e5f5b0746.mockapi.io/person").then(
    (res) => res.json().then((data) => {
      setPeople(data);
      setFilteredPeople(data)
    }));
},[])

const filterPeople = (filter) =>{
  let filtered = people.filter(person => person.name.includes(filter));
  setFilteredPeople(filtered);
}

  return (
    
    <div>

      <div className='searchContainer'>
        <input className='searchBar' type='text' placeholder='Search' onChange={(el)=>{
              filterPeople(el.target.value);
        }}></input>
      </div>

      <div className="father">
      {filteredPeople.map(person => {
        return <Card name={person.name} imageUri={person.avatar} title={person.jobtitle}/>
      })}
    </div>
    </div>

    
  )
}
