<template>
  <div id="app">
    <div class="ui secondary menu">
      <router-link class="item" to="/">Home</router-link>
      <router-link class="item" to="/about">About</router-link>
      <router-link class="item" to="/add">New group</router-link>

      <div class="right menu">
        <a class="item">Login</a>
      </div>
    </div>
    <router-view/>
  </div>
</template>
