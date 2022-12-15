<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <CardList :cards="cards"></CardList>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { CardItem } from '../dto'
import CardList from '@/components/CardList.vue'

@Options({
  components: {
    CardList
  }
})
export default class HomeView extends Vue {
  cards: CardItem[] = [{
    id: 1,
    name: 'TryHard',
    description: 'Not bad company',
    tags: ['finTech', 'ДМС'],
    photos: [{ url: 'https://placeimg.com/600/300/animals' }]
  }]
}
</script>
