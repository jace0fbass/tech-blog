const createPostForm = document.querySelector(".form-control")

const createPost = (event) => {
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
                document.appendTo("/posts").location.replace("/posts")
            } else {
                alert("Failed to create post.")
            }
        }).catch(err => alert(err))
    }
    console.log(newPost)
}
createPostForm.addEventListener("submit", createPost)