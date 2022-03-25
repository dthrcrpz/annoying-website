import { writable } from "svelte/store"

function createModal() {
  const { subscribe, update } = writable(false)

  return {
    subscribe,
    toggleModal: (value = null) => {
      if (value == null) {
        update(n => !n)
      } else {
        update(n => value)
      }
    }
  }
}

export const modal = createModal()