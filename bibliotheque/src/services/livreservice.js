import axios from '../api/api'

const LIVRE_API = 'livres'

export const fetchlivres = async () => {
  return await axios.get(LIVRE_API)
}

export const fetchLivreById = async id => {
  return await axios.get(LIVRE_API + '/' + id)
}

export const deleteLivre = async (id) => {
  return await axios.delete(LIVRE_API + '/' + id)
}

export const fetchLivresPagination = async (page, limit) => {
  return await axios.get(LIVRE_API + `/liv/pagination?page=${page}&pageSize=${limit}`)
}
