<template>
  <input type="text" id="buscador" placeholder="Buscar publicación" v-model="buscado" @change="buscar" />
  <section class="publicaciones">
    <article class="publicacion" v-for="publicacion in publicaciones" v-bind:key="publicacion">
      <h1 :class="{ found: publicacion.active }">{{ publicacion.name }}</h1>
      <br /><br />
      <p>{{ publicacion.body }}</p>
      <h2>
        {{
          publicacion.indice == 0
          ? "0" + publicacion.indice
          : publicacion.indice
        }}
      </h2>
    </article>
  </section>
  <button @click="publicar = !publicar">Hacer publicación</button>

  <section class="formulario" v-show="publicar">
    <form action="#" @submit.prevent="publishB">
      <input type="text" placeholder="Titulo:" v-model="titulo" id="texto" required/>
      <textarea name="" id="" cols="30" rows="10" v-model="cuerpo" placeholder="Ingrese su publicacion" required>
      </textarea>
      <input type="submit" value="Publicar" @click="publishB" id="publicar" />
    </form>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      titulo: "",
      cuerpo: "",
      indice: 0,
      buscado: "",
      encontrado: true,
      publicaciones: [
        {
          name: "Bienvenido",
          body: "Realice sus publicaciones aqui",
          indice: 0,
          active: false
        },
      ],
      publicar: false,
    };
  },
  methods: {
    publishB() {
      this.indice++;
      if (this.indice < 10) {
        this.indice = "0" + this.indice;
      }
      let content = {
        name: this.titulo,
        body: this.cuerpo,
        indice: this.indice,
      };
      this.publicar = !this.publicar;
      this.publicaciones.push(content);
      this.titulo = "";
      this.cuerpo = "";
    },
    buscar() {
      let busqueda = this.buscado;
      this.publicaciones.forEach(function (publicacion) {
        // (publicacion.name == busqueda)?publicacion.active = true : publicacion.active = false
        if (publicacion.name == busqueda) {
          publicacion.active = true
        } else {
          publicacion.active = false
        }
      });
    },
  },

  mounted() {
  }
};
</script>

<style scoped>
#buscador {
  font-size: 18px;
  padding: 1%;
  margin-top: 8%;
  margin-bottom: 1%;
  border-radius: 50px;
  margin-left: 10%;
  width: 77.8%;
}

.publicaciones {
  width: 80%;
  height: 40%;
  margin-left: 10%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  overflow-y: auto;
  background-color: lightgray;
}

.publicaciones::-webkit-scrollbar-track {
  background: #fff;
}

.publicaciones::-webkit-scrollbar {
  width: 1px;
}

.publicaciones::-webkit-scrollbar-thumb {
  background-color: black;
}

.publicacion {
  width: 30%;
  height: 80%;
  margin-left: 2%;
  margin-bottom: 2%;
  margin-top: 2%;
  background-color: white;
  box-shadow: 3px 4px 9px -1px rgba(0, 0, 0, 0.81);
  font-family: sans-serif;
  text-align: center;
  overflow-y: auto;
}

.publicacion::-webkit-scrollbar-track {
  background: white;
}

.publicacion::-webkit-scrollbar {
  width: 1px;
}

.publicacion::-webkit-scrollbar-thumb {
  background-color: black;
}

.publicacion h1 {
  margin-top: 10%;
}

.publicacion p {
  margin: 2%;
}

.publicacion h2 {
  font-size: 30px;
  margin-top: 40%;
}

button {
  background-color: rgb(230, 255, 1);
  font-family: monospace;
  border: none;
  font-size: 20px;
  margin-left: 10%;
  padding-left: 8%;
  padding-right: 8%;
  padding-top: 1%;
  padding-bottom: 1%;
  margin-top: 2%;
}

button:hover,form #publicar:hover{
  background-color: rgb(79, 226, 91);
  color: white;
  cursor: pointer;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

form textarea {
  resize: none;
  height: 64%;
  border: none;
}

form #texto {
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  border: none;
  border-bottom: solid;
  border-width: 1px;
  border-color: lightgray;
}

form #publicar {
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  font-family: monospace;
  font-size: 22px;
  border: none;
  margin-bottom: 0%;
  cursor: pointer;
  background-color: rgb(230, 255, 1);
}

.formulario {
  width: 50%;
  height: 25%;
  margin-left: 25%;
  margin-top: -35%;
  display: flex;
  background-color: #fff;
  box-shadow: 4px 3px 9px -3px rgba(0, 0, 0, 0.69);
  font-size: 24px;
  font-family: monospace;
  position: relative;
}

.found {
  color: rgb(79, 226, 91);
}

@media (max-width: 800px) {
  .publicaciones {
    height: 20%;
    width: 80%;
    margin-left: 10%;
  }

  .publicacion {
    width: 80%;
    height: 100%;
    margin-left: 10%;
  }

  .publicacion h2 {
    margin-top: 45%;
  }

  .formulario{
    background-color:none;
  }
  
}
</style>