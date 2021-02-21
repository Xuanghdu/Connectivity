export const serverRootUrl = 'http://localhost:3000';

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
