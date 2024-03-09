<template>
    <div class="list row">
       <div class="col md-6">
        Todo Listesi

         <ul>
        <li class="list-group-item " 
        v-for="(todo,siraNumarasi) in todos" :key="siraNumarasi"
         :class="{ active: siraNumarasi == guncelSiraNumarasi }"
          @click="aktifTodo(todo,siraNumarasi)"
        >
        {{todo.userId}} - {{todo.title}}
        </li>
        </ul>
       </div>

       <div class="col-md-6">
      <div v-if="guncelTodo">
        <h4>Todo Detay</h4>
        <div>
          <label><strong>UserId:</strong></label> {{ guncelTodo.userId }}
        </div>
        <div>
          <label><strong>Title:</strong></label> {{ guncelTodo.title }}
        </div>
        <div>
          <label><strong>Status:</strong></label> 
          {{ guncelTodo.completed ? "Yapıldı" : " Yapılmadı..." }}
        </div>

        <router-link :to="'/tutorials/' + guncelTodo.id" 
        class="badge badge-warning">Düzenle</router-link>
      </div>
      <div v-else>
        <br />
        <p></p>
      </div>
    </div>
    </div>
</template>

<script>
import TodoDataService from "../services/TodoDataService";

export default {
    name : "todos-list",
    //html yani template tarafında kullanmak isteyeceğim değişkenler
    //objeler arraylar data içinde tanımlanır. 
    data(){
    return {
        todos : [],
        guncelSiraNumarasi : -1,
        guncelTodo : null
    };
    },
     methods : {
    todolariGetir()
    {
       TodoDataService.getAllTodos().then(gelenTodolar => {
           this.todos = gelenTodolar.data;
       }).catch(hata => {
        console.log("hata oluştu : " +hata);
       })
    },
    aktifTodo(todo,siraNumarasi)
    {
      this.guncelTodo = todo,
      this.guncelSiraNumarasi = siraNumarasi
    }

    },
    mounted()
    {
        this.todolariGetir();
    }
}

</script>