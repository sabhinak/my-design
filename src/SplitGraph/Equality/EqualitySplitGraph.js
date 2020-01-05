import React from 'react';
import SplitGraph from '../SplitGraph';
import createConfig from '../splitGraphConfig';
import partiallyIcon2 from '../../images/partially.svg'
import noIcon2 from '../../images/No.svg';
import yesIcon2 from '../../images/yes.svg';
import  idontknowIcon from '../../images/Idontknow.svg';
import yesIcon1  from './yesequality.svg';
import noIcon1  from './noequality.svg';
import partiallyIcon1 from './partiallyequality.svg'
import categoryimg from './equalitylogo.svg';
import idkIcon from '../../images/idk.svg';

const title = (<div>
                <h1>Gender Equality</h1>
                    <h2>Are men and women treated equally in your workplace?
                    </h2>
                </div>);


const EqualitySplitGraph = ({yes, partially, no,  idontknow}) => {
    const configObj = createEqualitySplitGraphConfig(yes, no, partially, idontknow);

    return <SplitGraph 
        title={configObj.title} 
        categoryImage={configObj.categoryImage}
        data={Array.from(configObj.getData())}
       bgColor="#DBC8D9"
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
            idontknow: {value: idontknow, icon1: idkIcon, icon2: idontknowIcon},
        }
    };

    return createConfig(rawConfig);
}

export default EqualitySplitGraph;



