import './App.css';

import MUITable from './components/table-mui/mui-table.component'
import MUIButton from './components/button-mui/mui-button.component';

import { useState } from 'react'

function App() {
  
  const [ channelList, setChannelList ] = useState([])

  const addChannelHandler = () => {
    let object = {
      mode: 'PAL',
      quality: 1
    }
    let cloneArray = Array.from(channelList)
    cloneArray.push(object)

    setChannelList([].concat(cloneArray))

  }

  const baseData = {
    rate:{
      QCIF:["512","448","416","384","352","320","288","256"],
      CIF:["1024","768","640","512","440","350","312","280"],
      HD1:["1536","1280","1024","768","640","560","500","450"],
      D1:["2048","1536","1280","1024","900","800","720","640"],
      WCIF:["1024*1.3","768*1.3","640*1.3","512*1.3","440*1.3","350*1.3","312*1.3","280*1.3"],
      WHD1:["1536*1.3","1280*1.3","1024*1.3","768*1.3","640*1.3","560*1.3","500*1.3","450*1.3"],
      WD1:["2048*1.3","1536*1.3","1280*1.3","1024*1.3","900*1.3","800*1.3","720*1.3","640*1.3"],
      P720:["6144","4800","4128","3456","2784","2112","1440","768"],
      P960: ["7987.2", "6240", "5366.4", "4492.8", "3619.2", "2745.6", "1872", "998.4"],
      P1080:["8192","6390","5505","4068","3712","2816","1919","1024"]
    },resolution:{
      QCIF:"P176*144 / N160*120",
      CIF:"P352*288 / N352*240",
      HD1:"P704*288 / N704*240",
      D1:"P704*576 / N704*480",
      WCIF:"P480*288 / N480*240",
      WHD1:"P960*288 / N960*240",
      WD1:"P960*576 / N960*480",
      P720:"1280*720",
      P960: "1280*960",
      P1080:"1920*1080"
    }
  }
  
  return (
    <div className='main-page-container'>
      <h1>Bit Rate Calculator</h1>
      <MUIButton label="Add Channel" onClickFunc={addChannelHandler}/>
      <div className='main-info-container'>
        <div className='calculator-container'>
          <MUITable channelList={channelList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
