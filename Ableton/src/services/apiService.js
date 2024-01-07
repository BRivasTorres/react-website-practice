export const getData = async (url) => {
    try {
        const res = await fetch(url);
        let data = await res.json();
        return data
    } catch (error) {
        console.log(error)        
    }
};
