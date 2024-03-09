<template>
    <div v-if="guncellencekTodo" class="submit-form">
        <div class="form-group">
            <label for="userId" >UserId : </label>
            <input type="text" 
            class="form-control"
             id="userId" required 
             v-model="guncellencekTodo.userId"
             name="userId" />
        </div>
        <div class="form-group">
            <label for="title" >Title : </label>
            <input type="text" 
            class="form-control"
             id="title" 
              v-model="guncellencekTodo.title"
            required name="title" />
        </div>
        <br />
        <button class="btn btn-success" >Güncelle </button>
         <button class="btn btn-danger"  onclick="return confirm('silmek istediğinizden emin misiniz?');">Sil </button>
    </div>
</template>
<script>
import TodoDataService from "../services/TodoDataService"
export default {
    name : "todo-detail",
    data(){
        return{
            guncellencekTodo : null,
        }
    },
    methods: {
      todoDetayGetir(id){
        TodoDataService.getTodoDetail(id).then(gelenTodo => {
            //{"id":id,"title":"testtest","description":"testtestdesc","published":false}
            this.guncellencekTodo = gelenTodo.data;
        })
      },

    },
    mounted() {
        //bana bir önceki yani tutoriaListteki tıklamış olduğum tutorial ın id si gelecek
        this.tutorialDetayGetir(this.$route.params.id);
    }
    
}
</script>