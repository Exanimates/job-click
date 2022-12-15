<template>
    <div class="card-list">
        <template v-for="card in cards" :key="card.id">
            <div class="card-list__like">like</div>
            <Card
                :card="card"
            >
            </Card>
            <div class="card-list__dislike">dislike</div>
        </template>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { PropType } from 'vue'
import { CardItem } from '../dto'
import Card from '@/components/Card.vue'

@Options({
  props: {
    cards: {
      type: Object as PropType<CardItem[]>,
      required: true
    }
  },
  components: {
    Card
  }
})
export default class CardList extends Vue {
}
</script>

<style scoped lang="scss">
.card-list {
    &__like {

    }
    &__dislike {

    }
}
</style>
