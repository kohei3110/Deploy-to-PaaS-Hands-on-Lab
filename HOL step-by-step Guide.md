![Microsoft Cloud Workshop](images/ms-cloud-workshop.png)

Azure PaaS CI/CD Hands-on lab  
Dec 2022

<br />

### Contents

<br />

## Exercise 1: 開発ツールから App Service への Web アプリの展開

### Task 1: リポジトリのフォーク

- Web ブラウザを起動し、"<a href="https://github.com/kohei3110/Deploy-to-PaaS-Hands-on-Lab" target="_blank">ワークショップのリポジトリ</a>" へ移動

- 画面右上の Fork をクリック

  <img src="images/github-fork-01.png" />

- 自身のアカウントにリポジトリが複製されていることを確認


<br />

### Task 2: 開発環境へのリポジトリのクローン

- Fork したリポジトリの "**Code**" をクリック

  表示されるツール チップよりリポジトリの URL をコピー

  <img src="images/github-clone-01.png" />

- Visual Studio Code を起動

- Explorer を開き "**Clone Repository" をクリック

  <img src="images/github-clone-02.png" />

- リポジトリの URL の入力を求められるためコピーした URL を貼り付け Enter キーを押下

  <img src="images/github-clone-03.png" />

- 複製先となるローカル ディレクトリを選択

  GitHub の認証情報が求められる場合は、アカウント名、パスワードを入力し認証を実施

- 複製されたリポジトリを開くかどうかのメッセージが表示されるので "**Open**" をクリック

- Explorer に複製したリポジトリのディレクトリ、ファイルが表示

  <img src="images/github-clone-04.png" />

- ローカルでアプリケーションを実行を確認

  <details>
  <summary>C#</summary>

  - "**Terminal**" - "**New Terminal**" を選択

    <img src="images/github-clone-05.png" />
  
  - C# の ASP.NET Core プロジェクトのディレクトリへ移動

    ```
    cd src/CS
    ```
  
  - アプリケーションを実行

    ```
    dotnet run
    ```
  
  - ターミナルに以下のようなメッセージが表示（Web アプリをテストする URL が https\://localhost:{port} で表示）

    HTTPS URL を Ctrl キーを押しながらクリック

    <img src="images/github-clone-06.png" />
  
  - Web ブラウザが起動し、アプリケーションを表示

    <img src="images/github-clone-07.png" />

  - ターミナルで Ctrl + C を押下してアプリケーションを終了

  </details>

  <details>
  <summary>他の言語</summary>
  
  </details>

<br />

### Task 3: App Service の作成

<br />

### Task 4: App Service へ Web アプリを発行

<br />

## Exercise 2: GitHub Actions を使用した App Service への Web アプリの展開

### Task 1: App Service への継続的デプロイの設定

<br />

### Task 2: ワークフローの修正

<br />

### Task 3: ワークフローの実行

<br />

## Exercise 3: ステージング環境への展開とスワップ操作による本番環境への昇格

### Task 1: ステージング環境の準備

<br />

### Task 2: ワークフローの修正

<br />

### Task 3: ワークフローの実行

<br />

### Task 4: スワップ操作

<br />

## Exercise 4: GitHub Actions ワークフローの作成

<br />

## Exercise 5: GitHub Actions を使用した Container Apps への Web アプリの展開

### Task 1: サービス プリンシパルの作成

<br />

### Task 2: ワークフローの作成

#### アプリのコンテナ化

<br />

#### Azure Container Registry へのコンテナ イメージのプッシュ

<br />

#### Container Apps への展開

<br />

#### （ご参考）ワークフローの完成系のサンプル

<br />

### Task 3: ワークフローの実行

<br />

## Exercise 5: ARM テンプレートの作成

<br />

## Exercise 6: GitHub Actions による Azure リソースの展開

<br />
