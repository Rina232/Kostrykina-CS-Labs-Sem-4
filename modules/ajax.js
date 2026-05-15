class Ajax {
    async get(url, callback) {
        try {
            const response = await fetch(url)

            const data = await response.json()

            callback(data, response.status)
        } catch (e) {
            console.error(e)
            callback(null, 500)
        }
    }

    async post(url, data, callback) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const result = await response.json()

            callback(result, response.status)
        } catch (e) {
            console.error(e)
            callback(null, 500)
        }
    }

    async patch(url, data, callback) {
        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const result = await response.json()

            callback(result, response.status)
        } catch (e) {
            console.error(e)
            callback(null, 500)
        }
    }

    async delete(url, callback) {
        try {
            const response = await fetch(url, {
                method: 'DELETE'
            })

            const data = await response.json()

            callback(data, response.status)
        } catch (e) {
            console.error(e)
            callback(null, 500)
        }
    }
}

export const ajax = new Ajax()