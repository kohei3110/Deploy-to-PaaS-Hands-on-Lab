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

- Web ブラウザを起動し <a href="https://portal.azure.com/">Azure ポータル</a> へアクセス

- "**+作成** をクリック

  <img src="images/add-resources.png" />

- Web アプリの "**作成**" をクリック

  <img src="images/new-app-service-01.png" />

- Web アプリの作成

  - "**基本**"

    - プロジェクトの詳細

      - サブスクリプション: ワークショップで使用するサブスクリプション

      - リソース グループ: 展開先のリソース グループ

    - インスタンスの詳細

      - 名前: 一意となる名前を入力

      - 公開: コード

      - ランタイム スタック: 展開するアプリのランタイムを選択

      - オペレーティング システム: Windows

      - 地域: リソース グループと同じ地域を選択

    - App Service プラン

      - プラン: 新規作成（既定の名前で OK）

      - SKU とサイズ: Standard S1

    <img src="images/new-app-service-02.png" />

  - "**デプロイ**"

    - 継続的デプロイ: 無効化

    <img src="images/new-app-service-03.png" />

  - "**ネットワーク**"

    - ネットワーク インジェクションを有効にする: オフ

    <img src="images/new-app-service-04.png" />

  - "**監視**"

    - Application Insights を有効にする: いいえ

    <img src="images/new-app-service-05.png" />

- "確認および作成" をクリックし、指定した内容を確認

- "**作成**" をクリックしリソースを展開

  <img src="images/new-app-service-06.png" />

<br />

### Task 4: App Service へ Web アプリを発行

- デプロイ パッケージの生成

  <details>
  <summary>C#</summary>

  - "**Terminal**" - "**New Terminal**" を選択

    <img src="images/github-clone-05.png" />
  
  - C# の ASP.NET Core プロジェクトのディレクトリへ移動

    ```
    cd src/CS
    ```

  - デプロイ パッケージの生成

    ```
    dotnet publish -c Relase -o ./bin/Publish
    ```

    <img src="images/dotnet-publish-01.png" />
  
  - bin フォルダー内に Publish サブフォルダーが生成

    ※ Publish フォルダー内には App Service に展開するファイルが格納
  
    <img src="images/dotnet-publish-02.png" />

  </details>

  <details>
  <summary>他の言語</summary>

  </details>

- Visual Studio Code のサイドバーから Azure Tool を選択

- "**Sign in to Azure...**" をクリック

  <img src="images/vscode-azure-tool-01.png" />

- Web ブラウザが起動し、認証が求められるので、アカウント名、パスワードを入力し認証を実行

- サブスクリプションの選択を求められる場合は、使用するサブスクリプションを選択

- RESOURCES パネルに選択したサブスクリプションの情報が表示

  <img src="images/vscode-azure-tool-02.png" />

- App Services を展開し、先の手順で作成した App Service が表示されることを確認

  <img src="images/vscode-azure-tool-03.png" />

- App Service を右クリックし "**Deploy to Web App...**" を選択

  <img src="images/vscode-azure-tool-04.png" />

- "**Browse...**" を選択し、展開するアプリケーション パッケージが格納されているフォルダを選択

- 確認のメッセージが表示されるので "**Deploy**" をクリック

- 展開完了後 App Service を右クリックし "**Browse Website**" を選択

- Web ブラウザが起動し、アプリケーションが表示されることを確認

<br />

## Exercise 2: GitHub Actions を使用した App Service への Web アプリの展開

### Task 1: App Service への継続的デプロイの設定

- Web ブラウザを起動し <a href="https://portal.azure.com/">Azure ポータル</a> へアクセス

- App Service の管理ブレードから "**デプロイ センター**" を選択

- ソースに "**GitHub**" を選択

  <img src="images/app-service-deploy-center-01.png" />

- "**承認する**" をクリック

  <img src="images/app-service-deploy-center-02.png" />

- アカウント名、パスワードを入力し、サインインを実行

  <img src="images/app-service-deploy-center-03.png" />

- GitHub リポジトリの選択

  - 組織: 自身のアカウント

  - リポジトリ: Deploy-to-PaaS-Hands-on-Lab

  - ブランチ: main

  - ワークフロー オプション: ワークフローの追加

    <img src="images/app-service-deploy-center-04.png" />

- "**保存**" をクリック

<br />

### Task 2: ワークフローの修正

- Web ブラウザで GitHub リポジトリへアクセス

- .github/workflows に App Service の設定によりワークフロー ファイル (.yml) が追加されていることを確認

  <img src="images/app-service-workflow-01.png" />

- "**Actions**" タブを選択し、ワークフローの実行履歴を確認

  <img src="images/app-service-workflow-02.png" />

- 追加したワークフローの実行が失敗しているため、クリックして内容を確認

- "**build**" をクリックして詳細を確認

  <img src="images/app-service-workflow-03.png" />

- 各ステップのログを確認し、エラーを特定

  <img src="images/app-service-workflow-04.png" />

- 

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
