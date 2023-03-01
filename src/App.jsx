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
      <h3>Bit Rate Calculator</h3>
      <div className='main-info-container'>
        <div className='main-info-section'>
          <b>Total Size: {totalSize}</b>
          <MUIButton color="success" label="Add Channel" onClickFunc={addChannelHandler}/>
        </div>
        <div className='calculator-container'>
          <MUITable channelList={channelList} setChannelList={setChannelList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
