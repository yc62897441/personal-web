<template>
  <div class="admin-lives container">
    <AdminNavbar />
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
            <router-link v-bind:to="'/admin/lives/' + live.id">
              <button>編輯</button>
            </router-link>
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
import AdminNavbar from '@/components/AdminNavbar.vue'
import indexApi from '../api/index'

export default {
  components: {
    AdminNavbar
  },
  data() {
    return {
      lives: [],
    }
  },
  methods: {
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
    this.getLives()
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