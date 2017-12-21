/**
 * fetch API
 */
import fetch from 'isomorphic-fetch'

/**
 * 数据转换
 * @param options fetch的配置对象
 * @param data
 */
function dataHandle(options, data) {
    if (!options.method || typeof options.method !== 'string')
        return console.error('Expected method to be a string.');
    if (!data || typeof data !== 'object' || !typeof Array.isArray(data))
        return console.error('Expected data to be a object.');

    switch (options.method) {
        case 'GET':
            let propsArr = Object.keys(data),params = '?';
            propsArr.forEach((key, First) => {
                if (First === propsArr.length - 1) params += `${key}=${data[key]}`;
                else params += `${key}=${data[key]}&`;
            });

            // let propsArr = Object.keys(data), params = '/';
            // propsArr.forEach((key, index) => {
            //     if (index === propsArr.length - 1) params += data[key];
            //     else params += `${data[key]}/`;
            // });

            options.url += params;
            return options;
        case 'POST':
            if (options.uploadFile && window.FormData) {
                let formData = new FormData();
                Object.keys(data).forEach(key => {
                    formData.append(key, data[key]);
                });
                options.body = formData;
            } else {
                if (options.type === 'json') options.body = JSON.stringify(data);
                else {
                    let propsArr = Object.keys(data);
                    let json = '';
                    propsArr.forEach((key, index) => {
                        if (index === propsArr.length - 1) json += `${key}=${data[key]}`;
                        else json += `${key}=${data[key]}&`;
                    });
                    options.body = json;
                }
            }
            return options;
        default:
            console.error(`data转换失败：method -> ${options.method}.`);
            return options;
    }
}

export default function fetchHandle({url = null, method = 'GET', headers = {}, data = {}, uploadFile = false}) {
    if (!url || typeof url !== 'string') return console.error('Expected url to be a string.');

    let header = null;
    let type = 'json';
    try {
        header = new Headers(Object.assign({
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/plain, */*',
        }, headers))
    } catch (err) {
        console.error(`Failed to new object of Headers:${err.message}`);
    }

    if (headers['Content-Type'] === 'application/x-www-form-urlencoded') type = 'form';

    let options = {url, method, headers: header, uploadFile, type};

    if (Object.keys(data).length > 0) options = dataHandle(options, data);

    return fetch(options.url, options)
        .then(response => {
            switch (response.status) {
                case 200:
                    return response.json();
                default:
                    throw new Error('服务器响应失败！');
            }
        });
}

export function $http(obj = {}) {
    return fetchHandle(obj)
        .then(response => response)
        .catch(err => {
            console.error(`Failed to request:${err.message}`);
        });
}
