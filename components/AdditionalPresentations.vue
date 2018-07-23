<template>
  <div class="section">
    <h3 class="title is-4">
      Presentations
    </h3>
    <VideoBox url="https://www.youtube-nocookie.com/embed/_femHvk47IQ?rel=0">
      <div class="section content">
        <h4>Build Real-time Chat App with Nuxt.js and FeathersJS</h4>
        <p>
          My own tutorial working with Nuxt.js (a frontend framework), connected to a backend system built using FeathersJS and bridged with Socket.io for real-time connectivity
        </p>
        <p>
          Garnered over 1.6k views in just two months and even caught the attention of the creator of Nuxt.js himself
        </p>
      </div>
    </VideoBox>
  </div>
</template>

<script>
import VideoBox from '~/components/VideoBox'

export default {
  components: {
    VideoBox
  }
}
</script>

<style scoped>
.content {
  border-top: 1px solid #e5e5e5;
}
</style>
