const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDOList");

const TODOS_LS = "toDos";

function paintToDo(text) {
  const li = document.createElement("li");
  //비어있는 li
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "🙅‍";
  //X 버튼 //inner는 속성
  const span = document.createElement("span");
  //비어있는 span
  //엘리먼트 생성하고 싶으면 createEle~
  span.innerText = text;
  //span 내 속성
  li.appendChild(span);
  li.appendChild(delBtn);
  //뭔가 li에 붙이고 싶으면 부모의 엘리먼트 안에 붙여넣는것
  //li에 버튼과 span이 들어가있는거지
  toDoList.appendChild(li);
  //그리고 3번째 줄 toDoList에 li에 담아놨던걸 넣는거지
}
//엄청간딴한걸 할거다. li안에 id를 가지고 text만들고

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
  // 엔터를 누르고 todo를 생성하고 삭제하고 싶을때
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
    //사실 할게 없다. null일경우 아무것도 안할거기 때문
    // 그래서 null이 아닐때 한다
  } else {
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
