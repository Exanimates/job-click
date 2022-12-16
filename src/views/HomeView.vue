<template>
  <div class="home">
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
    name: 'Легкие времена',
    description: 'Лучшая компания',
    tags: ['finTech', 'ДМС'],
    photos: [{ url: 'https://placeimg.com/600/300/animals' }]
  },
  {
    id: 2,
    name: 'Средние времена',
    description: 'Самая лучшая компания',
    tags: ['finTech', 'ДМС'],
    photos: [{ url: 'https://placeimg.com/600/300/animals' }]
  },
  {
    id: 3,
    name: 'Тяжелые времена',
    description: 'Лучше нас никого нет',
    tags: ['finTech', 'ДМС'],
    photos: [{ url: 'https://placeimg.com/600/300/animals' }]
  }]
}
</script>
