import React from 'react'
import ListItem from './ListItem'

function DataList (props) {
    const {data} = props;
    return (<div className="grid pt-4">
        {data.map(item => {
            return <ListItem {...item}  />
        })}
        </div>
        );
}

export default DataList


