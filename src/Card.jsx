import React from 'react'

const Card = ({id,name,username,email}) => {
  return (
    <div className=" bg-light-green dib br3 pa3 ma2 bw2 grow tc shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
      <div>
          <h2>{name}</h2>
          <p>{username}</p>
          <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
