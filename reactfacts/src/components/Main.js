import React from 'react'
// import bg from '../images/logo.svg'
function Main() {
  return (
      <main>
        {/* <img src={bg} className="nav--icon" alt='logo' /> */}
        
          <h1 className="main--title">Fun facts about React</h1>
          <ul className="main--facts">
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100K stars on GitHub</li>
              <li>Is maintained by Facebook</li>
              <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
      </main>
  )
}

export default Main