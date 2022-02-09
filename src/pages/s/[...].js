import * as React from 'react'
import fetch from 'node-fetch'
import { Link } from 'gatsby'

export default function SSR (props) {
  const { image, path } = props.serverData

  return (
    <>
      <Link to='/'>Home</Link><br />
      <h1>SSR: Server Side Rendering</h1>
      <p>{path}</p>
      <img
        alt='doggo'
        src={image}
      />
    </>
  )
}

export async function getServerData ({ params }) {
  const data = await fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json())
  const path = params?.["*"]
  return {
    status: 200,
    props: {
     // data has the shape of "message", "status" where message is the image src
      image: data.message,
      path,
    }
  }
}
