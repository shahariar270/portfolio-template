import Button from '@Component/Button'
import { menuArray } from '@Layout/Helper'
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='st-portfolio--header'>
      <div className="st-portfolio--logo">SHAHARIAR</div>
      <div className="st-portfolio--menu">
        {menuArray.map((item, index) => (
          <Link key={index} >
            <p>
            {item.label}
            </p>
          </Link>
        ))
        }
      </div>
      <div className="st-portfolio--theme">
        <Button
        label={'theme change'}
        />
      </div>
    </div>
  )
}
