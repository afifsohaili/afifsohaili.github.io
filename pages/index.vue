<template>
  <div class="section">
    <div class="columns">
      <div class="column is-3">
        <ProfileSidebar />
      </div>
      <div class="column">
        <ProfileSummary />
        <ProfessionalExperience />
        <LeadershipExperience />
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
import ProfessionalExperience from '~/components/ProfessionalExperience'
import LeadershipExperience from '~/components/LeadershipExperience'

export default {
  components: {
    LeadershipExperience,
    ProfessionalExperience,
    ProfileSummary,
    ProfileSidebar
  }
}
</script>
