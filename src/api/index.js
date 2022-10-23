import { apiHelper } from '../utils/helpers'

export default {
  // User
  getUser({ UserId }) {
    return apiHelper.get(`/user/${UserId}`)
  },
  putUser({ UserId, formData }) {
    return apiHelper.put(`/admin/user/${UserId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  },
  // Projects
  getProjects({ UserId }) {
    return apiHelper.get(`/projects/${UserId}`)
  },
  getProject({ ProjectId }) {
    return apiHelper.get(`/project/${ProjectId}`)
  },
  putProject({ ProjectId, formData }) {
    return apiHelper.put(`/admin/project/${ProjectId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  },
  // Lives
  getLives({ UserId }) {
    return apiHelper.get(`/lives/${UserId}`)
  },
  getLive({ LiveId }) {
    return apiHelper.get(`/live/${LiveId}`)
  },
  putLive({ LiveId, formData }) {
    return apiHelper.put(`/admin/live/${LiveId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  },
}
