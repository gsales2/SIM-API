const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch('http://127.0.0.1:5500')
            return await response.json()
        } catch {
            alert('Erro ao buscar pensamentos')
            throw error
        }
    }
}

export default api;