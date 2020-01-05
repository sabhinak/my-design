import React from 'react';
import SplitGraph from '../SplitGraph';
import createConfig from '../splitGraphConfig';
import partiallyIcon2 from './partially.svg'
import noIcon2 from './No.svg';
import yesIcon2 from './yes.svg';
import idontknowIcon  from './Idontknow.svg';
import categoryImage from './electricity.svg';
import yesIcon1 from './yesbulb.svg';
import noIcon1 from './candle.svg';
import partiallyIcon1 from './partiallybulbcandle.svg';
import idkIcon  from '../../images/idk.svg';


const title = (<div>
    <h1>Electricity</h1>
        <h2>On a normal day last month, did you have electricity in your household?
        </h2>
</div>);


const ElectricitySplitGraph = ({yes, no, partially, idontknow}) => {
    const configObj = createElectricitySplitGraphConfig(yes, partially, no, idontknow);

    return <SplitGraph 
        title={configObj.title} 
        categoryImage={configObj.categoryImage} 
        data={Array.from(configObj.getData())}
        bgColor='#BF5E6E'
        />
}

function createElectricitySplitGraphConfig(yes, partially, no, idontknow)
{
    let rawConfig = {
        title: title,
        categoryImage: categoryImage,
        data: {
            yes: {value: yes, icon1: yesIcon1, icon2: yesIcon2},
            partially: {value: partially, icon1: partiallyIcon1, icon2:partiallyIcon2},
            no: {value: no, icon1: noIcon1, icon2: noIcon2},
            idontknow: {value: idontknow, icon1: idkIcon, icon2: idontknowIcon},
        }
    };

    return createConfig(rawConfig);
}

export default ElectricitySplitGraph;