<template>
  <div class="admin-projects container">
    <AdminNavbar />
    <section class="home-section home-section-projects">
      <div class="section-projects-introduction-wrapper">
        <p class="section-title">我的專案</p>
        <div class="section-more-wrapper">
          <router-link class="section-more-link" to="/projects">更多資訊</router-link>
        </div>
      </div>
      <div class="section-projects">
        <div class="section-projects-wrapper">
          <div v-for="project in projects" class="section-project-wrapper">
            <router-link v-bind:to="'/admin/projects/' + project.id">
              <button>編輯</button>
            </router-link>
            <div class="section-project-img-wrapper">
              <img class="project-img" v-bind:src="project.title_img">
            </div>
            <div class="section-project-introduction-wrapper">
              <p class="section-project-title">專案: {{project.name}} {{project.title_img}}</p>
              <p class="section-project-text">{{project.description}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue'
import indexApi from '../api/index'

export default {
  components: {
    AdminNavbar
  },
  data() {
    return {
      projects: [],
    }
  },
  methods: {
    async getProjects() {
      try {
        const UserId = 1
        const response = await indexApi.getProjects({ UserId })
        if (response.data.status !== 'success') {
          throw new Error()
        }
        this.projects = response.data.data
      } catch (error) {
        console.warn(error)
      }
    }
  },
  created() {
    this.getProjects()
  }
}
</script>

<style>
.form-row {
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  margin-bottom: 20px;
}

img {
  width: 400px;
  height: 400px;
  object-fit: cover;
}
</style>