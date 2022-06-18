import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  const li = document.createElement("li");
  li.innerText = text;

  const div = document.createElement("div");
  div.className = "list-row";

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    const addTarget = completeButton.parentNode.parentNode;
    const text = addTarget.firstChild.textContent;

    // addTarget.textContent = null;
    const addDiv = document.createElement("div");
    addDiv.className = "list-row";
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.parentNode.firstChild.textContent;
      createIncompleteList(text);
    });

    const li = document.createElement("li");
    li.innerText = text;
    console.log(li);
    addDiv.appendChild(backButton);
    li.appendChild(addDiv);
    document.getElementById("complete-list").append(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了から削除
    deleteFromIncompleteList(li);
  });

  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.append(div);
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
