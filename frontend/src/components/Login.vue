<template>
    <div class="center column">
        <h2 class="ui header">
            <div class="content">
                Log-in with
            </div>
        </h2>
        <form class="ui large form">
            <button class="ui facebook button">
                <i class="facebook icon"></i>
                Facebook
            </button>
            <button class="ui twitter button">
                <i class="twitter icon"></i>
                Twitter
            </button>
            <button class="ui vk button">
                <i class="vk icon"></i>
                VK
            </button>

            <div class="ui error message"></div>

        </form>

    </div>
</template>

<script>
    export default {
        name: 'login'
    }
</script>