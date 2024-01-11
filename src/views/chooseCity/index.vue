<template>
  <m-choose-city @changeCity="handleChooseCity" @changeProvince="handleChooseCity"></m-choose-city>
</template>

<script setup lang="ts">
const handleChooseCity = (item: any) => {
  console.log(item)
}
</script>

<style lang="scss" scoped></style>
