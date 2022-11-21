import React from 'react'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=ba4fb50e2f9b4d0d89efd7615c2a2d07&response_type=code&redirect_uri=https://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function login() {
  return (
    <div>
      <button><a href={AUTH_URL}>Login with spotify</a></button>
    </div>
  )
}
