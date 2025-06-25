import React from 'react'
import "./DarkMode.css"

const DarkMode = () => {
    const setDarkMode = () => {
      document.querySelector("body").setAttribute("data-theme", "dark")
      localStorage.setItem("selectedTheme", "dark")
    }
    const setLightMode = () => {
      document.querySelector("body").setAttribute("data-theme", "light")
       localStorage.setItem("selectedTheme", "light")
    }

    const selectedTheme = localStorage.getItem("selectedTheme")
    if (selectedTheme === "dark") {
        setDarkMode()
    }
    const toggleTheme = e => {
        if (e.target.checked) setDarkMode()
            else setLightMode()
    }
  return (
    <div className='dark_mode'>
       <label class="ui-switch">
  <input 
  className='dark_mode'
  id='darkmode-toggle'
  type="checkbox"
  onChange={toggleTheme}
  />

  <div class="slider">
    <div class="circle"></div>

  </div>
</label>
        
    </div>
  )
}

export default DarkMode