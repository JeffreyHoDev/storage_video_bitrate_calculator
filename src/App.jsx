import './App.css';

import MUITable from './components/table-mui/mui-table.component'
import MUIButton from './components/button-mui/mui-button.component';

import { totalSizeCalculator } from './utils/sizecalculator.util'

import { useState } from 'react'


function App() {
  
  const [ channelList, setChannelList ] = useState([])
  const addChannelHandler = () => {
    let object = {
      mode: 'PAL',
      quality: 1,
      resolution: 'QCIF',
      frame: 1,
      duration: 0
    }
    let cloneArray = Array.from(channelList)
    cloneArray.push(object)

    setChannelList([].concat(cloneArray))

  }

  let totalSize = totalSizeCalculator(channelList)
  

  return (
    <div className='main-page-container'>
      <h1>Bit Rate Calculator</h1>
      <MUIButton label="Add Channel" onClickFunc={addChannelHandler}/>
      <div className='main-info-container'>
        <div className='calculator-container'>
          {`Total: ${totalSize}`}
          <MUITable channelList={channelList} setChannelList={setChannelList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
