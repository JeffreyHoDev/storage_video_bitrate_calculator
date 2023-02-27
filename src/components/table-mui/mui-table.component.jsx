import { DataGrid } from '@mui/x-data-grid';

import MUIButton from '../button-mui/mui-button.component'
import MUISelect from '../select-mui/mui-select.component'
import MUITextInput from '../text-input-mui/mui-textinput.component'

import { generateArrayRange } from '../../utils/general.util'

import { useEffect, useState } from 'react'

const resolutionArray = ['QCIF', 'CIF', 'HD1', 'D1', 'WCIF', 'WHD1', 'WD1', 'P720', 'P960', 'P1080']
const modeArray = ['PAL', 'NTSC']
const columns = [
  { field: 'channel', headerName: 'Channel', width: 70 },
  { field: 'resolution', 
    headerName: 'Resolution',
    width: 130,
    renderCell: (params) => {
      return <MUISelect label="Resolution" options={resolutionArray} />
    } 
  },
  { field: 'mode',
    headerName: 'PAL/NTSC',
    width: 130,
    renderCell: (params) => {
      return <MUISelect label="Mode" options={modeArray} />
    }
  },
  {
    field: 'quality',
    headerName: 'Quality',
    type: 'number',
    width: 160,
    renderCell: (params) => {
        return <MUISelect label="Quality" options={generateArrayRange(1,8,1)}/>
    }
  },
  {
    field: 'frame',
    headerName: 'Frame (1-30)',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    renderCell: (params) => {
        return <MUISelect label="Frame" options={generateArrayRange(1,30,1)}/>
    }
  },
  {
    field: 'duration',
    headerName: 'Duration (hour)',
    description: 'Duration for video to stream',
    sortable: false,
    width: 160,
    renderCell: (params) => {
        return <MUITextInput />
    }
  },
  {
    field: 'rate',
    headerName: 'Rate (kbps)',
    description: 'Data Rate',
    sortable: false,
    width: 160
  },
  {
    field: 'size',
    headerName: 'Size',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'action',
    headerName: 'Action',
    description: 'Remove channel',
    sortable: false,
    width: 160,
    renderCell: (params) => {
        return <MUIButton label="Remove"/>
    }
  },
];

const rows = [
  { id: 1,channel: 1,  resolution: 'Snow', mode: 'Jon', quality: 35 },
  { id: 2,channel: 1,  resolution: 'Lannister', mode: 'Cersei', quality: 42 },
  { id: 3,channel: 1,  resolution: 'Lannister', mode: 'Jaime', quality: 45 },
  { id: 4,channel: 1,  resolution: 'Stark', mode: 'Arya', quality: 16 },
  { id: 5,channel: 1,  resolution: 'Targaryen', mode: 'Daenerys', quality: 1 },
  { id: 6,channel: 1,  resolution: 'Melisandre', mode: null, quality: 150 },
  { id: 7,channel: 1,  resolution: 'Clifford', mode: 'Ferrara', quality: 44 },
  { id: 8,channel: 1,  resolution: 'Frances', mode: 'Rossini', quality: 36 },
  { id: 9,channel: 1,  resolution: 'Roxie', mode: 'Harvey', quality: 65 },
];

const MUITable = ({ channelList }) => {

    const [ newRows, setNewRows ] = useState(channelList)

    useEffect(() => {
        let rows = channelList.map((item, index) => {
            item.id = index+1
            item.channel = index + 1
            return item
        })
        setNewRows(rows)
    }, [channelList])

    useEffect(() => {
        console.log(newRows)
    }, [newRows])


  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <DataGrid
        rows={newRows}
        columns={columns}
        pageSize={10}
        rowHeight={100}
        rowsPerPageOptions={[5, 10]}
      />
    </div>
  );
}

export default MUITable