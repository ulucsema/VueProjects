<template>
  <div v-if="guncellenecekTutorial" class="submit-form">
    <div class="form-group">
      <label for="title"> Başlık </label>
      <input type="text" class="form-control" id="title" v-model="guncellenecekTutorial.title" required name="title" />
    </div>
    <div class="form-group">
      <label for="description"> Açıklama </label>
      <input type="text" class="form-control" id="description" v-model="guncellenecekTutorial.description" required name="description" />
    </div>

    <br />

<button type="button" class="btn btn-success" @click="tutorialGuncelle">Güncelle </button>
<button type="button" class="btn btn-danger" @click="tutorialSil" onclick="return confirm('Silmek istediğinizden emin misiniz?');">Sil </button>

  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService"
export default {
  name: "tutorial-detail",
  data() {
    return {
      guncellenecekTutorial: null,
    }
  },
  methods: {
    tutorialDetayGetir(id) {
      TutorialDataService.getTutorialDetail(id).then(gelenTutorial => {
        this.guncellenecekTutorial = gelenTutorial.data;
      })
    },
    tutorialGuncelle(){
        console.log("guncellenecekTutorial id: " +this.guncellenecekTutorial.id);
        console.log("guncellenecekTutorial data: " +this.guncellenecekTutorial);
        TutorialDataService.updateTutorial(this.guncellenecekTutorial.id,this.guncellenecekTutorial).then(guncellenmisTutorial => {
            console.log(guncellenmisTutorial.data);
        }).catch(hata => {
            console.log("hata oluştu :" +hata);
        })
    },
    tutorialSil(){
   if(confirm("Silmek istediğinizden emin misiniz")){
       TutorialDataService.deleteTutorial(this.guncellenecekTutorial.id).then(response => {
           console.log(response);
           this.$router.push({ name: "tutorials"});
       }).catch(error => {
           console.log(error);
       });
   } else {
       console.log("Silme Gerçekleşmedi");
   }
}

  },
  mounted() {
    //bana bir önceki yani tutorialListteki tıklanmış olan tutorialın id'si gelicek
    this.tutorialDetayGetir(this.$route.params.id);
  },
}
</script>
