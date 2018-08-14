<template>
  <div class="content">
    <h3 class="title is-4">
      Professional Experience
    </h3>
    <ExperienceBlock
      company-name="ServiceRocket Sdn Bhd"
      job-title="Agile Developer"
      period="July 2017 - Present">
      <ul>
        <li>A full-stack developer role with job scope ranging from:</li>
        <ul>
          <li>Frontend works with React and Vue</li>
          <li>Backend API development with Play framework, Serverless framework with AWS Lambda, Express.js</li>
          <li>Configuring CI/CD pipelines on Jenkins</li>
          <li>Provision application architecture on AWS, using Terraform to plan and predictably deploy and update stacks</li>
          <li>Packaging applications for deployment using Docker</li>
        </ul>
        <li>Coordinated with Product Manager and Engineering Director to help facilitate teams to move from time-based sprints to flow-based approach</li>
        <li>Active involvement with our internal UX chapter, responsible for coordinating UX improvements across teams:</li>
        <ul>
          <li>Gather data and record with analytics systems</li>
          <li>Implement design systems for a standardised look-and-feel across our apps, thus improving customers’ experience</li>
        </ul>
      </ul>
    </ExperienceBlock>
    <ExperienceBlock
      company-name="Booster Services Asia (M) Sdn Bhd"
      job-title="Jr. Software Developer, Software Developer (promoted)"
      period="July 2014 - June 2017">
      <ul>
        <li>
          Spearheaded site-wide Facebook API upgrade project (to Facebook API v2.2)
          in response to Facebook deprecating API v1 Played a major role in improving
        </li>
        <li>
          Booster’s site search abilities and was in the same team that helped
          implemented Booster’s full-text search via ElasticSearch
        </li>
      </ul>
    </ExperienceBlock>
    <ExperienceBlock
      company-name="Inti International University"
      job-title="Web Designer (Student Employee)"
      period="June 2011">
      <ul>
        <li>Designed a whole new interface for the college’s student portal</li>
      </ul>
    </ExperienceBlock>
  </div>
</template>

<script>
import ExperienceBlock from './ExperienceBlock'

export default {
  components: {
    ExperienceBlock
  }
}
</script>

<style scoped>
</style>
