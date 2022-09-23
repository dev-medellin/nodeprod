<template>
    <div>
         <Home v-if="!isAuthenticated" />
         <Insert />
    </div>
</template>

<script>
import Home from '@/components/Home'
import Insert from '@/components/Insert'
export default {
      components: {
        Home,
        Insert
      },
      computed: {
          isAuthenticated() {
            return this.$store.getters.isAuthenticated;
          }
      }
}
</script>