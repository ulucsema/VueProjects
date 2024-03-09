import http from "../httpcommon";


class TodoDataService {

getAllTodos()
{
    //https://jsonplaceholder.typicode.com/todos
    return http.get("/todos");
}

getTodoDetail(id)
{
    return http.get(`/todos/${id}`);
}


}

export default new TodoDataService();