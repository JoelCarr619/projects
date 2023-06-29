import React from 'react'

type Props = {}

const MainContainer = (props: Props) => {
  return (
    <div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ border: '3px solid red', padding: '6rem' }}> 
      <div style={{ display: 'flex', border: '3px solid orange', padding: '6rem' }}> </div>
    <div style={{ border: '2px solid blue', padding: '1rem' }}>
      <div style={{ display: 'flex-end', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{display: 'flex-end', padding: '15rem' }}>Perfume</span>  
      </div>
      <div style={{display: ''}}>
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