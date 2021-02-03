import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import AppBar from "../../_components/AppBar";
import DataList from "./DataList";
import ErrorBoundary from "../../_components/ErrorBoundary";

function Dashbord(props) {
    return <div className="container p-4">
        <AppBar />
        <ErrorBoundary>
            <DataList data={props.data}/>
        </ErrorBoundary>
    </div>
}
export default memo(Dashbord);