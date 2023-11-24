import type { UnwrapNestedRefs } from 'vue'
import type { PwaInjection } from './types'
import { defineNuxtPlugin } from '#imports'
import type { Plugin } from '#app'

const plugin: Plugin<{
  pwa?: UnwrapNestedRefs<PwaInjection>
}> = defineNuxtPlugin(() => {
  return {
    provide: {
      pwa: undefined,
    },
  }
})

export default plugin
