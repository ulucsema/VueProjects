<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Başlığa Göre Ara" v-model="aranacakKelime" />
      <div class="input-group-append">
       <button class="btn btn-success" type="button" @click="searchTitle">Ara</button>
        <div>
        <button class="btn btn-danger" type="button" @click="refresh">Yenile</button>
        </div>
       </div>
    </div>
  </div>
    <div class="col-md-6">
      <h4>Tutorial Listesi</h4>
      <ul>
        <li class="list-group-item" :class="{ active : index == guncelIndex}" v-for="(tutorial,index) in tutorials" :key="tutorial.id" >
          {{tutorial.title}} - {{tutorial.description}}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="guncelTutorial">
        <h4>Tutorial</h4>
        <div>
          <label><strong>Başlık </strong> </label> {{guncelTutorial.title}} 
        </div>
        <div>
          <label><strong>Açıklama </strong> </label> {{guncelTutorial.description}} 
        </div>
        <div>
          <label><strong>Statü: </strong> </label> {{guncelTutorial.publishedn? "Yayınlandı" : "Yayına hazırlanıyor..." }}
        </div>
        <router-link :to="'/tutorials/' + guncelTutorial.id" class="badge badge-warning">Düzenle</router-link>
      </div>
      <div v-else>
        <br />
        <p></p>
      </div>
    </div>
  </div>  
</template>


<script>
import TutorialDataService from "../services/TutorialDataService"
export default {
    name : "tutorials-list",
    data(){
        return {
            tutorials : [],
            guncelTutorial : null,
            guncelIndex : -1
        };
    },
    methods: {
        tutoriallariGetir() {
            TutorialDataService.getAllTutorials().then(gelenTutorials => {
                this.tutorials = gelenTutorials.data
                console.log(gelenTutorials.data)
            })
            .catch(hata => {
                console.log(hata);
            })
        },
        aktifTutorial(tutorial,index){
        this.guncelTutorial = tutorial;
        this.guncelIndex = index;
        },
        basligaGoreAra(){
          TutorialDataService.findByTitle(this.aranacakKelime).then(aramaSonucuGelenTutorials =>{
           this.tutorials = aramaSonucuGelenTutorials.data;
          }).catch(hata => {
            console.log("hata oluştu :" +hata);
          });
        },
        refresh() {
          this.tutoriallariGetir();
        }
    },
    //sayfa ilk çağrıldığında
    mounted() {
        this.tutoriallariGetir();
    }
};
</script>