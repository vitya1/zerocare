<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>

    <div class="ui four cards">
      <div class="ui card">
        <div class="image dimmable">
          <div class="ui blurring inverted dimmer transition hidden">
            <div class="content">
              <div class="center">
                <div class="ui teal button">Add Friend</div>
              </div>
            </div>
          </div>
          <img src="/dist/assets/images/image.png" alt="">
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
      <div class="ui card">
        <div class="blurring dimmable image">
          <div class="ui dimmer transition hidden">
            <div class="content">
              <div class="center">
                <div class="ui inverted button">Call to Action</div>
              </div>
            </div>
          </div>
          <img src="/dist/assets/images/image.png">
        </div>
        <div class="content">
          <a class="header">Name</a>
          <div class="meta">
            <span class="date">Date</span>
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="users icon"></i>
            Users
          </a>
        </div>
      </div>
      <div class="ui card">
        <div class="blurring dimmable image">
          <div class="ui dimmer transition hidden">
            <div class="content">
              <div class="center">
                <div class="ui inverted button">Call to Action</div>
              </div>
            </div>
          </div>
          <img src="/dist/assets/images/image.png">
        </div>
        <div class="content">
          <a class="header">Name</a>
          <div class="meta">
            <span class="date">Date</span>
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="users icon"></i>
            Users
          </a>
        </div>
      </div>
      <div class="ui card">
        <div class="blurring dimmable image">
          <div class="ui dimmer transition hidden">
            <div class="content">
              <div class="center">
                <div class="ui inverted button">Call to Action</div>
              </div>
            </div>
          </div>
          <img src="/dist/assets/images/image.png">
        </div>
        <div class="content">
          <a class="header">Name</a>
          <div class="meta">
            <span class="date">Date</span>
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="users icon"></i>
            Users
          </a>
        </div>
      </div>
  </div>
  </div>
</template>
