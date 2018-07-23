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
        <PersonalProjects />
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
import PersonalProjects from '~/components/PersonalProjects'

export default {
  components: {
    PersonalProjects,
    LeadershipExperience,
    ProfessionalExperience,
    ProfileSummary,
    ProfileSidebar
  }
}
</script>
