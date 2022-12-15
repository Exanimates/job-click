<template>
    <div class="card">
        <div
            v-for="photo in card.photos"
            class="card__photo"
            :style="{ backgroundImage: `url(${photo.url})` }"
            :key="photo.url"
            ></div>
        <div class="card__description"> {{ card.description }} </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { PropType } from 'vue'
import { CardItem } from '../dto'
@Options({
  props: {
    card: {
      type: Object as PropType<CardItem>,
      required: true
    }
  }
})
export default class Card extends Vue {
}
</script>

<style scoped lang="scss">
.card {
    &__photo {
        width: 600px;
        height: 300px;
    }
    &__description {

    }
}
</style>
