/* eslint-disable no-async-promise-executor */
/* eslint-disable no-unused-vars */
const axios = require('axios');

// const url = 'http://localhost:5000/api/list/';
const url = 'api/list/';


class FoodService {
    // Get items
    static getItemsList() {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await axios.get(url);
                const data = result.data;
                resolve(
                    data.map(item => ({
                        ...item,
                        createdAt: new Date(item.createdAt)
                    }))
                );
            } catch (err) {
                console.log(err)
                reject(err);
            }
        })
    }

    // Create items
    static insertItem(item) {
        return axios.post(url, item);
    }

    // get single item
    static getSingleItem(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await axios.get(`${url}${id}`);
                console.log("result:", result)
                const data = result.data;
                console.log("data:", data)
                // resolve(
                //     data.map(item => ({
                //         ...item,
                //         createdAt: new Date(item.createdAt)
                //     }))
                // );
            } catch (err) {
                console.log(err)
                reject(err);
            }
        })
    }

    // Delete items
    static deleteItem(id) {
        console.log("Item deleted")
        return axios.delete(`${url}${id}`);
    }
}

export default FoodService;