import React from 'react'

interface TitleProps {
    title: string;
    fsize?: string;
}

const TitleSection = (props: TitleProps) => {
    return (
        <div className="bg-white shadow-lg rounded-t-md p-1">
            <h1 className={`${props.fsize ? props.fsize : 'text-sm'} text-center  drop-shadow-lg font-bold text-gray-500 uppercase`}>{props.title}</h1>
        </div>
    )
}

export default TitleSection