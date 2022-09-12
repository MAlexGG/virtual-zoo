import axios from "axios";

export const animalsService = () => {

    const url = 'https://zoo-animal-api.herokuapp.com';
    
    const getList = async (num) => {
        const res = await axios.get(`${url}/animals/rand/${num}`);
        return res;
    };

    return {
        getList
    }

}