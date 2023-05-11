import axios from "axios";
const URL = "http://localhost:3001/api/";

export const listStorage = async() => {
    try{
        const { data:{storage}} = await axios.get(`${URL}read-storage`)
        console.log(storage);
        return users
    } catch (error){
        return console.error;
    }
}



