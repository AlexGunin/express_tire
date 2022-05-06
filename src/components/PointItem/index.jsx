import React from 'react';
import './point.scss'

const setClass = (isActive) => {
  return isActive ? "point-item point-item_active" : "point-item"
}
const PointItem = ({address, budgets, isActive, index}) => {
  return (
    <div className={setClass(isActive)} data-index={index}>
      <p className="point-item__address">{address}</p>
      <div className="point-item__budget-wrap">
        {budgets.map((budget, index) => <span key={budget + index} className="point-item__budget">{budget}</span>)}
      </div>
    </div>
  );
};

export default PointItem;