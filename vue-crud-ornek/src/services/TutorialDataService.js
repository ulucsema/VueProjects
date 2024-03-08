import http from "../http-common"

class TutorialDataService {

    getAllTutorials() {
        //http://85.159.71.66:8080/api/tutorials
        //[{"id":1,"title":"tutorial",}]
        return http.get("/tutorials");
    }
    //detayını getiren fonksiyon
    getTutorialDetail(id) {
        //http://85.159.71.66:8080/api/tutorials/1
        return http.get(`/tutorials/${id}`);
    }
     //{id:}
     //yeni bir tutorial ekler
     createTutorial(data) {
        //ilgili servise göndermiş olduğumuz json objesi
        //backend servisinde nesneye dönüştürülüp data base yazılıyor
        //database yazıldıktan sonra bize yine json olarak döndürülüyor
       return http.post("/tutorials",data);
     }
     updateTutorial(id,data) {
        //data {"id":11,"title","testtest","description":"testtestdesc","published":false}
       return http.put(`/tutorials/${id}`,data);
     } 
     deleteTutorial(id){
        //http://85.159.71.66:8080/api/tutorials/1
        return http.delete(`/tutorial/${id}`);
     }
     findByTitle(title) {
        return http.get(`/tutorial/${title}`);
     }
}

export default new TutorialDataService();