<template>
  <div class="home">

    <div class="ui four cards">
      <div class="ui card" v-for="group in groups">
        <div class="image dimmable">
          <div class="ui blurring inverted dimmer transition hidden">
            <div class="content">
              <div class="center">
                <div class="ui teal button">Add Friend</div>
              </div>
            </div>
          </div>
          <img src="../assets/image.png" alt="">
        </div>
        <div class="content">
          <div class="header">Title</div>
          <div class="meta">
            <a class="group">Meta</a>
          </div>
          <div class="description">One or two sentence description that may go to several lines</div>
        </div>
        <div class="extra content">
          <a class="right floated created">Arbitrary</a>
          <a class="friends">
            Arbitrary</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'home',
    data: function() {
        return {
          groups: [0, 1, 2, 3]
        }
    }
}
</script>
