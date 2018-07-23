<template>
  <div class="section">
    <div class="columns">
      <div class="column is-3">
        <ProfileSidebar />
      </div>
      <div class="column">
        <ProfileSummary />
        <div class="section">
          Presentations
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileSidebar from '~/components/ProfileSidebar'
import ProfileSummary from '~/components/ProfileSummary'

export default {
  components: {
    ProfileSummary,
    ProfileSidebar
  }
}
</script>
