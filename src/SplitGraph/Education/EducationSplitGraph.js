import React from 'react';
import SplitGraph from '../SplitGraph';
import createConfig from '../splitGraphConfig';
import partiallyIcon from './some.svg'
import noIcon from './none.svg';
import yesIcon from './yes.svg';
import idontknowIcon from './baby.svg';
import categoryimg from './education.svg';
import house from './house.svg';

const Title = () => {
    return <div>
        <h1>Education</h1>
            <h2> Do all your children go to school? </h2>
    </div>;
}

const EducationSplitGraph = ({yes, partially, no, idontknow}) => {
    const configObj = createEducationSplitGraphConfig(yes, no, partially, idontknow);

    return <SplitGraph 
        title={configObj.title} 
        categoryImage={configObj.categoryImage}
        data={Array.from(configObj.getData())}
        bgColor = '#E8898B '
        />
}

function createEducationSplitGraphConfig(yes, partially, no, idontknow)
{
    let rawConfig = {
        title: Title(),
        categoryImage: categoryimg,
        data: {
            yes: {value: yes, icon1: house, icon2: yesIcon},
            partially: {value: partially, icon1: house, icon2: partiallyIcon},
            no: {value: no, icon1: house, icon2: noIcon},
            idontknow: {value: idontknow, icon1: house, icon2: idontknowIcon},
        }
    };

    return createConfig(rawConfig);
}

export default EducationSplitGraph;