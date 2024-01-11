<script lang="ts" setup>
const handleAreaChange = (val: any) => {
  console.log(val)
}
</script>

<template>
  <m-choose-area @change="handleAreaChange"></m-choose-area>
</template>

<style lang="scss" scoped></style>
