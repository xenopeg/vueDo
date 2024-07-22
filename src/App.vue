<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="h-14 flex flex-row justify-between items-center bg-zinc-800 sticky top-0 z-10">
    <span class="text-xl mx-5"> <span class="text-emerald-600">vue</span>Do</span>
    <div>
      <RouterLink activeClass="text-emerald-600" class="mr-5 hover:underline" to="/"
        >Home</RouterLink
      >
      <RouterLink activeClass="text-emerald-600" class="mr-5 hover:underline" to="/about"
        >About</RouterLink
      >
    </div>
  </header>

  <RouterView />
</template>
