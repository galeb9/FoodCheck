<template>
    <!-- <a class="list__item" href="/"> -->
    <div class="list__item">
        <div class="list__item__row">
            <h3 class="title">{{ capitalize(data.name) }}</h3>
            <p class="expiration">{{ calculateDays(reverseDate(data.expiryDate.split('-'))) }}</p>
        </div>
        <div class="list__item__row">
            <!-- <p class="category">{{ data.category }}</p> -->
            <p>{{ getCurrentDate }}</p>
            <!-- <p>{{ data.isFridge }}</p> -->
        </div> 
        <div @click="$emit('delete')" class="delete__btn">Delete</div>
    </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    data: { type: Object, default: () => {} }
  },
  data() {
    return {
        currentDate: new Date()
    }
  },
  computed: {
    getCurrentDate() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        // this is how you will convert to num to calculate
        // console.log(Number(dd)) 
        // console.log(Number(mm)) 

        return  mm + '-' + dd + '-' + yyyy;
    },

  },
  methods: {
    capitalize(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
    },
    reverseDate(arr) {
        return arr.reverse().join('-')
    },
    getNumDate(stringDate) {
        let dateArrStr = stringDate.split('-')
        let dateArrNum = []
        for(let i = 0; i < dateArrStr.length; i++) {
            dateArrNum.push(Number(dateArrStr[i]))
        }
        return dateArrNum
    },
    calculateDays(expiryDate) {
        let today = this.getNumDate(this.getCurrentDate);
        let expiredDate = this.getNumDate(expiryDate)
        console.log(today, expiredDate)
        // expiredDate - today
    }
  }
}
</script>

<style lang="scss">
.list__item {
    padding: 15px 15px;
    border-radius: $radius;
    box-shadow: rgba(0, 0, 0, 0.34) 0px 3px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-left: 10px solid $secondary; // will have to change based on days left
    background-color: white;
    margin: 10px 0;
    
    transform: translateY(0);
    max-width: 300px;
    transition: all 0.2s ease-out 0.01s;
    // cursor: pointer;
	&:hover {
		// max-width: 350px;
	}
    .delete__btn {
        background: crimson;
        color: white;
        font-size: 14px;
        padding: 5px 10px;
        border-radius: $radius;
        cursor: pointer;
        transition: all 0.2s ease-out;
        &:hover {
            background: red;
        }
    }
}
.list__item
.list__item__other {
    display: flex;
    align-items: center;
    gap: 10px;
}

</style>