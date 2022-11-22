![Microsoft Cloud Workshop](images/ms-cloud-workshop.png)

Azure PaaS CI/CD Hands-on lab  
Dec 2022

<br />

## Appdendix: Self-Hosted Runner を使用したアプリケーションの展開

### Task 1: App Service の受信トラフィック制御

<br />

### Task 2: Personal Access Token の作成

- GitHub アカウントの "**Settings**" を選択

- 左側メニューから "**Developer settings**" を選択

- "**Personal access tokens**" - "**Tokens (classic)**" を選択

- "**Generate new token**" - "**Generate new token (classic)**" をクリック

- トークンの説明、有効期間、権限スコープを設定

  - Note:: Setup environment (任意)

  - Expiration: 7 days (任意)

  - Select scopes: repo と admin:org の read:org にチェック

- "**Generate token** をクリックし、トークンを作成

- トークンの右にあるボタンをクリックしてコピー、一時的にメモ帳などに貼り付けて保存

<br />

### Task 3: シークレットの登録

- GitHub リポジトリの "**Settings**" を選択

- "**Secrets**" - "**Actions**" を選択し、"**New repository secret**" をクリック

  <img src="images/new-actions-secret-01.png" />

- 登録する内容を入力

  - Name: GH_TOKEN

  - Secret: 発行した Personal access tokens

    <img src="images/new-actions-secret-02.png" />

- "**Add secret**" をクリックし、シークレットを登録

    <img src="images/new-actions-secret-03.png" />

<br />

### Task 4: Azure Container Instances への Self-Hosted Runner の展開

- Self-Hosted Runner の構築手順は "**Settings**" の "**Actions**" - "**Runners**" から確認可

  <img src="images/self-hosted-runner-01.png" />

- "**New self-hosted runner**" のクリックで OS ごとのインストール スクリプトの入手、構成手順を確認

  <img src="images/self-hosted-runner-02.png" />

- GitHub Actions のワークフローでコンテナ イメージとしてビルドし Azure Container Instances へ展開

  ※ Dockerfile, ワークフローは事前準備済み

    - [dockerfile](https://github.com/kohei3110/Deploy-to-PaaS-Hands-on-Lab/blob/main/.docker/runner/dockerfile)

    - [deploy-runner-to-aci.yml](https://github.com/kohei3110/Deploy-to-PaaS-Hands-on-Lab/blob/main/.github/workflows/deploy-runner-to-aci.yml)


<br />

### Task 5: ワークフローでの Self-Hosted Runner の利用

<br />