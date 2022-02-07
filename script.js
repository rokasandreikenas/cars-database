fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    console.log(posts);
    renderPosts(posts);
  });

function renderPosts(posts) {
  posts.forEach((post) => {
    const divNode = document.createElement("div");

    const anchorNode = document.createElement("a");
    anchorNode.href = "#";
    anchorNode.innerText = post.id;

    const spanNode = document.createElement("span");
    spanNode.innerText = post.title;

    divNode.append(anchorNode);
    divNode.append(spanNode);
    divNode.setAttribute("class", "post");

    document.body.append(divNode);
  });
}
