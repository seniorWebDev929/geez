import axios from 'axios'
import jwtDecode from 'jwt-decode'

// instantiate axios
const httpClient = axios.create()

httpClient.getToken = function() {
	return localStorage.getItem('token')
}

httpClient.setToken = function(token) {
	localStorage.setItem('token', token)
	return token
}

httpClient.getCurrentUser = function() {
	const token = this.getToken()
	if(token) return jwtDecode(token)
	return null
}

httpClient.logIn = function(credentials) {
	return this({ method: 'post', url: '/api/users/authenticate', data: credentials })
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

// logIn and signUp functions could be combined into one since the only difference is the url we're sending a request to..
httpClient.signUp = function(userInfo) {
	return this({ method: 'post', url: '/api/users', data: userInfo})
		.then((serverResponse) => {
			const token = serverResponse.data.token;
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

httpClient.logOut = function() {
	localStorage.removeItem('token')
	delete this.defaults.headers.common.token
	return true
}

httpClient.get3products = function() {
	return this({ method: 'get', url: '/api/products/get3products'})
		.then((serverResponse) => {
			return serverResponse.data;
		})
}

httpClient.addProducts = function(product_info) {
	return this({method: 'post', url: '/api/products/addProducts', data: product_info })
		.then((serverResponse) => {
			return true;
		})
}

httpClient.getAllProducts = function() {
	return this({method: 'get', url: '/api/products/getAllProducts'})
		.then((serverResponse) => {
			return serverResponse.data
		})
}

httpClient.getNearestProduct = function() {
	return this({method: 'get', url: '/api/products/getNearestProduct'})
		.then(serverResponse => {
			return serverResponse.data;
		})
}

httpClient.getNewReleasedProducts = function() {
	return this({method: 'get', url: '/api/products/getNewReleasedProducts'})
		.then(serverResponse => {
			return serverResponse.data;
		})
}

httpClient.getNotReleasedProducts = function() {
	return this({method: 'get', url: '/api/products/getNotReleasedProducts'})
		.then(serverResponse => {
			return serverResponse.data;
		})
}
// During initial app load attempt to set a localStorage stored token
// as a default header for all api requests.
httpClient.defaults.headers.common.token = httpClient.getToken()
export default httpClient