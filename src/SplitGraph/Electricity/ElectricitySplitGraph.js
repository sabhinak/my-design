import React from 'react';
import SplitGraph from '../SplitGraph';
import createConfig from '../splitGraphConfig';
import partiallyicon2 from '../../images/partially.svg'
import noicon2 from '../../images/No.svg';
import yesicon2 from '../../images/yes.svg';
import idontknow from '../../images/Idontknow.svg';
import electricity from './electricity.svg';
import yesicon1 from './yesbulb.svg';
import noicon1 from './candle.svg';
import partiallyicon1 from './partiallybulbcandle.svg';

const title = (<div>
    <h1>Electricity</h1>
        <p>On a normal day last month, did you have electricity in your household?
        </p>
</div>);
const categoryImage = electricity;
const yesIcon2 = yesicon2;
const noIcon2 = noicon2;
const partiallyIcon2 = partiallyicon2;
const yesIcon1= yesicon1;
const noIcon1 = noicon1;
const partiallyIcon1 = partiallyicon1;
const idontknowIcon = idontknow;

const ElectricitySplitGraph = ({yes, no, partially, idontknow}) => {
    const configObj = createElectricitySplitGraphConfig(yes, partially, no, idontknow);

    return <SplitGraph 
        title={configObj.title} 
        categoryImage={configObj.categoryImage} 
        data={Array.from(configObj.getData())}
        bgColor='#B2E4F8'
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
            idontknow: {value: idontknow, icon1: idontknowIcon, icon2: idontknowIcon},
        }
    };

    return createConfig(rawConfig);
}

export default ElectricitySplitGraph;