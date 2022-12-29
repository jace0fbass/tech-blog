const createPostForm = document.getElementById("createBlog")

const createPost = async (event) => {
    event.preventDefault()
    
    const title = document.querySelector("#exampleFormControlInput1").value.trim()
    
    const content = document.querySelector("#exampleFormControlTextarea1").value.trim()
    console.log(title)
    console.log(content)

    if (title && content) {
        let newPost = { title, content }

        console.log(newPost)
       await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify(newPost),
            headers: { "Content-Type": "application/json" },
        }).then((response) => {
            if (response.ok) {
                document.location.replace("/")
            } else {
                alert("Failed to create post.")
            }
        }).catch(err => alert(err))
    }
}

createPostForm.addEventListener("submit", createPost)