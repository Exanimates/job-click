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
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 5px rgb(0 0 0 / 20%);
    border-radius: 5px;
    margin-top: 10px;

    &__photo {
        width: 600px;
        height: 300px;

        border-radius: 5px;
    }
    &__description {

    }
}
</style>
