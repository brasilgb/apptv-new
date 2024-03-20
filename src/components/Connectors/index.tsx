import React from 'react'

interface ConnectorsProps {
    size?: string;
}

const Connectors = (props: ConnectorsProps) => {
    return (
        <div className="flex items-center justify-around">
            <div className={`${props.size ? props.size : 'h-1.5 w-4'} `}/>
            <div className={`${props.size ? props.size : 'h-1.5 w-4'} `}/>
            <div className={`${props.size ? props.size : 'h-1.5 w-4'} `}/>
        </div>
    )
}

export default Connectors