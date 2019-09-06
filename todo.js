const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDOList");

const TODOS_LS = "toDos";

// function filterFn (toDo){
//     return toDo.id === 1
//     array=[];

// }

let toDos = [];
//어레이에 넣어줘서 관리하자

function deleteToDo(event) {
  //   console.log(event.target.parentNode);
  //1.어떤이벤트인지건지 전체 다보고싶으면 dir
  //2.찾았으면 log로보자고
  //3.또는MDN구글링
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  //삭제는 잘되지만 새로고침시 안없어진다
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  //위에서 투두리스트에 자식 li가 하나삭제되면 밑에서 비교해주면되겟지?
  // 백퍼다르니 삭제되겟지
  toDos = cleanToDos;
  //cleanToDos는 이제 4지만 toDos는 3이니까 동기화시키면되겟지
  saveToDos();
  //saveToDos로 저장시키자

  //다른 방법 :필터는 함수하나를 실행시킨다
  //마치 foreach에서 펑션을 실행하는것과 같이 각각의 item에실행
  // 7번 줄 filterFn을 toDos.filter(filterFn)하면 여기서 true 인것만 리턴할거야
  // 7번 에서 toDo의 id가 1일때만 리턴할거라는 말인거지
  // 필터는 어레이의 모든아이템을 통해 함수를 실행하고 true인 아이템을만 가지고 array생성후 리턴할거야
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  //비어있는 li
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  //비어있는 span
  //엘리먼트 생성하고 싶으면 createEle~
  const newId = toDos.length + 1;
  // li에도 아이디를 주기위해 만들엇다.
  //!!! 함수가 두번째 실행되도 재선언과 할당이 되니 하나 하나 추가될때마다 값은 바뀌겟네
  delBtn.innerHTML = "🙅‍";
  delBtn.addEventListener("click", deleteToDo);
  //삭제할때 생성되는 이벤트리스너
  //X 버튼 //inner는 속성
  span.innerText = text;
  //span 내 속성
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  //뭔가 li에 붙이고 싶으면 부모의 엘리먼트 안에 붙여넣는것
  //li에 버튼과 span이 들어가있는거지
  toDoList.appendChild(li);
  //그리고 3번째 줄 toDoList에 li에 담아놨던걸 넣는거지

  const toDoObj = {
    text: text,
    // currentValue(화면에서 내가 타이핑한 값)이 저장되지
    id: toDos.length + 1
    //빈어레이는 0이니 +1해서 첫 아이디 1로 만들어주자.

    //투두리스트를 어레이로 만들려면 오브젝트를 선언해줘야한다.
  };
  toDos.push(toDoObj);
  // 푸쉬로 어레이 안에 엘리먼트 하나를 만들어줄수 있어
  saveToDos();
  //값을 추가하고 난후 (순서중요) 로컬스토리지에 저장한다.
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
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    //사실 할게 없다. null일경우 아무것도 안할거기 때문
    // 그래서 null이 아닐때 한다
    const parseToDos = JSON.parse(loadedToDos);
    parseToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
    //위의 null이 아닐경우 파싱된(parseToDos)것을 toDo라는 파라미터에 넣어 paintToDo->saveToDos로해서
    //기존스토리지에 있을경우 값을 paint로띙 안되지!
  } else {
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
