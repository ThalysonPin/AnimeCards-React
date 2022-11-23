import React from 'react'

export const ListItem = ({Url, ImageUrl, Alt}) => {
  return (
    <div>
        <li>
            <a 
            rel="noreferrer"
            target="_blank"
            href={Url}>
                
            <img src={ImageUrl} 
            alt={Alt}/>
            </a>
        </li>
    </div>
  )
}
