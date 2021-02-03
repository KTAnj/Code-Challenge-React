import React, { Fragment, memo} from 'react'
import { useSelector } from 'react-redux'
import SiderItem from './SiderItem';

function TradesPrgress() {
    const {openTrendData} = useSelector(state => state.trades)
    return (<div className="row pt-4">
        <div className="col-6">
            <div className="content-header">Trades in progress</div>
            <div className="d-flex content content-f-18 mt-2">{openTrendData.in_progress_count}</div>
        </div>
        <div className="col-6">
            <div className="content-header">Closest outcome</div>
            <div className="d-flex content content-f-20 mt-2">{openTrendData.closest_outcome}</div>
            <div className="d-flex content content-f-12 mt-2">ETH 48 hours</div>
        </div>
    </div>)
}

function TrainingHistory(props) {
    return (
        <Fragment>
            <div className="row pt-4">
                <div className="d-flex justify-content-between">
                    <a className="btn btn-sm content-header mt-auto mb-auto">Last</a>
                    <a className="btn btn-sm content-link content-f-12">day</a>
                    <a className="btn btn-sm content-link content-f-12 active">week</a>
                    <a className="btn btn-sm content-link content-f-12">month</a>
                    <a className="btn btn-sm content-link content-f-12">all</a>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-6">
                    <div className="content-header">Total trades</div>
                    <div className="d-flex content content-f-18 mt-2">245</div>
                </div>
                <div className="col-6">
                    <div className="content-header">Profit</div>
                    <div className="d-flex content content-f-18 mt-2">+21.5%</div>
                </div>
            </div>
            <div className="row pt-4">
                <img src="/Assets/images/Balance.svg" />
            </div>
        </Fragment>
    );
}

function TradingWallet() {
    const {tradingWalletData} = useSelector(state => state.trades)
    return (
        <div className="pt-4">
            <div id="training-wallet-1">
                <div className="d-flex flex-start">
                    <div className="content-header">Trading</div>
                </div>
                <div className="d-flex justify-content-between pt-1">
                    <div className="content content-f-18">{tradingWalletData.trading}</div>
                    <button className="btn btn-sm app-btn-green-outline">TOP UP</button>
                </div>
            </div>
            <div id="training-wallet-2" className="pt-3">
                <div className="d-flex flex-start">
                    <div className="content-header">Holding</div>
                </div>
                <div className="d-flex justify-content-between pt-1">
                    <div className="content content-f-18">{tradingWalletData.holding}</div>
                    <button className="btn btn-sm app-btn-green">BUY DAI</button>
                </div>
            </div>
        </div>
    );
}

function SideBar(props) {
    return <div className="left-sider pl-4 pr-4">
        <ul className="accordion" id="sidebar">
            <SiderItem key="open_trades" title="OPEN TRADES" id="open_trades" icon="open_trades">
                <TradesPrgress/>
            </SiderItem>
            <SiderItem key="trading_history" title="TRADING HISTORY" id="trading_history" icon="prediction">
                <TrainingHistory/>
            </SiderItem>
            <SiderItem key="trading_wallet" title="TRAINING WALLET" id="trading_wallet" last={true} icon="wallet">
                <TradingWallet/>
            </SiderItem>
        </ul>
    </div>
}

export default memo(SideBar);