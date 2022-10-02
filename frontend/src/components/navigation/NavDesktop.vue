<template>
    <div class="nav-desktop">
        <div class="site-title">
            <a class="title__link-home" href="/">
                <img class="logo-img" src="@/assets/images/logo/food-check-icon.gif" alt="logo image">
            </a>
        </div>
        <ul class="nav-list">
            <li 
                v-for="(item, index) in nav"
                :key="index"
                class="nav__item"
            >
                <a :href="item.link">{{ item.title }}</a>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'NavDesktop',
    data () {
        return {
            nav: [
                { title: 'Home', link: '/' },
                { title: 'List', link: '/list' },
                { title: 'Add new', link: '/add' },
            ]
        }
    }

}
</script>

<style lang="scss">
.nav-desktop{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    border-bottom:  2px solid $secondary;
    padding-bottom: 10px;
    margin-bottom: 14px;
    .title__link-home {
        display: block;
        .logo-img {
            width: 100%;
            height: 100%;
            width: 50px;
            border: 2px solid $secondary;
            padding: 2px;
            border-radius: 50%;
        }
    }
    .nav-list {
        display: flex;
        align-items: center;
        gap: 16px;
        .nav__item {
            border-bottom: 2px solid transparent;
            transition: all 0.2s ease-out;
            &:hover {
                border-bottom: 2px solid $secondary;
                padding-bottom: 5px;
            }
        }
    }
}


</style>