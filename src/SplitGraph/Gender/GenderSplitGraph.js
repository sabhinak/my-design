import React from 'react';
import SplitGraph from '../SplitGraph';
import createConfig from '../splitGraphConfig';
import categoryimg from './gender.svg';
import menIcon from './Men.svg';
import womenIcon from './Women.svg';
import otherIcon from './others.svg';



const title = (<div>
                    <h1>Gender</h1>
            </div>);

const GenderSplitGraph = ({men, women, others}) => {
    const configObj = createGenderSplitGraphConfig(men, women, others);

    return <SplitGraph 
        title={configObj.title} 
        categoryImage={configObj.categoryImage}
        data={Array.from(configObj.getData())}
        bgColor='#506E82'
        />
}

function createGenderSplitGraphConfig(men, women, others)
{
    let rawConfig = {
        title: title,
        categoryImage: categoryimg,
        data: {
            men: {value: men, icon2: menIcon},
            women: {value: women, icon2: womenIcon},
            others: {value: others, icon2: otherIcon}
        }
    };

    return createConfig(rawConfig);
}

export default GenderSplitGraph;