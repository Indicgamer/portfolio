import React from 'react'

export const Button = ({label, bgColor}) => {
  return (
    <button className={`max-sm:px-3 max-sm:py-1 px-4 py-2 rounded-full ${bgColor?bgColor:`bg-white`}  text-lg ${bgColor?`text-white`:`text-pink-600`} ${bgColor?``:`hover:bg-pink-50`} font-medium font-palanquin hover:scale-110 hover:shadow-lg`}>{label}</button>
  )
}
