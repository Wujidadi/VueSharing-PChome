# Vue Sharing@PChome

PChome Vue.js 研習示例專案，基於 Tarascanta 框架 Beta 版（2021-10-04）。


## 建置專案

因為執行環境為 Windows，為避免繁瑣的設定更動，故採用 Docker 容器。

### Run in Docker
* Docker Compose & env: `C:\Users\{MyNo}\Workspace\Docker\Compose\VueSharing`
* Docker Volume: `C:\Users\{MyNo}\Workspace\DockerVolumes\VueSharing`
* 在 Git Bash 中以下列指令建立容器：
  `docker-compose -f /c/Users/{MyNo}/Workspace/Docker/Compose/VueSharing/docker-compose.yaml up -d`

### 進入容器

* 在 Git Bash 中以 `winpty docker exec -it Vue-Sharing-Web su user` 進入容器。
* 執行下列指令：
  ```bash
  cd ~/application
  composer install      # 因無依賴問題，也可在容器外（宿主上）執行
  sudo npm i -g webpack webpack-cli
  sudo npm i -g terser-webpack-plugin
  sudo npm i -g clean-css clean-css-cli
  sudo npm i -g sass    # 不安裝 Dart Sass 以節省資源
  ```

## 待辦事項

* 應將 **webpack+cli**、**terser-webpack-plugin**、**clean-css+cli** 及 **sass (npm)** 整合到 Docker Image？
