import './App.scss';
import {useEffect, useRef, useState} from "react";
import data from './state.json'
import PointItem from "./components/PointItem";
import PointMap from "./components/PointMap";

function App() {
  const [points, setPoints] = useState(data.pickPoints ?? [])
  const [activeIndex, setActiveIndex] = useState(0)
  const pointsRef = useRef({})

  const handleClick = (event) => {
    const parent = event.target.closest('[data-index]')
    setActiveIndex(+parent.dataset.index)
  }

  useEffect(() => {
    if (pointsRef.current) {
      pointsRef.current.addEventListener('click', handleClick)
    }
    return () => {
      pointsRef.current.removeEventListener('click', handleClick)
    }
  }, [pointsRef])

  return (
    <div className="app">
      <div className="container">
        <div className="points" ref={pointsRef}>
          {points.map((item, index) => <PointItem key={item.address} {...item} index={index}
                                                  isActive={activeIndex === index}>{index}</PointItem>)}
        </div>
        <PointMap latitude={points[activeIndex].latitude} longitude={points[activeIndex].longitude}/>
      </div>
    </div>
  );
}

export default App;
