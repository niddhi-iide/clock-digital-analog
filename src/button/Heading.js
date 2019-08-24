import React from 'react';
import {node,string,number,} from 'prop-types';
const Heading = ({children,name,age}) =>{
    return(
        <h2
            style={{
                color: 'white',
                backgroundColor: 'palevioletred'
        }}
        >
        {children} <br/> {name} <br/> {age}       
        </h2>
    )
}
Heading.propTypes={
    children: node.isRequired,
    name: string,
    age: number,
}

Heading.defaultProps = {
    name: 'niddhi',
    age: 20,
}

export default Heading;