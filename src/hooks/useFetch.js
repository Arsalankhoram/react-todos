export default async function useFetch(url, method, data = null, contentType = 'application/json') {
    console.log(url, method, data, contentType);
    console.log(typeof (data));
    let result;
    switch (method) {
        case "GET":
            result = await fetch(url, {
                method: method,
                headers: { 'content-type': contentType },
            })
            result = await result.json()
            return result
            break;
        case "POST":
            result = fetch(url, {
                method: method,
                headers: { 'content-type': contentType },
                body: JSON.stringify(data)
            })
            result = (await result).json()
            return result
            break;
        case "PUT":
            result = fetch(url, {
                method: method,
                headers: { 'content-type': contentType },
                body: JSON.stringify(data)
            })
            result = (await result).json()
            return result
            break
        case "DELETE":
            result = fetch(url, {
                method: method,
            })
            break
    }
}