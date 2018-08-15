<template>
  <aside>
    <div>
      <img src="~/assets/profile.jpg" alt="Afif Sohaili's photo">
      <h1 class="title is-1">
        Afif Sohaili
      </h1>
      <h2 class="subtitle">
        A Malaysia-based Web Developer
      </h2>
    </div>
    <profile-summary class="summary"/>
  </aside>
</template>

<script>
import ProfileSummary from '~/components/ProfileSummary'

export default {
  components: {
    ProfileSummary
  }
}
</script>

<style scoped>
aside > div:not(:first-child) {
  margin-top: 1rem;
}
</style>
