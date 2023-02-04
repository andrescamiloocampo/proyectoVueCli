<template>
  <main>
    <cabeza></cabeza>
    <section class="encabezado">
      <article id="primero">
        <h1 class="title" style="font-size: 28px">Título provisional</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          magni a nemo, ut nihil quae expedita libero numquam optio
          reprehenderit repudiandae sed explicabo suscipit dolorem accusamus hic
          ipsam! Molestiae, ipsa. Placeat a esse illo sapiente fuga voluptatum
          iure incidunt fugit quae blanditiis delectus nemo commodi optio, quos,
          facilis rem. Esse, dolorum minima ut sequi similique ratione
          distinctio placeat consequatur sit. Perferendis tenetur, atque quod
          aliquam distinctio, commodi corrupti numquam quia rem quibusdam
          adipisci qui officiis provident! Unde nihil veritatis nisi eligendi,
          accusamus voluptatibus. Molestias officiis ipsam vero. Magni, vero
          aut! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          nesciunt tempora quo quisquam, temporibus quibusdam rerum voluptatum
          sint
        </p>
          <button @click="bajar">Adelante</button>
      </article>
      <article id="tercero">
        <img src="./assets/imagenPortada.jpg" alt="imagen" />
      </article>
    </section>
    <bodyArticles></bodyArticles>
    <MyComent></MyComent>
    <footer></footer>
  </main>
</template>

<script>
import cabeza from "./components/cabeza.vue";
import MyComent from "./components/MyComent.vue";
import bodyArticles from "./components/bodyArticles.vue"
export default {
  name: "App",
  components: {
    cabeza,
    MyComent,
    bodyArticles
  },
  methods:{
    bajar(){
      window.scroll({
        top:900,
        behavior: 'smooth'
      })
    }
  }
};
</script>

<style>
* {
  margin: 0%;
  padding: 0%;
}

html,
body {
  width: 100%;
  height: 100%;
}

main {
  width: 100%;
  height: 1200px;
  min-width: 500px;
}

.encabezado {
  width: 80%;
  height: 40%;
  margin-left: 5%;
  margin-top: 5%;
  box-shadow: 4px 3px 9px -3px rgba(0, 0, 0, 0.69);
  padding: 5%;
  display: flex;
  flex-direction: row;
}

.encabezado article {
  background-color: black;
  margin-right: 5%;
}

#primero {
  width: 50%;
  height: 90%;
  margin-bottom: 5%;
  background-color: white;
  font-family: sans-serif;
  overflow-y:auto;
}

#tercero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#primero button{
  font-size: 20px;
  padding-top: 3%;
  padding-bottom: 3%;
  padding-left: 30%;
  padding-right: 30%;
  cursor:pointer;
  background-color: rgb(230, 255, 1);
  font-family: monospace;
  border: none;
  margin-top: 10%;
}

#primero button:hover{
  background-color: rgb(79, 226, 91);
  color: white;
}

@media (max-width: 1000px) {
  #primero{
    order:2;
    width: 90%;
    margin-left: 5%;
    margin-top: 5%;
  }
  #tercero{
    order:1;
  }
  .encabezado{
    flex-direction: column;
    height: 65%;
  }
}

footer{
  width: 100%;
  height: 80px;
  background-color: black;
}
</style>
