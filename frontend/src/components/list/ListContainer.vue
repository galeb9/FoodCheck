<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <div class="list__container">
	<p v-if="!items.length" class="error">{{ error }}</p>
	<p>askdflasdfklčasdf</p>
	<div class="list">
		<ListItem
			v-for="item in items"
			:key="item._id"
			:data="item"
			@delete="deleteItem(item._id)" 
		/>
	</div>

  </div>
</template>

<script>
import ListItem from './ListItem.vue'
import ItemsService from '../../ItemsService'

export default {
  name: 'ListContainer',
  props: {
	newData: { type: Object, default: () => {} }
  },
  components: {
    ListItem
  },
  data () {
    return {
		items: [],
		error: null,
		newItem: null
    }
  },
  methods: {
	async deleteItem (id) {
		await ItemsService.deleteItem(id);
		this.items = await ItemsService.getItemsList();
	},
  },
  watch: {
	newData () { // when add new item we added it to items
		if(this.newData) {
			this.newItem = this.newData
			this.items.unshift(this.newItem)
			this.newItem = null
		}
	}
  },
  async created () {
	try {
		this.error = null;
		this.items = await ItemsService.getItemsList();
	} catch (error) {
		this.error = error
	}
  }
}
</script>

<style lang="scss">
	.list__container {

		.list {
			display: flex;
			flex-direction: column;
			padding: 20px 0;
		}
	}
</style>