import axios from 'axios';

export const commonrequest = async (method, url, body, header) => {
    let config = {
        method: method,
        url: url,
        headers: header ? header : {
            "Content-Type": "application/json"
        },
        data: body
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
