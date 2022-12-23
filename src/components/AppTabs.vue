<template>
    <div
      :class="{
        flex: variant === 'horizontal',
      }"
      class="tabs"
    >
      <div class="tabs__item" v-for="(tab, index) in tabList" :key="index">
        <label :for="`${_uid}${index}`" v-text="tab" />
        <input
          :id="`${_uid}${index}`"
          type="radio"
          :name="`${_uid}-tab`"
          :value="index + 1"
          v-model="activeTab"
        />
      </div>
    </div>

    <template v-for="(tab, index) in tabList">
      <div :key="index" v-if="index + 1 === activeTab">
        <slot :name="`tabPanel-${index + 1}`" />
      </div>
    </template>
</template>

<script lang="ts">
import { Vue, prop } from 'vue-class-component'
export default class AppTabs extends Vue.with(class {
  tabList = prop<string[]>({ type: Array, required: true, default: () => [] })
  variant = prop<string>({
    type: String,
    required: false,
    default: () => 'horizontal',
    validator: (value: string) => ['horizontal', 'vertical'].includes(value)
  })
}) {
    activeTab = 1
}
</script>

<style scoped lang="scss">
.flex {
  display: flex;
}
</style>
