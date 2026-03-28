import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || '/api'
const STORAGE_BASE = import.meta.env.VITE_STORAGE_URL || '/storage'

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
})

export function storageUrl(path) {
  if (!path) return null
  if (path.startsWith('http')) return path
  return `${STORAGE_BASE}/${path}`
}

// Public Posts
export const postAPI = {
  list: () => api.get('/public/posts'),
  getBySlug: (slug) => api.get(`/public/posts/${slug}`),
}

// Public Contact
export const contactAPI = {
  send: (data) => api.post('/public/contacts', data),
}

export default api
