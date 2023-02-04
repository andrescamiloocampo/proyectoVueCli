<template>
  <main class="MyComent">
    <section class="comments">
      <article class="comentario" v-for="com in comentarios" v-bind:key="com">
        <div class="delete" @click="deletePost(com)">
          <img src="@/assets/delete.png" alt="">
        </div>
        <h1>{{ com.name }}</h1>
        <br />
        <p>{{ com.body }}</p>
        <a href="#">{{ com.email }}</a>
      </article>
    </section>

    <form action="#" class="formulario" @submit.prevent="publish">
      <input type="text" placeholder="Post name" v-model="titulo" required/>
      <input type="email" placeholder="Email" v-model="correo" required/>
      <textarea
        name="Comentario"
        id=""
        cols="30"
        rows="10"
        placeholder="Ingrese su comentario"
        v-model="comentario"
        required
      ></textarea>
      <input class="btn" type="submit" value="Ingresar comentario" />
    </form>
  </main>
</template>

<script>
export default {
  name: "MyComent",
  data() {
    return {
      comentarios: [],
      titulo: "",
      correo: "",
      comentario: "",
      indice:0
    };
  },
  mounted() {
    this.obtenerComentarios();
  },
  methods: {
    obtenerComentarios() {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((data) => {
          this.comentarios = data;
        });
    },
    publish() {
      let publicacion = {
        body: this.comentario,
        email: this.correo,
        id: this.comentarios.length + 1,
        name: this.titulo,
        postId: this.comentarios.length + 1,
      };
      this.comentarios.push(publicacion);
      console.log("Publicado");
      this.comentario = '' 
      this.correo = '' 
      this.titulo = ''
    },
    deletePost(com){
      this.comentarios.splice(com.id-1,1)
    }
  },
};
</script>

<style scoped>
.comments {
  width: 60%;
  height: 40%;
  display: flex;
  background-color: black;
  justify-content: center;
  flex-direction: column;
  margin-left: 20%;
  margin-top: 50%;
  overflow-y: auto;
}

.comments::-webkit-scrollbar-track{
  background: black;
}

.comments::-webkit-scrollbar{
  width: 18px;
}

.comments::-webkit-scrollbar-thumb{
  background-color: white;
  width: 5px;
}
.comentario {
  font-family: sans-serif;
  width: 90%;
  height: 45%;
  background-color: white;
  margin-top: 5%;
  border-radius: 5px;
  margin-left: 3%;
  padding: 2%;
}

.comentario:last-child {
  margin-bottom: 5%;
}
.comentario p::first-letter {
  text-transform: uppercase;
}

.comentario h1::first-letter {
  text-transform: uppercase;
}

.formulario {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 20%;
  box-shadow: 3px 4px 9px -1px rgba(0, 0, 0, 0.81);
}

.formulario input {
  padding: 2%;
  font-size: 18px;
  border: none;
  border-bottom: solid;
  border-width: 0.5px;
}

.formulario textarea {
  resize: none;
  border: none;
}

.formulario .btn {
  background-color: rgb(230, 255, 1);
  font-family: monospace;
  border: none;
  cursor: pointer;
}

.formulario .btn:hover {
  background-color: rgb(79, 226, 91);
  color: white;
}

.delete{
  width: 30px;
  height: 30px;
  margin-left: 95%;
  cursor: pointer;
}

.delete img{
  width: 100%;
  height: 100%;
}
</style>