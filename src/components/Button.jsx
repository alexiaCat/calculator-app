import React from 'react'

export const Button = ({ label, onClick }) => {

  return (
    <button className="bg-black hover:bg-blue-500 text-white rounded-lg px-8 py-2" onClick={onClick}>
      <p className="font-ibm-plex-mono text-[50px]">{label}</p>
    </button>

  )
}
