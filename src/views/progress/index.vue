<template>
  <div class="progress">
    <m-progress class="m-t-50" isAnimation :percentage="60"></m-progress>
    <m-progress class="m-t-50" :percentage="60" type="circle"></m-progress>
    <m-progress class="m-t-50" isAnimation :percentage="80" type="circle"></m-progress>
    <m-progress
      class="m-t-50"
      isAnimation
      :percentage="80"
      text-inside
      :stroke-width="24"
      status="success"
    ></m-progress>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.m-t-50 {
  margin-top: 50px;
}
</style>
