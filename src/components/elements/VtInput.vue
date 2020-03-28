<template>
  <input
    class="vt-input w-full border p-4"
    :placeholder="placeholder"
    :type="type"
  />
</template>

<script>
export default {
  name: 'VtInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>
