<template>
  <div class="section">
    <div class="columns">
      <div class="column is-3">
        <profile-sidebar />
      </div>
      <div class="column is-offset-1 is-8">
        <profile-summary />
        <professional-experience />
        <leadership-experience />
        <personal-projects />
        <additional-presentations />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileSidebar from '~/components/ProfileSidebar'
import ProfileSummary from '~/components/ProfileSummary'
import ProfessionalExperience from '~/components/ProfessionalExperience'
import LeadershipExperience from '~/components/LeadershipExperience'
import PersonalProjects from '~/components/PersonalProjects'
import AdditionalPresentations from '~/components/AdditionalPresentations'

export default {
  components: {
    AdditionalPresentations,
    LeadershipExperience,
    ProfessionalExperience,
    ProfileSummary,
    PersonalProjects,
    ProfileSidebar
  }
}
</script>
