//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Plane from './components/plane/plane'
//import Tabs from './components/tab'
import './App.css'

function App() {
  // let [currentTab, setCurrentTab] = useState(0);
  // let [tabs, setTabs] = useState<string[]>(['Gallery', 'Daily', 'About']);

  // const handleSetCurrentTab = (index: number) => {
  //   setCurrentTab(index);
  // }

  // const handleSetTabs = (tabsArray: string[]) => {
  //   setTabs(tabsArray);
  // }

  // handleSetCurrentTab(0);
  // handleSetTabs(['Gallery', 'Daily', 'About', 'Me'])
  return (
    <>
      <div className='home'>
        <Plane />
      </div>
    </>
  )
}

export default App
