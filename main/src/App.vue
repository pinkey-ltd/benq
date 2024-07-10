<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { zhCN, dateZhCN, NConfigProvider } from 'naive-ui'
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    <header>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-start">
            <RouterLink class="navbar-item" to="/">主页</RouterLink>
            <RouterLink class="navbar-item" to="/server/3dtile">模型服务</RouterLink>
            <RouterLink class="navbar-item" to="/tools/media">视频服务</RouterLink>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-link">登录</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <RouterView />
  </n-config-provider>
</template>
