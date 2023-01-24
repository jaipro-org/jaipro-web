<template>
  <div class="jp-table">
    <table class="jp-table__content">
      <tr class="jp-table-header">
        <th
          class="jp-table-header__item"
          scope="col"
          v-for="(field, index) in fields"
          :key="index"
        >
          {{ field.label ? field.label : "" }}
        </th>
        <th class="jp-table-header__item" scope="col" v-if="$slots.action">
          Acciones
        </th>
      </tr>

      <tr
        class="jp-table-body"
        v-for="(item, index) in itemsToShow"
        :key="index"
      >
        <td
          class="jp-table-body__item"
          v-for="(field, index) in fields"
          :key="field.key"
        >
          {{ getAttributeValue(item, field.key) }}
        </td>
        <td class="jp-table-body__item">
          <slot :row="item" name="action"></slot>
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
interface IField {
  key: string
  label?: string
}
import { computed, defineComponent, ref } from "vue"
export default defineComponent({
  props: {
    fields: {
      type: Array<IField>,
      default: [],
    },
    items: {
      type: Array,
      default: [],
    },
    currentPage: {
      type: Number,
      default: 0,
      validator(value: number) {
        return value >= 0
      },
    },
    perPage: {
      type: Number,
      default: 0,
      validator(value: number) {
        return value >= 0
      },
    },
  },
  setup(props) {
    const itemList = ref(props.items)
    // const itemsToShow = itemList
    const getAttributeValue = (item: any, key: String) => {
      let paramList = []
      paramList = key.split(".")
      let property = item
      paramList.forEach((param, index) => {
        if (index < paramList.length - 1) {
          if (property.hasOwnProperty(param) && property[param] != null) {
            property = property[param]
          } else {
            return ""
          }
        }
      })
      return property[paramList[paramList.length - 1]]
    }

    const itemsToShow = computed(() => {
      if (props.currentPage == 0 || props.perPage == 0) {
        return itemList
      }

      let initList = props.perPage * (props.currentPage - 1)
      let endList = props.perPage * props.currentPage

      return itemList.value.slice(initList, endList)
    })

    return {
      // PARAMS
      itemsToShow,
      // METHODS
      getAttributeValue,
    }
  },
})
</script>

<style scoped lang="scss">
.jp-table {
  position: relative;
  display: flex;
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow: auto;

  &-header {
    background-color: #efefef;
    &__item {
      padding: 8px 8px;
    }
  }
  &-body {
    &__item {
      padding: 8px 10px;
      border-bottom: 1px solid #efefef;
      color: var(--text-color-base);
    }
  }
}

@media (max-width: 950px) {
}
</style>
