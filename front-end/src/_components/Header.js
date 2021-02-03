import React, { useState } from 'react';
import ToggleButton from './ToggleButton';

function BrandLogo () {
    return <a className="navbar-brand" href="#">
    <img src="Assets/images/logo.png" className="logo" />
  </a>
}

function Header (props) {
    const [appMode, setAppMode] = useState('Training Mode')

    const appModeOptions = [
        {
            title: 'Training Mode',
            defaultChecked: true
        },
        {
            title: 'Live Mode',
            defaultChecked: false
        }
    ];

    const onSelectAppMode = (option) => {
        setAppMode(option.title)
    }

    return <nav className="navbar header" >
    <div className="d-flex justify-content-between w-100">
      <div>
        <BrandLogo/>
        <ToggleButton options={appModeOptions} onChange={onSelectAppMode} activeOption={appMode}/>
      </div>
      <div className="m-auto">
        <button className="btn app-btn-default mr-2 btn-sm">Show all</button>
        <button className="btn app-btn-white mr-2 btn-sm">Crypto</button>
        <button className="btn app-btn-default mr-2 btn-sm">Commodities</button>
        <button className="btn app-btn-white mr-2 btn-sm">Stock</button>
        <button className="btn app-btn-default mr-2 btn-sm">Index</button>
        <button className="btn app-btn-default btn-sm">Currency</button>
      </div>
      <div className="mt-auto mb-auto">
        <div className="d-flex justify-content-end">
          <div className="mt-auto mb-auto">
            <i className="fas fa-search fa-lg app-icon-default mr-4"></i>
            <i className="fas fa-star fa-lg app-icon-default mr-4"></i>
            <i className="fas fa-graduation-cap fa-lg app-icon-default mr-4"></i>
          </div>
          <div className="profileimg rounded-circle">
            <img src="/Assets/images/avatar.png" />
            <span className="badge bg-primary notification">2</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default Header;