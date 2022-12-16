<template>
    <div class="card-list">
        <div class="card-list__card" v-for="(card, index) in cards" :key="card.id">
            <div class="card-list__like" :class="classes[index] === 'move-left' ? 'move-left': '' " @click="classes[index]= 'move-left'">
              <img class="card-list__image" src="../assets/icons8-facebook-like-skin-type-2-96.png">
              <div class="card-list__desire">Хочу здесь работать</div>
            </div>
            <Card
                :card="card"
            >
            </Card>
            <div class="card-list__dislike" :class="classes[index] === 'move-right' ? 'move-right': '' " @click="classes[index]= 'move-right'">
              <img class="card-list__image" src="../assets/icons8-dislike-58.png">
              <div class="card-list__desire">Не хочу здесь работать</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component'
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
export default class CardList extends Vue.with(class {
  cards = prop<CardItem[]>({ type: Array, default: () => [] })
}) {
  classes: string[] = []

  created () {
    this.classes = Array.from({ length: this.cards.length })
  }
}
</script>

<style scoped lang="scss">
.card-list {
    &__card {
      display: flex;
      justify-content: center;
    }

    &__like {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

    }

    &__image {
      cursor: pointer;
    }

    &__desire {
      cursor: pointer;
    }

    &__dislike {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
}
.move-left, .move-right {
  margin-left: -174px;
  transition-property: margin-left;
  transition-duration: 2s;
}
.move-right {
  margin-right: -174px;
  transition-property: margin-right;
}
</style>
