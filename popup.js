// DOM要素の取得
const loadingMessage = document.getElementById('loading-message');
const errorMessage = document.getElementById('error-message');
const todoContent = document.getElementById('todo-content');
const todoTitle = document.getElementById('todo-title');
const todoStatus = document.getElementById('todo-status');

// APIエンドポイント
const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

/**
 * ToDoデータを取得して表示する
 */
async function fetchAndDisplayTodo() {
  try {
    // ローディング表示
    showLoading();
    
    // API呼び出し
    const response = await fetch(API_URL);
    
    // レスポンスチェック
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // JSONデータの取得
    const todoData = await response.json();
    
    // データを表示
    displayTodoData(todoData);
    
  } catch (error) {
    console.error('Error fetching todo:', error);
    showError();
  } finally {
    hideLoading();
  }
}

/**
 * ToDoデータをUIに反映する
 * @param {Object} data - ToDoデータ
 */
function displayTodoData(data) {
  // タイトルの設定
  todoTitle.textContent = data.title;
  
  // ステータスの設定
  if (data.completed) {
    todoStatus.textContent = '完了';
    todoStatus.className = 'todo-status completed';
  } else {
    todoStatus.textContent = '未完了';
    todoStatus.className = 'todo-status uncompleted';
  }
  
  // ToDoコンテンツを表示
  todoContent.classList.add('show');
}

/**
 * ローディング表示
 */
function showLoading() {
  loadingMessage.classList.add('show');
  errorMessage.classList.remove('show');
  todoContent.classList.remove('show');
}

/**
 * ローディング非表示
 */
function hideLoading() {
  loadingMessage.classList.remove('show');
}

/**
 * エラー表示
 */
function showError() {
  errorMessage.classList.add('show');
  todoContent.classList.remove('show');
}

// ポップアップが開かれたときに実行
document.addEventListener('DOMContentLoaded', fetchAndDisplayTodo);
