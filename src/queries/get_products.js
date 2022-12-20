export async function GetProducts() {
    const endpoint = "https://sweet-apple-acres.netlify.app/.netlify/functions/api/products"
    const results = await fetch(endpoint).then(response => {
        return response.json();
    })
    .then((result) => {
        return result;
    })
    return results;
}