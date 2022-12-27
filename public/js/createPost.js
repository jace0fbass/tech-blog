const createPost = document.querySelector(".form-control")
console.log(createPost)
const signUp = (event) => {
    event.preventDefault()
    
    const title = document.querySelector("#exampleFormControlInput1").value.trim()

    const content = document.querySelector("#exampleFormControlTextarea1").value.trim()

    if (title && content) {
        let newPost = { title, content }
        console.log(newPost)
        fetch("/api/users/posts", {
            method: "POST",
            body: JSON.stringify(newPost),
            headers: { "Content-Type": "application/json" },
        }).then((response) => {
            if (response.ok) {
                document.location.replace("/posts")
            } else {
                alert("Failed to create post.")
            }
        }).catch(err => alert(err))
    }
}
createPost.addEventListener("submit", createPost)