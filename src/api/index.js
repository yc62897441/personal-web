import { apiHelper } from '../utils/helpers'

export default {
  getUser({ UserId }) {
    return apiHelper.get(`/user/${UserId}`)
  },
  getProjects({ UserId }) {
    return apiHelper.get(`/projects/${UserId}`)
  },
  getLives({ UserId }) {
    return apiHelper.get(`/lives/${UserId}`)
  },
}
