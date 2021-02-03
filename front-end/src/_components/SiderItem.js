import React, { memo } from 'react'

import ErrorBoundary from "./ErrorBoundary";

function SiderItem(props) {
  return <li className="slider-item">
    <div className="item-header">
      <div className="d-flex">
        <img className="mr-3" src={"/Assets/icons/" + props.icon + ".svg"} />
        <div className="d-flex justify-content-between w-100">
          <span className="text-align-left">{props.title}</span>
          <i data-toggle="collapse" data-target={'#' + props.id} aria-expanded="true" aria-controls="collapseOne" className="fas fa-angle-right mt-auto mb-auto" />
        </div>
      </div>
    </div>

    <div id={props.id} className="collapse show" data-parent="#sidebar">
      <ErrorBoundary>
        {props.children}
      </ErrorBoundary>
      {!props.last &&
        <hr />
      }
    </div>
  </li>
}

export default SiderItem;