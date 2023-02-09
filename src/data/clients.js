export async function getClients() {
    return await fetch(import.meta.env.VITE_API_URL)
        .then((response) => response.json());
}

export async function getClient(id) {
    return await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
        .then((response) => response.json());
}

export async function setClient(data) {
    try {
        const res = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        await res.json;
    } catch (error) {
        console.log(error);
    }
}

export async function updateClient(id, data) {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        await res.json;
    } catch (error) {
        console.log(error);
    }

}

export async function destroy(id) {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE'
        })
        await res.json;
    } catch (error) {
        console.log(error);
    }


}