import React from 'react';

function Definitions(props) {
    return (
        <dl>{
            props.data.map(item => {
                return (
                    <React.Fragment key={item.id}>
                        <dt>{item.dt}</dt>
                        <dd>{item.dd}</dd>
                    </React.Fragment>
                )
            })
        }</dl>
    )
}

export default Definitions;