<template>
<!--  <router-view/>-->

  <h2>pop提示弹出异常</h2>
  <a-tooltip>
    <template #title>这个提示只能在第一次的时候显示</template>
    Tooltip will show when mouse enter.（鼠标移动到这里）
  </a-tooltip>
  <h2>date picker异常</h2>
  <a-date-picker  />

  <h2>等等...带有这种弹出的都会有问题</h2>

</template>

<script setup>
</script>
