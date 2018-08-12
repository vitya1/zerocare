<template>

    <div>
        Group number {{id}}
    </div>
</template>

<script>
    export default {
        name: 'group-view',
        data: function() {
            return {
                id: this.$route.params.id,
            }
        }
    }
</script>