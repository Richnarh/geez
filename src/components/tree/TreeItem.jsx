import React from 'react';
import './Tree.scss';

const TreeItem = ({item}) => {
  return (
    <div>
       <li><span className="tree-item">{item.label}</span></li>
    </div>
  )
}

export default TreeItem
