<template>
  <div class="admin-lives container">
    <AdminNavbar />
    <div>
      <form>
        <div class="form-row">
          <label for="admin-about-name">Live Name</label>
          <input type="text" class="form-control" id="admin-about-name" v-model="live.name">
        </div>
        <div class="form-row">
          <label for="admin-about-description">Live Description</label>
          <textarea id="admin-about-description" cols="30" rows="10" v-model="live.description"></textarea>
        </div>
        <div class="form-row">
          <label>Title_Img</label>
          <img v-bind:src="live.title_img" alt="">
          <label for="admin-about-title_img">
            <img class="user-info-icon" type="button" src="../assets/icon-photo.png" alt="">
          </label>
        </div>
        <button type="button" @click.prevent.stop="handleSubmit" v-bind:disabled="isProcessing">儲存</button>
      </form>
    </div>

    <input id="admin-about-title_img" type="file" accept="image/*" name="userNewAvatar" v-on:change="handleFileChange">
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
      live: {},
      avatar: '',
      isProcessing: false
    }
  },
  methods: {
    async getLive(liveId) {
      try {
        const LiveId = liveId
        const response = await indexApi.getLive({ LiveId })
        if (response.data.status !== 'success') {
          throw new Error()
        }
        this.live = response.data.data
      } catch (error) {
        console.warn(error)
      }
    },
    handleFileChange(event) {
      const { files } = event.target
      const imageURL = window.URL.createObjectURL(files[0])
      this.live.title_img = imageURL
      this.avatar = new File([event.target.files[0]], 'avatar')
    },
    async handleSubmit(e) {
      try {
        const LiveId = this.live.id

        // user name 不可為空白，空白則跳出函式
        if (!this.live.name) {
          return
        }

        // 建立 formData()
        let formData = new FormData()

        // formData 加入 avatar 檔案，傳回後端會是 req.body.files(陣列，裡面每個物件都是一張圖)。如果沒有傳入檔案，會是空字串，但不影響流程
        formData.append("files", this.avatar)

        // 如果 live.name、 live.description 不是空白，則加入 formData
        if (this.live.name) {
          formData.append('name', this.live.name)
        }
        if (this.live.description) {
          formData.append('description', this.live.description)
        }

        // 傳送資料到後端
        const response = await indexApi.putLive({ LiveId, formData })

        // 錯誤，跳到錯誤處理
        if (response.data.status !== 'success') {
          throw new Error()
        }

        this.avatar = ''
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.warn(error)
      }
    },
  },
  created() {
    const liveId = this.$route.params.id
    this.getLive(liveId)
  },
  beforeRouteUpdate(to, from, next) {
    const liveId = to.params.id
    this.getLive(liveId)
    next()
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