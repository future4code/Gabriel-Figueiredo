let post = {
    
}
const postArray = []
function capturar() {
    post.titulo = document.getElementById("titulo-post").value;
    post.autor = document.getElementById("autor-post").value;
    post.conteudo = document.getElementById("conteudo-post").value;
    

    let blog = document.getElementById("container-de-posts")
    blog.innerHTML += `<h1>${post.titulo}</h1>`
    const inputTitulo = document.getElementById("titulo-post")
    inputTitulo.value = ""

    blog.innerHTML += `<h2>${post.autor}</h2>`
    const inputAutor = document.getElementById("autor-post")
    inputAutor.value = ""

    blog.innerHTML += `<h2>${post.conteudo}</h2>`
    const textarea = document.getElementById("conteudo-post")
    textarea.value = ""

    console.log(post.titulo);
    console.log(post.autor);
    console.log(post.conteudo);
    
    postArray.push(post)
    console.log(postArray);

}
