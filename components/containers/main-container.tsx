import React from 'react'

type Props = {}

const MainContainer = (props: Props) => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ border: '3px solid red', padding: '8rem' }}> 
    <div style={{ border: '2px solid blue', padding: '1rem' }}>
      <h1>Welcome Hello, Home page!</h1>
      <div style={{ display: 'flex-end', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Perfume</h2>
      </div>
      <div>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
       height: '40vh', width: '40vw', boxSizing: 'border-box', padding: '1rem' }}>
        <h2>
          A floral, solar and voluptuous interpretation composed by Olivier Polge,
          Perfumer-Creator for the House of CHANEL.
          <br /><br />
          $149.99
          <br />
          $169.99
        </h2>
        </div>
      </div>
    </div>
</div>
  )
}

export default MainContainer