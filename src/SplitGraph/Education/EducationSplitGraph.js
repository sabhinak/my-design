import React from 'react';
import SplitGraph from '../SplitGraph';
import createConfig from '../splitGraphConfig';
import some from './some.svg'
import none from './none.svg';
import yes from '../../images/yes.svg';
import baby from './baby.svg';
import categoryimg from './education.svg';



const title = (<div>
                 <h1>Education</h1>
                     <p>Do all of the children go to school? 
                     </p>
                     <button onclick='' >Open</button>
                </div>);


const yesIcon = yes;
const noIcon = none;
const partiallyIcon = some;
const idontknowIcon = baby;

const EducationSplitGraph = ({yes, partially, no, idontknow}) => {
    const configObj = createEducationSplitGraphConfig(yes, no, partially, idontknow);

    return <SplitGraph 
        title={configObj.title} 
        categoryImage={configObj.categoryImage}
        data={Array.from(configObj.getData())}
        bgColor = '#F8A8A8'
        />
}

function createEducationSplitGraphConfig(yes, partially, no, idontknow)
{
    let rawConfig = {
        title: title,
        categoryImage: categoryimg,
        data: {
            yes: {value: yes, icon1: yesIcon, icon2: yesIcon},
            partially: {value: partially, icon1: partiallyIcon, icon2: partiallyIcon},
            no: {value: no, icon1: noIcon, icon2: noIcon},
            idontknow: {value: idontknow, icon1: idontknowIcon, icon2: idontknowIcon},
        }
    };

    return createConfig(rawConfig);
}

export default EducationSplitGraph;