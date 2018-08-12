<template>
  <div class="home">

    <div class="ui four cards">
      <div class="card" v-for="group in groups">
        <div class="image">
            <img src="../assets/image.png">
        </div>
        <div class="content">
          <div class="header">
              <router-link :to="'/view/' + group">
                Matt Giampietro
              </router-link>
          </div>
          <div class="meta">
            <a>Friends</a>
          </div>
          <div class="description">
            Matthew is an interior designer living in New York.
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
            Joined in 2013
          </span>
          <span>
            <i class="user icon"></i>
            75 Friends
          </span>
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
