const api = {
    addTodo(todo) {
        console.log("API")
        console.log(todo)
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Api")
                resolve(true)
            }, 1000)
        })
    }
}
export default api