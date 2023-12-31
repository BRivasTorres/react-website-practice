import fetch from "node-fetch";
export const getData = async (url) => {
    try {
        const res = await fetch(url);
        let data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error)        
    }
};
