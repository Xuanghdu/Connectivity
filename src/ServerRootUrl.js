export const serverRootUrl = 'http://localhost:3000';

function getHTML(url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE)
                return;
            const status = xhr.status;
            if (status === 0 || status >= 200 && status < 400) {
                resolve(xhr.responseText);
            } else {
                reject(status);
            }
        };
        xhr.send();
    });
}

export async function httpGetJSON(url) {
    let result;
    try {
        const remoteText = await getHTML(url);
        result = JSON.parse(remoteText);
    } catch (error) {
        return [false, undefined];
    }
    return [true, result];
}

export function httpGetAndHandleJSON(url, handler, errorMessage) {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
            const status = request.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                let response;
                try {
                    response = JSON.parse(request.responseText);
                } catch {
                    alert(errorMessage);
                    return;
                }
                handler(response);
            } else {
                alert(errorMessage);
            }
        }
    };
    try {
        request.send();
    } catch {
        alert(errorMessage);
    }
}
