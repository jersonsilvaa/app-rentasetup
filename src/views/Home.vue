<script setup>
    import Card from '../components/Card.vue';
</script>

<template>
  <main>
    <Card
      cardImg="https://i.blogs.es/253081/desktop-01/1366_2000.jpeg"
      country="Barcelona"
      title="Setup dev"
      username="devsilva"
      stars="5"
      price="150"
      userImg="https://pps.whatsapp.net/v/t61.24694-24/291483763_3316118818675085_5448892912731441282_n.jpg?ccb=11-4&oh=01_AdSaKTdTazam_zyKFnMVe1Hs7duTfzmZFxeaFltiSfEq9Q&oe=635AA205"
      :key="index" v-for="(index) in 5" />
  </main>
</template>
