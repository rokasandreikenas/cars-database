const form = document.querySelector("form");

const handleSubmit = (event) => {
  event.preventDefault();
  const title = document.querySelector("input[name=title]");
  const body = document.querySelector("textarea[name=body]");

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title.value,
      body: body.value,
      userId: 147,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((post) => {
      console.log("sukuriau posta: ", post);
    });
};

form.addEventListener("submit", handleSubmit);
