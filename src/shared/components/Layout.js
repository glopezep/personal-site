import React from 'react'
import Head from 'next/head'
import Nav from '../../navigation/components/Nav'

function Layout (props) {
  return (
    <section className='main-container'>
      <Head>
        <link 
          rel="stylesheet" 
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" 
        />
      </Head>
      <Nav />
      <main className='main'>
        {props.children}
      </main>
      <style jsx>{`
        body {
          background: #eee !important;
        }
        .main {
          height: 100%;
          align-items: center;
          justify-content: center;
          display: flex;
          flex: 1
        }
        .main-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh
        }
      `}</style>
    </section>
  )
}

export default Layout