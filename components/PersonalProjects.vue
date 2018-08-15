<template>
  <div class="content">
    <h3 class="title is-4">
      Projects
    </h3>
    <div class="is-flex">
      <ExperienceBlock
        v-for="project in projects"
        class="project"
        :company-name="project.name"
        :period="project.decommissioned ? 'Decommissioned' : undefined"
        :key="project.name">
        <a
          :href="project.url"
          v-if="!project.decommissioned"
          class="url"
          target="_blank"
          rel="noopener noreferrer">
          {{project.url}}
        </a>

        <p>Stacks:</p>
        <ul>
          <li v-for="tool in project.stacks" :key="project.name + tool">
            {{tool}}
          </li>
        </ul>
      </ExperienceBlock>
    </div>
  </div>
</template>

<script>
import ExperienceBlock from '~/components/ExperienceBlock'

export default {
  components: {
    ExperienceBlock
  },
  data () {
    return {
      projects: [
        {
          name: 'Munying Aquaculture',
          url: 'https://munyingaquaculture.com',
          stacks: ['MeteorJS', 'MongoDB', 'Nginx', 'Hosted on Vultr']
        },
        {
          name: 'Syaf Armada Recruitment',
          url: 'https://syafrecruitment.com',
          stacks: ['MeteorJS', 'MongoDB', 'Nginx', 'Hosted on Linode']
        },
        {
          name: 'Saranira',
          url: 'http://saranira.com',
          stacks: ['WordPress']
        },
        {
          name: `Projek Ihsan's Volunteer System`,
          url: 'https://volunteers.projekihsan.org',
          stacks: ['MeteorJS', 'MongoDB', 'Nginx', 'Hosted on DigitalOcean'],
          decommissioned: true
        },
        {
          name: 'Projek Ihsan',
          url: 'http://projekihsan.org',
          stacks: ['WordPress']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  &:first-child {
    @media only screen and (max-width: 600px) {
      margin-top: 0;
    }
  }

  &:nth-child(2) {
    @media only screen and (min-width: 600px) {
      margin-top: 0
    }
  }
}

.is-flex {
  flex-wrap: wrap;
  justify-content: space-between;


  .experience-block {
    width: calc(50% - 1rem);

    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }
}

.url {
  display: block;
  margin-bottom: 0.75rem;
}
</style>
