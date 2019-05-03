import React from 'react';
import SplitGraph from '../SplitGraph';
import createConfig from '../splitGraphConfig';
import partially2 from '../../images/partially.svg'
import noicon2 from '../../images/No.svg';
import yesicon2 from '../../images/yes.svg';
import idontknow from '../../images/Idontknow.svg';
import yesicon1 from './yesequality.svg';
import noicon1 from './noequality.svg';
import partially1 from './partiallyequality.svg'
import categoryimg from './equalitylogo.svg';

const title = (<div>
                <h1>Gender Equality</h1>
                    <p>Are men and women treated equally in you workplace?
                    </p>
                </div>);

const yesIcon2 = yesicon2;
const yesIcon1 = yesicon1;
const noIcon1 = noicon1;
const noIcon2 = noicon2;
const partiallyIcon1 = partially1;
const partiallyIcon2 = partially2;
const idontknowIcon = idontknow;

const EqualitySplitGraph = ({yes, partially, no,  idontknow}) => {
    const configObj = createEqualitySplitGraphConfig(yes, no, partially, idontknow);

    return <SplitGraph 
        title={configObj.title} 
        categoryImage={configObj.categoryImage}
        data={Array.from(configObj.getData())}
       bgColor="#D091FF"
        />
}

function createEqualitySplitGraphConfig(yes, partially, no,  idontknow)
{
    let rawConfig = {
        title: title,
        categoryImage: categoryimg,
        data: {
            yes: {value: yes, icon1: yesIcon1, icon2: yesIcon2},
            partially: {value: partially, icon1: partiallyIcon1, icon2: partiallyIcon2},
            no: {value: no, icon1: noIcon1, icon2: noIcon2},
            idontknow: {value: idontknow, icon1: idontknowIcon, icon2: idontknowIcon},
        }
    };

    return createConfig(rawConfig);
}

export default EqualitySplitGraph;



