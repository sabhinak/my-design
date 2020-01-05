import React from 'react';
import SplitGraph from '../SplitGraph';
import createConfig from '../splitGraphConfig';
import partiallyIcon2  from './img/partially.svg'
import noIcon2 from './img/No.svg';
import yesIcon2 from './img/yes.svg';
import idontknowIcon from './img/Idontknow.svg';
import yesIcon1 from './img/yeswater.svg';
import noIcon1 from './img/nowater.svg';
import partiallyIcon1 from './img/partiallywater.svg';
import categoryimg from './img/watericon.svg';
import idkIcon from '../../images/idk.svg';

const title = (<div>
                    <h1>Water</h1>
                        <h2>Did you and your family have access to clean drinking water everyday last month?
                        </h2>
            </div>);

const WaterSplitGraph = ({yes, partially, no,  idontknow}) => {
    const configObj = createWaterSplitGraphConfig(yes, no, partially, idontknow);

    return <SplitGraph 
        title={configObj.title} 
        categoryImage={configObj.categoryImage}
        data={Array.from(configObj.getData())}
        bgColor='#60576B'
        />
}

function createWaterSplitGraphConfig(yes, partially, no,  idontknow)
{
    let rawConfig = {
        title: title,
        categoryImage: categoryimg,
        data: {
            yes: {value: yes, icon1: yesIcon1, icon2: yesIcon2},
            partially: {value: partially, icon1: partiallyIcon1, icon2: partiallyIcon2},
            no: {value: no, icon1: noIcon1, icon2: noIcon2},
            idontknow: {value: idontknow, icon1: idkIcon, icon2: idontknowIcon},
        }
    };

    return createConfig(rawConfig);
}

export default WaterSplitGraph;