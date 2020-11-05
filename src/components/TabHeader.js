import React from 'react';

const TabHeader = (props) => {
    const selectedStyle = {
        backgroundColor: "seagreen",
        display: "inline-block",
        width: "200px"
    }

    const notSelectedStyle = {
        backgroundColor: "lightgrey",
        display: "inline-block",
        width: "200px"
    }

    return(
        <div style={props.selected ? selectedStyle : notSelectedStyle} onClick={() => props.handleClick(props.index)}>
            Tab # {props.index}: {props.title}
        </div>
    );
}

export default TabHeader;