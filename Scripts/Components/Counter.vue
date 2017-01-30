<template>
	<div class="counter">
		{{value}}
		<a v-on:click="increment()" class="counter-increment">+</a>
	</div>
</template>

<script>
export default {
  name: 'counter',
  data: function() {
	return {
  		value: 0
  	}
  },
  methods: {
  	increment: function() {
  		this.value++;
  	}
  }
}
</script>