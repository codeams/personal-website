<template lang='pug'>
  //- TODO: Consider refactoring the template

  .technical-card
    .cell
      .header
        .type {{ project.type }}
        .name {{ project.name }}
        .role {{ project.role }}

      .story(v-html='project.story')

      .footer
        .separator

        .collabs(v-if='project.collabs.length > 0')
          | Co-worked with
          span(v-for='collab, index in project.collabs' :key='collab.nickname')
            span(v-if='index > 0') ,
            | &nbsp;
            a(:href='collab.url' target='_blank').
              @{{ collab.nickname }}

        .dates-interval(v-if='project.startDate === project.endDate').
          around #[strong {{ project.startDate }}]
        .dates-interval(v-else).
          from #[strong {{ project.startDate }}] to #[strong {{ project.endDate }}]
</template>

<script>
  import Project from '@/models/Project'

  export default {
    props: {
      project: {
        type: Project,
        required: true
      }
    }
  }
</script>

<style lang='scss'>
  .technical-card {
    @include xy-grid(vertical);
    @include flex-align($x: center, $y: middle);
    width: 100%;
    line-height: 1.3;
    text-align: center;

    @include breakpoint(large) {
      height: 100%;
      text-align: left;
    }
  }

  .technical-card {
    .type {
      font-size: 24px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: from-palette(dolphin);
      margin-bottom: 10px;
    }

    .name {
      font-size: 36px;
      font-weight: bold;
      letter-spacing: -0.24px;
      text-transform: uppercase;
    }

    .role {
      margin-bottom: 20px;
      font-size: 20px;

      @include breakpoint(large) {
        margin-bottom: 160px;
      }
    }

    .story {
      @include show-for(large);
      margin-bottom: 50px;
      font: 18px/1.5 $body-font-family;
    }

    .separator {
      width: 42px;
      height: 1px;
      margin: 0 auto 13px;
      background-color: from-palette(dolphin);

      @include breakpoint(large) {
        margin-right: 0;
        margin-left: 0;
      }
    }

    .footer {
      color: from-palette(dolphin);
    }

    .collabs {
      margin-bottom: 4px;

      span {
        font-weight: bold;
      }

      a {
        color: inherit;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .dates-interval {
      text-transform: lowercase;
    }
  }
</style>
