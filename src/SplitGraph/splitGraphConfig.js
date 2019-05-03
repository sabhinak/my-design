import svg from '../logo.svg';
import men from './Gender/Men.svg';
import Women from './Gender/Women.svg';

class Config {
    constructor(rawConfig)
    {
        this.config = rawConfig;
    }

    get categoryImage(){
        return this.config.categoryImage;
    }

    get title() {
        return this.config.title;
    }

    * getData()
    {
        if (
            !this.config.hasOwnProperty('data') ||this.config.data.length === 0
            )
            {
                return;
            }

        for(let key in this.config.data)
        {
            yield createDataConfig(key, this.config.data[key])
        }     
    }
}

class DataConfig
{
    constructor(key, value, icon1, icon2)
    {
        this._key = key;
        this._value = value;
        this._icon1 = icon1;
        this._icon2 = icon2
    }

    get key()
    {
        return this._key;
    }

    get value()
    {
        return this._value;
    }

    get icon1()
    {
        return this._icon1;
    }

    get icon2()
    {
        return this._icon2;
    }
}

function createDataConfig(key, dataConfigJson)
{
    if (
        !dataConfigJson.hasOwnProperty('value')
        || !dataConfigJson.hasOwnProperty('icon1')
        || !dataConfigJson.hasOwnProperty('icon2')
    ){
        throw new Error("Invalid json: " + JSON.stringify(dataConfigJson));
    }
    return new DataConfig(key, dataConfigJson.value, dataConfigJson.icon1, dataConfigJson.icon2);
}

let config = {
    title: 'Gender',
    categoryImage: men,
    data: {
        male: {value: 30, icon1: men, icon2: men},
        female: {value: 20, icon1: Women, icon2: Women},
        other: {value: 78, icon1: svg, icon2: svg},
    }
};
const testConfig = new Config(config);

export {testConfig};

export default (rawConfig) => {
    return new Config(rawConfig);
}



