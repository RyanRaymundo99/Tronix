import { ArrowBackOutlined } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import './watch.scss'

const Watch = () => {

  const location = useLocation();
  const movie = location.movie;

  return (
    <div className='watch'>
      <Link to="/">
        <div className='watch__back-button'>
            <ArrowBackOutlined />
            home
        </div>
      </Link>
        <video className='video' autoPlay progress={true} controls src={movie.video} />
    </div>
  )
}

export default Watch