import React from 'react';
import SplitGraph from '../SplitGraph';
import createConfig from '../splitGraphConfig';
import partiallyIcon2 from './partially.svg'
import noIcon2 from './No.svg';
import yesIcon2 from './yes.svg';
import idontknowIcon from './Idontknow.svg';
import categoryimg from './health.svg';

const title = (<div>
                <h1>Health</h1>
                    <h2>When necessary, can you access health care for you and your family?
                    </h2>
                </div>);

const HealthSplitGraph = ({yes, partially, no,  idontknow}) => {
    const configObj = createHealthSplitGraphConfig(yes, no, partially, idontknow);

    return <SplitGraph 
        title={configObj.title} 
        categoryImage={configObj.categoryImage}
        data={Array.from(configObj.getData())}
        bgColor='#B87888' 
        />
}

function createHealthSplitGraphConfig(yes, partially, no,  idontknow)
{
    let rawConfig = {
        title: title,
        categoryImage: categoryimg,
        data: {
            yes: {value: yes, icon2: yesIcon2},
            partially: {value: partially, icon2: partiallyIcon2},
            no: {value: no, icon2: noIcon2},
            idontknow: {value: idontknow, icon2: idontknowIcon},
        }
    };

    return createConfig(rawConfig);
}

export default HealthSplitGraph;