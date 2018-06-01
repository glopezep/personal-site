<template lang="pug">
  section.landing
    .overlay
    .landing-container
      h1.title Guillermo López
      h2.sub-title Javascript Developer
      p.description
        | I am a Developer with experience in Node.js and JavaScript
        | with DevOps Skills,currently making modules, CLI tools, and apps.
        | My favorite technologies right now are Node.js, Python, React NextJS, VueJS, NuxtJS
        | Internet Of Things, Docker, Ansible, Linux, Unix, AWS and Digital Ocean.
      .icons
        a(href="https://github.com/glopezep" class="fa fa-github icon-link" aria-hidden="true")
        a(href="https://www.npmjs.com/~glopezep" class="icon-link") npm

</template>

<script>

export default {

}
</script>

<style lang="scss">
  .landing {
    align-items: center;
    background-image: url('/img/background.png');
    background-size: cover;
    background-position: 50% bottom;
    display: flex;
    height: 100vh;
    justify-content: center;
  }

  .landing-container {
    padding: 2em;
    text-align: center;
    position: relative;
    z-index: 2
  }

  .title {
    font-size: 2.75em;
    font-weight: 600;
  }

   .sub-title {
    font-size: 1.75em;
    font-weight: 100;
  }

  .description {
    font-size: 1.25em;
    margin: 1.5em 0;
  }

  .overlay {
    background-color: black;
    opacity: .85;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .icon-link {
    color: #fff;
    text-decoration: none;
    font-size: 2.2em;
    margin: .5em;
  }

  .icon-link:hover {
    text-decoration: underline;
  }

  @media all and (min-width: 600px) {
    .title {
      font-size: 3.75em;
      font-weight: 600;
    }

    .sub-title {
      font-size: 2.5em;
      font-weight: 100;
    }

    .description {
      font-size: 1.5em;
      margin: 1.5em 0;
    }
  }

</style>
