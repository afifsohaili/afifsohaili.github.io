<template>
  <div class="experience-block">
    <h4 class="title is-5 is-marginless">{{companyName}}</h4>
    <h5 class="subtitle is-6 is-marginless">{{jobTitle}}</h5>
    <em>{{period}}</em>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    'company-name': { type: String },
    'job-title': { type: String },
    'period': { type: String }
  }
}
</script>

<style lang="scss">
.experience-block + .experience-block:not(.is-marginless) {
  margin-top: 1.5rem;
}

em {
  display: block;
  margin-bottom: 0.75rem;
}

.experience-block {
  border-radius: 6px;
  border: 1px solid #e5e5e5;
  padding: 1rem;

  ul {
    list-style-position: inside;
    margin-left: 1.5rem;
    position: relative;
  }

  ul li:before {
    content: '\0398';
    left: -1.5rem;
    position: absolute;
  }

  ul ul {
    margin-left: 1.5rem;
  }
}
</style>
