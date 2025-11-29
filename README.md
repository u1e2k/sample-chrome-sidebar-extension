# 📝 Simple ToDo Viewer - Chrome拡張機能

## 概要

`https://jsonplaceholder.typicode.com/todos/1` のエンドポイントからToDoデータを取得し、整形された状態で拡張機能のサイドバーに表示するChrome拡張機能です。

外部APIへのGETリクエストと、Chrome拡張機能のUI実装のテストを目的としています。

## 機能

- JSONPlaceholder APIからToDoデータを取得
- 取得したToDoのタイトルとステータスを見やすく表示
- 完了/未完了のステータスを視覚的に区別（色分け + アイコン）
- ローディング状態とエラーハンドリング

## ファイル構成

```
/
├── manifest.json   # Chrome拡張機能の設定ファイル
├── popup.html      # ポップアップのUI
├── popup.css       # スタイルシート
├── popup.js        # APIロジック
└── README.md       # 本ファイル
```

## 技術仕様

### manifest.json

| 項目 | 内容 |
|:---|:---|
| **manifest_version** | 3 (V3形式) |
| **name** | Simple ToDo Viewer |
| **version** | 1.0.0 |
| **side_panel** | `default_path`: "popup.html" |
| **permissions** | `sidePanel` |
| **host_permissions** | `https://jsonplaceholder.typicode.com/*` |

### popup.html

UIの構成要素:
- **タイトル表示エリア** (`#todo-title`)
- **ステータス表示エリア** (`#todo-status`)
- **ローディングメッセージ** (`#loading-message`)
- **エラーメッセージ** (`#error-message`)

### popup.css

スタイル仕様:
- **サイドバーサイズ**: 幅100%、最小高さ100vh
- **完了時** (`.completed`): 緑背景 + ✅アイコン
- **未完了時** (`.uncompleted`): 赤背景 + ❌アイコン
- レスポンシブなデザイン

### popup.js

処理フロー:
1. **ロード開始** - ローディングメッセージ表示
2. **API呼び出し** - `fetch()` APIで非同期GET リクエスト
3. **データ処理** - JSONレスポンスをパース
4. **成功時** - UI要素にデータを反映
5. **失敗時** - エラーメッセージを表示
6. **ロード終了** - ローディングメッセージ非表示

## APIエンドポイント

**URL:** `https://jsonplaceholder.typicode.com/todos/1`

**レスポンス例:**
```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

## 表示例

### 未完了の場合
```
📝 ToDo詳細ビューア
―――――――――――――――――
ToDoタイトル:
delectus aut autem

ステータス:
❌ 未完了
```

### 完了の場合
```
📝 ToDo詳細ビューア
―――――――――――――――――
ToDoタイトル:
delectus aut autem

ステータス:
✅ 完了
```

## インストール方法

1. このリポジトリをクローンまたはダウンロード
2. Chromeブラウザで `chrome://extensions/` を開く
3. 右上の「デベロッパーモード」を有効化
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. このプロジェクトのフォルダを選択

## 使い方

1. Chrome拡張機能としてインストール後、ツールバーの拡張機能アイコンを右クリック
2. 「サイドパネルを開く」を選択、またはChromeのサイドバーボタンから開く
3. サイドバーが開き、自動的にAPIからToDoデータを取得して表示されます
4. 完了/未完了のステータスが色とアイコンで視覚的に表示されます

## 開発情報

- **対象ブラウザ**: Google Chrome (Manifest V3対応)
- **使用API**: JSONPlaceholder (https://jsonplaceholder.typicode.com)
- **開発言語**: HTML, CSS, JavaScript (Vanilla JS)

## ライセンス

MIT License