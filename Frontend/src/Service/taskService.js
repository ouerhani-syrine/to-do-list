export async function getAllTasks(){
    const response= await fetch ("http://localhost:8080/api/tasks")
    const data = await response.json()
    return data;
}
export async function getTaskById(id){
    const response = await fetch ("http://localhost:8080/api/tasks/${id}")
    const data = await response.json()
}
export async function createTask(task){
    const createdTask = await fetch("http://localhost:8080/api/tasks",
        {
            method : "Post",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(task)
        }
    )
    const response=createdTask.json();
    return response;
}
export async function updateTask(id,updateTask){
    await fetch(`http://localhost:8080/api/tasks/${id}`,
    {
        method : "PUT",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(updateTask)
    }
    )
}
export async function deleteTask(id){
    await fetch(`http://localhost:8080/api/tasks/${id}`,
    {
        method : "DELETE"
    }
    )
}
export async function filterTask(filter, value) {
    let url = "http://localhost:8080/api/tasks/filter?";
    if (filter === "All")   url += ""
    if (filter === "Title") url += `title=${value}`
    if (filter === "Date")  url += `dateTask=${value}`
    if (filter === "Level") url += `level=${value}`

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    return data;
}