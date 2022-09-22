<template>
  <div>
    <Header />
    <div class="container">
        <br />
        <Nuxt />
      </div>
  </div>
</template>

<script>
import Header from '@/layouts/templates/Header'
export default {
      components: {
        Header,
      }
}
</script>
