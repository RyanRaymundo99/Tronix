import { Navbar, Featured, List } from '../../components/exporter'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
      <List /> 
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home