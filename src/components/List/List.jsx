import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import Listitem from './Listitem'
import './list.scss'
import { useRef, useState } from 'react'

export default function List({list}) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="list__title">{list.title}</span>
      <div className="list__wrapper">
        <ArrowBackIosOutlined
          className="list__sidearrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="list__wrapper-container" ref={listRef}>
          {list.content.map((item,i) => (
            <Listitem index={i} item={item}/>
          ))}
     
        </div>
        <ArrowForwardIosOutlined
          className="list__sidearrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}