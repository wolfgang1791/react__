import React from 'react';


const WheatherExtraInfo = ({humidity,winds}) =>(
    <div>
        <span>{`${humidity}% | `}</span>
        <span>{`${winds} winds`}</span>  {/* template string */}
    </div>
);

export default WheatherExtraInfo;