import React, { memo } from 'react'

function ListItem(props) {
    const {title, option, openTime, outcomeTime, commitmentFund} = props
    return <div className="d-flex grid-row justify-content-between mb-4">
    <div className="d-flex mb-auto">
        <img src="/Assets/icons/star.svg" />
    </div>
    <div className="title">
        <div className="d-flex content content-f-20">{title}</div>
        <div className="d-flex content-header content-f-12 pt-2">{option}</div>
    </div>
    <div className="">
        <div className="d-flex">
            <img src="/Assets/icons/3.svg" className="mr-3" />
            <span className="content content-f-12">2,2x</span>
        </div>
        <div className="d-flex content-header content-f-12 pt-2">{(openTime ? 'Open' : 'Outcome') + ' in ' + (openTime ? openTime : outcomeTime)}</div>
    </div>
    <div className="d-flex">
        <img src="/Assets/icons/positive_balance.svg" />
    </div>
    <div className="d-flex">
        <img src="/Assets/icons/1.svg" />
    </div>
    <div>
        <div className="d-flex justify-content-end content content-f-20">{commitmentFund}</div>
        <div className="d-flex content-header content-f-12 pt-2">Totla commitments funds</div>
    </div>
</div>
}

export default memo(ListItem);