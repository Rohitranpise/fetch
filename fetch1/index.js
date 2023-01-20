const response = document.querySelector("#data");

const abc = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    return data;
  });
console.log(abc);

//
const ab = async () => {
  const fapi = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await fapi.json();
  console.log(data);
  data.map((element) => {
    console.log(element.id);
  });
};

response.addEventListener("click", () => {
  ab();
});
