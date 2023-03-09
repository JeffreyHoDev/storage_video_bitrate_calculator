import './App.css';

import MUITable from './components/table-mui/mui-table.component'
import MUIButton from './components/button-mui/mui-button.component';
import AddWallVideoMUIModal from './components/modal-mui/add-wall-video-mui-modal.component'
import { Button, Link } from '@mui/material';

import WallVideoPlayer from './components/video-player/wall-video.component'
import { totalSizeCalculator } from './utils/sizecalculator.util'

import { useState } from 'react'



function App() {
  
  const [ channelList, setChannelList ] = useState([])
  const [ wallList, setWallList ] = useState([])
  const [ playVideoWall, setPlayVideoWall ] = useState(false)

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
      <div className='left-panel'>
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
      <div className='right-panel'>
        <div>
          <h3>Mini Resolution Video Wall ------ <Link href="#"> To Bigger Wall</Link></h3>
          <AddWallVideoMUIModal playVideoWall={playVideoWall} wallList={wallList} setWallList={setWallList}/>
          <div className='video-container'>
                  <p style={{textAlign: 'center', fontSize: "12px"}}>Due to limitation of video sources, the video shown might not be similar as what chosen but will replace with video close to selection. Here are the references</p>
                  <div className='video-info'>
                    <p style={{fontSize: "12px", margin: "0 .2rem"}}>1080p & 980p use 1080p video</p>
                    <p style={{fontSize: "12px", margin: "0 .2rem"}}>720p use 720p video</p>
                    <p style={{fontSize: "12px", margin: "0 .2rem"}}>WD1 & WHD1 use 480p video</p>
                    <p style={{fontSize: "12px", margin: "0 .2rem"}}>D1 use 360p video</p>
                    <p style={{fontSize: "12px", margin: "0 .2rem"}}>Others use 240p video</p>
                  </div>
                </div>
          <div className='wall-list'>
            {
              wallList.map((res, index) => {
                return <WallVideoPlayer index={index} wallList={wallList} setWallList={setWallList} key={`wall-video-${index}`} resolution={res} playVideoWall={playVideoWall} setPlayVideoWall={setPlayVideoWall} />
              })
            }
          </div>
        </div>
        <Button variant="contained" color={playVideoWall ? "error" : "success"} onClick={() => setPlayVideoWall(!playVideoWall)}>{playVideoWall ? "Pause Video Wall" : "Play Video Wall" }</Button>
      </div>
    </div>
  );
}

export default App;
