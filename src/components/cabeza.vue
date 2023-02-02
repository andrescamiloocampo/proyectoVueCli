<template>
      <main class="cabeza">
        <header>
          <h1>Proyecto Vue</h1>
          <div class="menu" @click="estado = !estado">
            <div class="barra"></div>
            <div class="barra"></div>
            <div class="barra"></div>
          </div>
        </header>
        <section class="ventana" v-show="estado">
        </section>
      </main>
  </template>
  
  <script>
  
  export default {
    name: 'App',

    data(){
      return{
        estado:false
      }
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
  
  header{
    font-family: sans-serif;
    display: flex;
    width: 100%;
    height: 10%;
    background-color:black;
    color: white;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  header h1{
    margin-left: 10px;
  }
  
  header .menu{
    width: 50px;
    height: 50px;
    margin-right: 2%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
  }
  
  header .menu .barra{
    width: 90%;
    height: 8%;
    background-color: white;
    border-radius: 5px;
  }
  
  .ventana{
    display: flex;
    width: 350px;
    height: 400px;
    background-color: red;
    /* position: absolute; */
    margin-left: 73%;
    margin-top: 1%;
    background-color: white;
    box-shadow: 4px 3px 9px -3px rgba(0,0,0,0.69);
  }

  @media(max-width:1000px){
    .ventana{
      width:70%;
      margin-left: 15%;
    }
  }
  </style>