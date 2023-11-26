const list = document.querySelector(".list");
const inputVal = document.querySelector(".inputVal");

async function getUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });
  datas = await response.json();

  return datas;
}

async function iterateFront() {
  let users = await getUsers();
  users.forEach((user) => {
    let li = document.createElement("li");
    li.innerHTML = user.name;
    list.appendChild(li);
  });
}

interateFront();

inputVal.addEventListener("input", async (event) => {
  console.log(event.target.value);
});
