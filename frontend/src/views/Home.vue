<template>
  <div class="home">
    <headerBar msg="Groupomania"/>
    <post/>
  </div>
</template>

<script>
// @ is an alias to /src
import headerBar from '@/components/headerBar.vue'
import post from '@/components/post.vue'

export default {
  name: 'Home',
  components: {
    headerBar,
    post,
  }
}
</script>
