import React, { Component } from 'react'
import NavItem from './NavItem'

class Nav extends Component {
  state = {
    items: [
      { name: 'My Code', link: 'https://www.github.com/glopezep', external: true }
    ]
  }
  render () {
    return (
      <nav className='main-nav'>
        {
          this.state.items.map(item => {
            if (!item.external) {
              return <NavItem item={item} />
            }

            return <a style={{ display: 'block', padding: '1em' }} href={item.link}>{item.name}</a>
          })
        }
        <style jsx>{`
        .main-nav {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center
        }
      `}</style>
      </nav>
    )
  }
}

export default Nav