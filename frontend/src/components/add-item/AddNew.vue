<template>
	<div class="add-new__container content">

        <div class="add-new">
			<!-- <h3 class="add-new__title">Add new food</h3> -->
            <div class="add-new__input-container item__title">
                <label for="name">Food name</label>
                <input v-model="name" class="add-new__input" type="text" id="name" name="name" required>
            </div>

            <div class="add-new__input-container item__ex-date">
                <label for="ex-date">Expiration date</label>
                <input v-model="expiryDate" class="add-new__input" type="date" id="ex-date" name="expiryDate">
            </div>

            <div class="add-new__input-container item__category">
                <label for="">Category</label>
                <input v-model="category" class="add-new__input" type="text" id="category" name="category">
            </div>

            <button @click="addNewItem" class="add-new__btn">ADD NEW ITEM</button>
        </div>
		<div @click="$emit('closeOverlay', false)" class="add-new__overlay"></div>
    </div>
</template>

<script>
import ItemsService from '../../ItemsService'

export default {
    name: 'AddItem',
	data () {
		return {
			name: null,
			expiryDate: null,
			category: null
		}
	},
	methods: {
		async addNewItem() {
			const item = {
				name: this.name,
				expiryDate: this.expiryDate,
				category: this.category
			}

			await ItemsService.insertItem(item) // something goes wrong here

			this.$emit('newData', item) // transfer data to ListContainer

			this.name = null;
			this.expiryDate = null;
			this.category = null;
			this.$emit('closeOverlay', false)
		}
	}
}
</script>

<style lang="scss">
.add-new__container {

	.add-new {
		max-width: 300px;
		background: white;
		padding: 20px 30px;
		border-radius: $radius;

		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 2;

		margin: 20vh auto 0;
		.add-new__title {
			margin-bottom: -12px;
		}
		.add-new__input-container {
			display: flex;
			flex-direction: column;
			gap: 6px;
			label {
				background-color: white;
				font-size: 14px;
				margin-left: 12px;
				padding: 4px 10px;
				transform: translateY(20px);
				width: max-content;
			}
			.add-new__input {
				padding: 15px 15px 10px;
				border-radius: $radius;
				border: 1px solid $secondary;
				background-color: transparent;
			}
		}
		.add-new__btn {
			margin-top: 20px;
			padding: 0.8em 2.4em;
			width: 100%;
			border: none;
			background: $secondary;
			border-radius: $radius;
			color: white;
			font-weight: 700;
			letter-spacing: 1px;
			transition: all 0.2s ease-out 0.1s;
			cursor: pointer;
			// &:hover {
			// 	transform: scaleX(1.05) translateY(-5px);
			// }
		}
	}
	.add-new__overlay {
		background: rgba(#000000, 0.5);
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		cursor: pointer;
	}

}




</style>