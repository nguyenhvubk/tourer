<template>
  <div
    class="column is-one-quarter-desktop is-one-third-tablet is-one-quarter-widescreen"
    @click="toDetails"
  >
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">
          {{ vehicleFullName }}
        </p>
      </div>
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="../../assets/bmw.jpg"
            :alt="vehicleFullName"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <div class="card">
        <footer class="card-footer">
          <a @click="toDetails" class="card-footer-item">Details</a>
          <a class="card-footer-item">Edit</a>
          <a class="card-footer-item">Delete</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['vehicle'],
  methods: {
    toDetails () {
      this.$router.push('/vehicles/' + this.vehicle.id)
    }
  },
  computed: {
    vehicleFullName() {
      return this.vehicle.brand + ' ' + this.vehicle.name;
    }
  }
};
</script>
