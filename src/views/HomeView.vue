<template>
  <div class="home container">
    <section class="home-section home-section-about">
      <div class="section-about">
        <div class="section-about-img-wrapper">
          <img class="about-img" v-bind:src="user.title_img">
        </div>
        <div class="section-about-introduction-wrapper">
          <p class="section-title">關於我：{{user.name}}</p>
          <p class="section-content-text">{{user.description}}</p>
          <div class="section-more-wrapper">
            <router-link class="section-more-link" to="/about">更多資訊</router-link>
          </div>
        </div>
      </div>
    </section>

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
            <div class="section-project-img-wrapper">
              <img class="project-img" v-bind:src="project.title_img">
            </div>
            <div class="section-project-introduction-wrapper">
              <p class="section-project-title">專案: {{project.name}}</p>
              <p class="section-project-text">{{project.description}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="home-section home-section-lives">
      <div class="section-lives-introduction-wrapper">
        <p class="section-title">生活分享</p>
        <div class="section-more-wrapper">
          <router-link class="section-more-link" to="/lives">更多資訊</router-link>
        </div>
      </div>
      <div class="section-lives">
        <div class="section-lives-wrapper">
          <div v-for="live in lives" class="section-live-wrapper">
            <div class="section-live-img-wrapper">
              <img class="live-img" v-bind:src="live.title_img">
            </div>
            <div class="section-live-introduction-wrapper">
              <p class="section-live-title">{{live.name}}</p>
              <p class="section-live-text">{{live.description}} </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import indexApi from '../api/index'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      user: {},
      projects: [],
      lives: []
    }
  },
  methods: {
    async getUser() {
      try {
        const UserId = 1
        const response = await indexApi.getUser({ UserId })
        if (response.data.status !== 'success') {
          throw new Error()
        }
        this.user = { ...response.data.data }
      } catch (error) {
        console.warn(error)
      }
    },
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
    },
    async getLives() {
      try {
        const UserId = 1
        const response = await indexApi.getLives({ UserId })
        if (response.data.status !== 'success') {
          throw new Error()
        }
        this.lives = response.data.data
      } catch (error) {
        console.warn(error)
      }
    }
  },
  created() {
    this.getUser()
    this.getProjects()
    this.getLives()
  }
}
</script>
