import React from 'react'
import Link from 'next/link'

function NavItem (props) {
  return (
    <div className='main-nav-item'>
      <Link href={props.item.link}>
        <span>
          {props.item.name}
        </span>
      </Link>
      

      <style jsx>{`
        .main-nav-item {
          padding: 1em
        }
      `}</style>
    </div>
  )
}

export default NavItem