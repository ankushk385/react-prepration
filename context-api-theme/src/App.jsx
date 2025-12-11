import { useContext } from 'react'

import {ThemeContext} from './contex/themeContext'

function App() {

  const {theme,toggleTheme} = useContext(ThemeContext)


  return (
    <>
     <div style={{backgroundColor:theme==="light"?"#ffffff":"#222222"}} >
<h1>this color will change</h1>
<button onClick={toggleTheme}>{theme==='light' ? 'change to dark' : 'change to light'}</button>
     </div>
    </>
  )
}

export default App
