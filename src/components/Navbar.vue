<template>
  <div class="navbar">
    <div class="burger-bar-wrapper">
      <label class="navbar-toggle-label" for="navbar-toggle">
        <img src="../assets/burger-bar.png" alt="">
      </label>
    </div>
    <input type="checkbox" class="navbar-toggle" id="navbar-toggle">
    <div class="navbar-link-container">
      <router-link class="navbar-link" to="/">首頁</router-link>
      <router-link class="navbar-link" to="/about">關於我</router-link>
      <router-link class="navbar-link" to="/projects">我的專案</router-link>
      <router-link class="navbar-link" to="/live">生活分享</router-link>
    </div>
  </div>
</template>

<style>

</style>
