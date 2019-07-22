此文档不会完全按照官方文档来书写，只会讲解在配置开发环境过程中，遇到的一些坑的解决方法。所以，请结合[官方文档](https://flutter.io/docs/get-started/install/macos)来看此篇文档。

## 环境变量

### 起步

1.下载 Flutter SDK，当前版本为[flutter_macos_v1.0.0-stable](https://storage.googleapis.com/flutter_infra/releases/stable/macos/flutter_macos_v1.0.0-stable.zip)。当运行以下命令无法正常升级 flutter 时候，可以通过在 [Flutter 官网](https://flutter.dev/)下载压缩包，解压后替换之前 flutter 安装文件。

```bash
flutter upgrade
```

2.解压下载的文件，笔者解压的文件路径为 `~`

3.打开控制台，进入到解压的文件路径，针对于笔者环境，当前路径为 `~`，输入以下命令。

> 注意，此命令仅针对**当前控制台窗口**生效。

```bash
export PATH="$PATH:`pwd`/flutter/bin"
```

### 进阶

针对于前面所述，你每次使用 flutter 命令，都需要执行一次命令，这件事情就变得非常繁琐。所以我们会想永久将 Flutter 添加到 PATH 中。

1.打开 `.bash_profile` 文件，此文件应位于 `~` 路径下面，如果没有此文件，可以通过 `touch .bash_profile` 来生成。

2.在 `.bash_profile` 文件中添加以下命令。针对于配置过 PATH 的电脑，可以使用 : 号来继续添加环境变量。

```bash
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
export PATH=~/flutter/bin:$PATH
```

3.运行 `source ~/.bash_profile` 来刷新当前命令行窗口

> 如果你使用的是 `zsh`，终端启动时 `~/.bash_profile` 将不会被加载，解决办法就是修改 `~/.zshrc` ，在其中添加：`source ~/.bash_profile`

## 配置 iOS 环境

### 安装到iOS设备

运行以下命令来安装用于将 Flutter 应用安装到 iOS 设备的工具

```bash
brew update
brew install --HEAD libimobiledevice
brew install ideviceinstaller ios-deploy cocoapods
pod setup
```

1.如果遇到安装缓慢的情况，可以通过切换 [Homebrew 镜像](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)来解决来解决

2.如果遇到 CocoaPods 安装缓慢，可以通过终端方式安装

```bash
cd ~/.cocoapods/repos/master
git clone git@github.com:CocoaPods/Specs.git
```

## 参考文档

+ [Flutter 官方文档](https://flutter.io/docs/get-started/install/macos)
+ [Flutter 中文文档](https://flutterchina.club/setup-macos/)
+ [iOS-手动安装CocoaPods](https://www.jianshu.com/p/0df3f268bf24)