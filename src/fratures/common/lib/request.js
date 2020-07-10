const baseUrl = 'http://localhost:3000/'

export const request = async (method, url, options = {}) => {
	const headers = new Headers({
		...createContentType(options),
		...options,
	})
	const uri = `${baseUrl}${url}`
	const config = new Request(uri, {
		method,
		headers,
		body: createBody(options, headers),
	})
	logRequest(config)
	const response = await fetch(config)

	if (options.parse === 'text') {
		return await response.text()
	}
	if (options.parse === 'noparse') {
		return await response
	}
	const contentType = response.headers.get('Content-Type')
	if (contentType && contentType.includes('json')) {
		return await response.json()
	}
	throw new Error('Unexpected content-type')
}

const logRequest = requestConfig => {
	console.groupCollapsed(`API >> ${requestConfig.method} ${requestConfig.url}`)
	console.log('request:', requestConfig)
	console.groupEnd()
}

const createBody = (options, headers) => {
	const contentType = headers.get('content-type')
	if (options.body && contentType && contentType.incudes('json')) {
		return JSON.stringify(options.body)
	}
	if (options.body instanceof FormData) {
		return options.body
	}
	return undefined
}

const createContentType = options => {
	const header = contentTypeFromOptions(options)
	return header ? { 'Content-Type': header } : {}
}

const contentTypeFromOptions = options => {
	if (options && options.headers && options.headers['Content-Type'])
		return options.headers['Content-Type']

	if (options && options.body && options.body instanceof FormData)
		return 'multipart/form-data'

	return typeof options.body === 'object'
		? 'application/json'
		: (options.headers && options.headers['Content-Type']) || ''
}
