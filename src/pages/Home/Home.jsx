import axios from 'axios';
import { useEffect, useState } from 'react'
import { Navbar, Featured, List } from '../../components/exporter'
import './home.scss'

const Home = ({ type }) => {
  const [lists, setlists] = useState([]);
  const [genre, setGenre] = useState(null)

  useEffect(() =>{
    const getRandomLists = async () => {
      try{
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}&${genre ? "genre=" + genre : ""}`,
          );
          console.log(res)
          // setLists(res.data);
      }catch(err){
        console.log(err)
      }
    };
    getRandomLists();
  }, [type, genre])
  return (
    <div className='home'>
      <Navbar />
      <Featured type={type}/>
      {lists.map((list) => (
        <List list={list}/>
      ))}
    </div>
  )
}

export default Home