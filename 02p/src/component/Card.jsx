import React from 'react'

const Card = (props) => {
  return (
    <div className='parent'>
      <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.name}</h1>
        <h1>age is {props.age}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <button>View profile</button>
      </div>
    </div>
  )
}

export default Card
