import React ,{ useState, useEffect} from 'react';
import Header from './_components/Header'
import SideBar from './_components/SideBar'
import AppBar from './_components/AppBar';
import Dashbord from './components/dashbord/Dashbord';
import { ToastContainer  } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux'
import {tradesActions} from './_actions/trades.action'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(tradesActions.getData())
  }, []);
  const {tradingData} = useSelector(state => state.trades)
  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column w-100">
        <div id="content" className="w-100 app-dashboard">
          <Header />
          <div className="d-flex">
            <SideBar/>
            <div className="w-100 page">
                <Dashbord data={tradingData}/>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default App;
