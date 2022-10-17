<template>
    <div class='card'>
        <div class='card-content'>
            <span class='tag-card'>{{ country }}</span>
            <div class='footer-card'>
                <div class='favorite'>
                    <button><i class='bx bx-heart'></i></button>
                </div>
                <div class="footer-card-content">
                    <div class='footer-card-left'>
                        <div class='title'>
                            <h2>{{ title }}</h2>
                        </div>
                        <div class='user'>
                            <div class='content-user'>
                                <div class='content-img'>
                                    <img :src='userImg' alt='Imagen de perfíl'>
                                </div>
                                <div class='username'>{{ username }}</div>
                            </div>
                            <div class='stars'>
                                <span><i class='bx bxs-star'></i></span>
                                <span><i class='bx bxs-star'></i></span>
                                <span><i class='bx bxs-star'></i></span>
                                <small>{{ stars }} estrellas</small>
                            </div>
                        </div>
                    </div>
                    <div class='footer-card-right'>
                        <div class='price'>
                            <h2>${{ price }} varos</h2>
                        </div>
                        <div class='setup'>
                            <div class='setup-item'><i class='bx bx-desktop'></i> 2</div>
                            <div class='setup-item'><i class='bx bxs-chip'></i> 1</div>
                            <div class='setup-item'><i class='bx bxs-keyboard'></i> 1</div>
                        </div>
                    </div>
                </div>
                <img :src='cardImg' alt='setup gamer'>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardApp',
    props: {
        country: {
            type: String,
            default: 'Unpalandia'
        },

        title: {
            type: String,
            default: 'Setup gamer'
        },

        userImg: {
            type: String,
            default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
        },

        cardImg: {
            type: String,
            default: 'https://tripisia.id/assets/images/NoImage.png'
        },

        price: {
            type: String,
            default: 500
        },

        username: {
            type: String,
            default: 'Juanito alcachofa'
        },

        stars: {
            type: String,
            default: 0
        }
    }
}
</script>

<style lang='less' scoped>
.card {
    margin: 12px;

    .card-content {
        box-shadow: 0px 5px 10px -2px rgba(74, 54, 251, 0.2);

        .footer-card {
            border-radius: 20px;
            overflow: hidden;

            .favorite {
                position: absolute;
                bottom: 40%;
                left: 80%;
                z-index: 1;
                align-items: center;

                button {
                    box-shadow: 0px 5px 20px -2px rgba(74, 54, 251, 0.2);
                    color: red;
                    border: none;
                    outline: none;
                    border-radius: 50%;
                    background: #fff;
                    padding: 8px;
                    font-size: 1.3rem;
                }
            }

            .footer-card-content {
                position: absolute;
                bottom: 0;
                width: 100%;
                display: flex;
                background: #fff;
                align-items: center;
            }

            .footer-card-right {
                width: 40%;
                display: flex;
                flex-direction: column;
                align-items: center;

                .setup {
                    display: flex;
                    justify-content: space-between;
                    width: 80%;

                    .setup-item {
                        color: rgb(209, 183, 234);
                        display: flex;
                        justify-content: space-between;
                    }
                }
            }

            .footer-card-left {
                .title {
                    margin: 6px;
                    text-align: start;
                }

                .user {
                    display: flex;
                    flex-direction: column;

                    .stars {
                        margin: 10px;
                        text-align: start;
                        display: flex;
                        align-items: center;
                        color: rgba(225, 207, 241);

                        small {
                            margin-left: 10px;
                        }

                        i {
                            color: rgb(215, 176, 69);
                        }
                    }

                    .content-user {
                        display: flex;
                        align-items: center;
                        margin: 10px;

                        .username {
                            margin-left: 10px;
                        }
                    }
                }

                display: flex;
                flex-direction: column;
                width: 60%;

                .content-img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }

        border-radius: 20px;
        overflow: hidden;
        width: 100%;
        height: 300px;
        position: relative;

        .tag-card {
            margin: 20px;
            margin-left: -160px;
            position: absolute;
            background: rgb(244, 242, 243);
            padding: 8px;
            box-shadow: 0px 5px 10px -2px rgba(74, 54, 251, 0.2);
            z-index: 1;
            top: 0;
            border-radius: 12px;
            font-size: 0.8rem;
        }

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
}
</style>