<template>
  <div class="section">
    <div class="columns">
      <div class="column is-3">
        <ProfileSidebar />
      </div>
      <div class="column">
        <div class="section">
          Summary
        </div>
        <div class="section">
          Professional Experience
        </div>
        <div class="section">
          Leadership Experience
        </div>
        <div class="section">
          Projects
        </div>
        <div class="section">
          Presentations
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileSidebar from '~/components/ProfileSidebar'

export default {
  components: {
    ProfileSidebar
  }
}
</script>
