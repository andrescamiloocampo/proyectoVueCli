<template>
  <main>
    <cabeza></cabeza>
    <section class="encabezado">
      <article id="primero">
        <img src="src\imagenProtada.jpg" alt="imagen">
      </article>
      <article id="segundo"></article>
      <article id="tercero"></article>
    </section>
    <MyComent></MyComent>
  </main>
</template>

<script>
import cabeza from './components/cabeza.vue'
import MyComent from './components/MyComent.vue'
export default {
  name: 'App',
  components: {
    cabeza,
    MyComent
  }
}
</script>

<style>
  *{
    margin: 0%;
    padding: 0%;
  }
  
  html,body{
    width: 100%;
    height: 100%;
  }

  main{
    width: 100%;
    height: 1200px;
    min-width: 500px;
  }

  .encabezado{
    width: 80%;
    height: 40%;
    margin-left: 5%;
    background-color: white;
    margin-top: 5%;
    box-shadow: 4px 3px 9px -3px rgba(0,0,0,0.69);
    padding: 5%;
  }

  .encabezado article{
    background-color: black;
    margin-right:5%;
  }

  #primero{
   width: 50%;
   height: 60%;
   margin-bottom: 4.5%;
  }

  /* #primero img{
    width: 100%;
  } */

  #segundo{
    width: 50%;
    height:30%;
  }

  #tercero{
    width: 45%;
    height: 100%;
    margin-left:55%;
    margin-top: -44.5%;
    z-index: 2;
  }

  @media(max-width: 600px){
    #tercero{
      margin-top: -110%;
      height: 90%;
    }
  }
</style>
