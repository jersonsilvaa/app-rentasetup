<template>
    <div class="navbar">
            <div class="nav-content">
                <RouterLink to="/">
                    <span class="icon"><i class='bx-sm bx bx-home-alt-2'></i></span>
                </RouterLink>

                <RouterLink to="/favoritos">
                    <span class="icon"><i class='bx-sm bx bx-heart'></i></span>
                </RouterLink>

                <RouterLink to="/ubicaciones">
                    <span class="icon"><i class='bx-sm bx bx-map'></i></span>
                </RouterLink>

                <RouterLink to="/mensajes">
                    <span class="icon"><box-icon class='bx-sm bx bx-message-square-dots'></box-icon></span>
                </RouterLink>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style lang="less" scoped>
    .navbar {
        width: 100%;
        position: fixed;
        bottom: 0;
        z-index: 2;
        background: var(--white-color);
        border-radius: 15px;

        .nav-content {
            padding: 15px;
            display: flex;
            justify-content: space-between;

            a {
                color: rgb(95, 100, 111);
                &.router-link-exact-active {
                    color: rgb(189, 119, 255);
                }
            }
        }
    }
</style>