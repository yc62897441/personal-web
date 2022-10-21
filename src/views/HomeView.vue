<template>
  <div class="home container">
    <section class="home-section home-section-about">
      <div class="section-about">
        <div class="section-about-img-wrapper">
          <img class="about-img" src="../assets/about-avatar.jpg">
        </div>
        <div class="section-about-introduction-wrapper">
          <p class="section-title">關於我</p>
          <p class="section-content-text">
            臣亮言：先帝創業未半而中道崩殂，今天下三分，益州疲弊，此誠危急存亡之秋也。然侍衞之臣不懈於內，忠志之士忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。</p>
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
          <div class="section-project-wrapper">
            <div class="section-project-img-wrapper">
              <img class="project-img" src="../assets/project1-dancing-snowman.jpg">
            </div>
            <div class="section-project-introduction-wrapper">
              <p class="section-project-title">專案一: Dancing Snowman</p>
              <p class="section-project-text">臣亮言：先帝創業未半而中道崩殂，今天下三分，益州疲弊，此誠危急存亡之秋也。然侍衞之臣不懈於內，忠志之士忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。
              </p>
            </div>
          </div>
          <div class="section-project-wrapper">
            <div class="section-project-img-wrapper">
              <img class="project-img" src="../assets/project2-simple-tweet.jpg">
            </div>
            <div class="section-project-introduction-wrapper">
              <p class="section-project-title">專案二: Simple Twitter</p>
              <p class="section-project-text">
                臣亮言：先帝創業未半而中道崩殂，今天下三分，益州疲弊，此誠危急存亡之秋也。然侍衞之臣不懈於內，忠志之士忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。
              </p>
            </div>
          </div>
          <div class="section-project-wrapper">
            <div class="section-project-img-wrapper">
              <img class="project-img" src="../assets/project3-weather-app.jpg">
            </div>
            <div class="section-project-introduction-wrapper">
              <p class="section-project-title">專案三: Weather App</p>
              <p class="section-project-text">
                臣亮言：先帝創業未半而中道崩殂，今天下三分，益州疲弊，此誠危急存亡之秋也。然侍衞之臣不懈於內，忠志之士忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。
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
          <div class="section-live-wrapper">
            <div class="section-live-img-wrapper">
              <img class="live-img" src="../assets/live1-drama.jpg">
            </div>
            <div class="section-live-introduction-wrapper">
              <p class="section-live-title">半澤直樹：加倍奉還</p>
              <p class="section-live-text">臣亮言：先帝創業未半而中道崩殂，今天下三分，益州疲弊，此誠危急存亡之秋也。然侍衞之臣不懈於內，忠志之士忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。
              </p>
            </div>
          </div>
          <div class="section-live-wrapper">
            <div class="section-live-img-wrapper">
              <img class="live-img" src="../assets/live2-snowmountain-1.jpg">
            </div>
            <div class="section-live-introduction-wrapper">
              <p class="section-live-title">最美玉山圓柏林：雪山西稜</p>
              <p class="section-live-text">臣亮言：先帝創業未半而中道崩殂，今天下三分，益州疲弊，此誠危急存亡之秋也。然侍衞之臣不懈於內，忠志之士忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。
              </p>
            </div>
          </div>
          <div class="section-live-wrapper">
            <div class="section-live-img-wrapper">
              <img class="live-img" src="../assets/live2-snowmountain-2.jpg">
            </div>
            <div class="section-live-introduction-wrapper">
              <p class="section-live-title">偷得浮生半日閒</p>
              <p class="section-live-text">臣亮言：先帝創業未半而中道崩殂，今天下三分，益州疲弊，此誠危急存亡之秋也。然侍衞之臣不懈於內，忠志之士忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。
              </p>
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

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
