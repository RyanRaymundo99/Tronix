import { ArrowBackOutlined } from '@mui/icons-material'
import './watch.scss'

const Watch = () => {
  return (
    <div className='watch'>
        <div className='back'>
            <ArrowBackOutlined />
            home
        </div>
        <video className='video' autoPlay progress={true} controls src='https://cdn.videvo.net/videvo_files/video/free/2019-01/large_watermarked/181015_13_Venice%20Beach%20Drone_25_preview.mp4' />
    </div>
  )
}

export default Watch