<template>
  <div class="container">
    <h1>Three equal width columns</h1>
    <p>Note: Try to add a new div with class="col" inside the row class - this will create three equal-width columns.</p>
    <div class="row">
      <div class="col-6">
        <div class="menu">
          <img src="@/assets/dog1.jpeg" width="100%">
          <button type="button">打開</button>
        </div>
      </div>
      <div class="col-6">
        <div class="menu">
          <img src="@/assets/dog2.jpeg" width="100%">
          <button type="button">打開</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">

.menu {
  padding: 2px;
  position: relative;
  img {
    max-height: 100px;
  }
  &::before {
    content: "未開放";
    position: absolute;
    color:#fff;
    top: 50%;
    left: 50%;
    font-size: 18px;
    transform: translateX(-50%) translateY(-50%);
    z-index: 9999;
  }
  &::after {
    content: "";
    position: absolute;
    color:#fff;
    background-color: rgba($color: #000000, $alpha: 0.6);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
}
</style>
