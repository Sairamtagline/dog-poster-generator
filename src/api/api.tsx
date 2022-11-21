import axios from 'axios';

const api = (endpoint: string, method: string, body: any) =>
    new Promise((resolve, reject) => {
        let url = '';
        url += process.env.REACT_APP_BASE_URL + endpoint;
        // let setHeaders: any = { 'Content-Type': 'application/json' };
        // if (header) {
        //     setHeaders = { authorization: `bearer ${header}` };
        // }

        axios({
            method,
            url,
            data: body,
        })
            .then((res) => {
                const {
                    status,
                    message,
                } = res.data;
                resolve({
                    status,
                    data: message,
                });
            })
            .catch((err) => {

                // const errorMsg =
                //     (err.response && err.response.data && err.response.data.message) ||
                //     '';
                // const resData =
                //     (err.response && err.response.data && err.response.data.data) || {};
                // const data = resData || [];
                // const msg = errorMsg || 'Something went wrong. Please try again.';
                // const status = false;
                // resolve({ data, msg, status });
            });
    });

export default api;
