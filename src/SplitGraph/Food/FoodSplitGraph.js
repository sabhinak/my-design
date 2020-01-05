import React from 'react';
import SplitGraph from '../SplitGraph';
import createConfig from '../splitGraphConfig';
import partiallyIcon2  from './partially.svg'
import noIcon2 from './No.svg';
import yesIcon2 from './yes.svg';
import idontknowIcon  from './Idontknow.svg';
import yesIcon1  from './yesfood.svg';
import noIcon1 from './nofood.svg';
import partiallyIcon1  from './partiallyfood.svg';
import categoryimg from './foodicon.svg';
import idkIcon from '../../images/idk.svg';

const title = (<div>
                <h1>Food</h1>
                    <h2>Did you and your family have enough food to eat last month?
                    </h2>
                </div>);

const FoodSplitGraph = ({yes, partially, no,  idontknow}) => {
    const configObj = createFoodSplitGraphConfig(yes, no, partially, idontknow);

    return <SplitGraph 
        title={configObj.title} 
        categoryImage={configObj.categoryImage}
        data={Array.from(configObj.getData())}
        bgColor = '#A87B8C'
        />
}

function createFoodSplitGraphConfig(yes, partially, no, idontknow)
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

export default FoodSplitGraph;