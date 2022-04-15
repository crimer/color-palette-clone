class ApiRepository {
	constructor() {
		this.url = "http://localhost:80"
	}

	/** Создание заказа */
    public async confirmOrderAsync(): Promise<Data | undefined> {
        const response = await fetch(`${this.url}/api/`, {
            method: 'GET',
        })

        const data = await response.json()
        return data as Data
    }
}

export const apiRepository = new ApiRepository()
