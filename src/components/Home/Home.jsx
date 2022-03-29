import { Navbar, Featured } from '../exporter'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured type='movie'/> 
    </div>
  )
}

export default Home