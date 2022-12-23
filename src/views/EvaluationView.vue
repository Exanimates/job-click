<template>
  <div class="evaluation">
    <AppTabs :tabList="tabs"></AppTabs>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import AppTabs from '@/components/AppTabs.vue'

@Options({
  components: {
    AppTabs
  }
})
export default class HomeView extends Vue {
  tabs: string[] = ['Лайки', 'Дизлайки']
}
</script>
