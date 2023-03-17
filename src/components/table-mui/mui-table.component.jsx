import { DataGrid } from '@mui/x-data-grid';

import RemoveMUIButton from '../button-mui/remove-mui-button.component'
import MUISelect from '../select-mui/mui-select.component'
import MUITextInput from '../text-input-mui/mui-textinput.component'

import { generateArrayRange } from '../../utils/general.util'
import { sizeCalculator } from '../../utils/sizecalculator.util'

import { useEffect, useState } from 'react'
import MUIModal from '../modal-mui/mui-modal.component';

import './mui-table.component.styles.css'

const resolutionArray = ['QCIF', 'CIF', 'HD1', 'D1', 'WCIF', 'WHD1', 'WD1', 'P720', 'P960', 'P1080']
const resolution = {
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

const modeArray = ['PAL', 'NTSC']


const MUITable = ({ channelList, setChannelList }) => {
    const columns = [
      { field: 'channel', headerName: 'Channel', width: 70 },
      { field: 'resolution', 
        headerName: 'Resolution',
        width: 200,
        description: 'Resolution Quality for the channel video',
        renderCell: (params) => {
          return (
            <>
              <MUISelect setChannelList={setChannelList} id={params.row.id} channelList={channelList} resolution={resolution} label="Resolution" options={resolutionArray} />
            </>
          )
        } 
      },
      { 
        field: 'mode',
        headerName: 'Mode',
        width: 130,
        renderCell: (params) => {
          return <MUISelect setChannelList={setChannelList} id={params.row.id} channelList={channelList} label="Mode" options={modeArray} />
        }
      },
      {
        field: 'quality',
        headerName: 'Quality',
        description: 'Quality will affect bit rate',
        width: 160,
        renderCell: (params) => {
          return <MUISelect setChannelList={setChannelList} id={params.row.id} channelList={channelList} label="Quality" options={generateArrayRange(1,8,1)}/>
        }
      },
      {
        field: 'frame',
        headerName: 'Frame (1-30)',
        description: 'Frame rate of the video',
        sortable: false,
        width: 160,
        renderCell: (params) => {
          return <MUISelect setChannelList={setChannelList} id={params.row.id} channelList={channelList} label="Frame" options={generateArrayRange(1,30,1)}/>
        }
      },
      {
        field: 'duration',
        headerName: 'Duration (hour)',
        description: 'Duration for video to stream',
        sortable: false,
        width: 160,
        renderCell: (params) => {
          return <MUITextInput channelList={channelList} id={params.row.id} setChannelList={setChannelList}/>
        }
      },
      {
        field: 'rate',
        headerName: 'Rate (kbps)',
        description: 'Data Rate',
        sortable: false,
        width: 160,
        valueGetter: (params) => {
          return `${rate[params.row.resolution][params.row.quality-1]}`
        }
      },
      {
        field: 'size',
        headerName: 'Size',
        description: 'Data Size based on the selection properties.',
        sortable: false,
        width: 160,
        valueGetter: (params) => {
          return sizeCalculator(params.row)
        }
      },
      {
        field: 'action',
        headerName: 'Action',
        description: 'Actions',
        sortable: false,
        width: 280,
        renderCell: (params) => {
          return (
            <>
              <div className='actions-container'>
                <MUIModal row={params.row}/>
                <RemoveMUIButton id={params.row.id} channelList={channelList} setChannelList={setChannelList}/>
              </div>
            </>
          ) 
          
        }
      },
    ];
    const [ newRows, setNewRows ] = useState(channelList)
    const [ newColumns, setNewColumns ] = useState(columns)
    const rate = {
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
    }


    useEffect(() => {
      let rows = channelList.map((item, index) => {
          item.id = index+1
          item.channel = index + 1
          return item
      })
      setNewRows(rows)
      setNewColumns([].concat(columns))
    }, [channelList])


  return (
    <div style={{ height: '85vh', width: '100%', boxShadow: "0px 2px 2px #333333" }}>
      <DataGrid
        rows={newRows}
        columns={newColumns}
        pageSize={10}
        rowHeight={100}
        rowsPerPageOptions={[5,10]}
      />
    </div>
  );
}

export default MUITable