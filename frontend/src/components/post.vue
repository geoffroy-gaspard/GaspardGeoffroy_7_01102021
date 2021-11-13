<template>
    <div class="posts">
        <div :key="index" v-for="(posts, index) in posts" class="allPosts card text-center">
            <h3 class="post_card_title card-header">{{ posts.title }}</h3>
            <div class="attachment card-body"><img class="attachment_link" :src="posts.attachment" alt="post image"></div>
            <p class="post_card_content card-text">{{ posts.content }}</p>
            <div class="card-footer text-muted">{{ posts.createdAt }}</div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'post',
        data() {
            return {
                posts: null,
            }
        },
        mounted() {
            axios
                .get("http://localhost:3000/posts")
                .then((res) => {
                    this.posts = res.data;
                    console.log(this.posts)
                });
        }
    }
</script>
<style scoped>
    .posts {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .allPosts { 
        width: 70%;
        margin: 3% 0 3% 0;
        background-color: white;
        min-height: 240px;
        height: auto;
        border: 5px solid white;
        border-radius: 20px/20px;
        box-shadow: 0px 0px 12px 3px #d2d2d2;
    }

    .post_card_title {
        display: flex;
        margin: 5px 0 5px 0;
        justify-self: center;
    }

    .attachment {
        width: auto;
        height: 150px;
        max-height: 60%;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    .attachment_link {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    .post_card_content {
        margin: 5px 0 5px 0;
    }

    .post_card_creation {
        font-size: 9px;
    }
</style>