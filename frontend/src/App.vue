<template>
  <div class="main">
	<NavDesktop />
    <ListContainer :newData="newAddedItem" />

	<Transition name="fade-in">
		<AddItem 
			v-if="isVisible" 
			@close-overlay="closeOverlay" 
			@new-data="addNewItem"
		/>
	</Transition>
	<div @click="togglePopup" :class="['show__add-item', {'hide__add-item': isVisible}]">+</div>
  </div>
</template>

<script>
import ListContainer from './components/list/ListContainer.vue';
import NavDesktop from './components/navigation/NavDesktop.vue';
import AddItem from './components/add-item/AddItem.vue';

export default {
  name: 'App',
  components: {
    ListContainer,
	NavDesktop,
	AddItem
  },
  data () {
	return {
		isVisible: false,
		newAddedItem: null,
	}
  },
  methods: {
	togglePopup () {
		this.isVisible = !this.isVisible
	}, 
	closeOverlay (value) {
		this.isVisible = value
	},
	addNewItem (item) {
		this.newAddedItem = item;
		console.log("New item: ", item)
	}
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	background-color: $bg;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	min-height: 100vh;
	font-family: 'Noto Sans', sans-serif;
	max-width: 1200px;
	margin: 0 auto;
	padding: 15px 20px;
	ul {
		list-style: none;
	}
	a {
		text-decoration: none;
		color: inherit;
	}

	// toggle popup css

	.show__add-item {
		position: fixed;
		bottom: 15px;
		right: 15px;

		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 40px;
		background: $secondary;
		width: 55px;
		height: 55px;
		color: white;
		padding: 6px;
		border-radius: 50%;

		cursor: pointer;
		transition: all 0.2s ease-out 0.01s;
		&:hover {
			transform: translateY(-5px);
		}
	}
	.hide__add-item {
		background: red ;
		transform: rotate(45deg);
		&:hover {
			transform: rotate(45deg) translateX(0px);
		}
	}
	// add-item transition 
	.fade-in-enter-active,
	.fade-in-leave-active {
	transition: opacity 0.5s ease;
	}
	.fade-in-enter-from,
	.fade-in-leave-to {
	opacity: 0;
	}
}
</style>
