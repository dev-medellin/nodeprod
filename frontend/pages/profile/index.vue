<template>
    <div>
         <User />
    </div>
</template>

<script>
import User from '@/components/User'
export default {
    middleware: "isAuthenticated",
      components: {
        User,
      }
}
</script>