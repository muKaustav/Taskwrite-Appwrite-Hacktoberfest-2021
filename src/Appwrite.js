import { Appwrite } from 'appwrite'

const sdk = new Appwrite()
sdk
	.setEndpoint('http://localhost/v1') // set your own endpoint
	.setProject('6159672613705') // set your own project id

let user = ''

export const api = {
  loginWithGoogle: async () => {
    try {
      sdk.account.createOAuth2Session(
				'google',
				'http://localhost:3000/',
				'http://localhost:3000/login',
				['profile']
			)
      localStorage.setItem('auth_state', 1)
    } catch (error) {
      console.log(error)
    }
  },

  logout: async () => {
    try {
      sdk.account.deleteSession('current')
      localStorage.removeItem('auth_state')
      window.location.href = '/login'
    } catch (error) {
      console.log(error)
    }
  },

  getUser: async () => {
    let data = await sdk.account.get()
    user = data
    return data
  },

  createDoc: async obj => {
    sdk.database.createDocument(
			'61693aacc0022',
			obj,
			[`user:${user['$id']}`],
			[`user:${user['$id']}`]
		)
  },

  listDocs: async () => {
    let data = await sdk.database.listDocuments('61693aacc0022')
    return data
  },

  updateDoc: async (id, obj) => {
    sdk.database.updateDocument('61693aacc0022', id, obj)
  },

  deleteDoc: async id => {
    sdk.database.deleteDocument('61693aacc0022', id)
  }
}
