### How to use ###

1. install nodejs
2. npm install -g react-native-cli
3. npm install

### Run Android ###

1. Config adb
    For MacOS: export PATH="/Users/<USER>/Library/Android/sdk/platform-tools":$PATH
    For Window: set ENVIRONMENT VARIABLES.
2. react-native run-android

### Run IOS ###

react-native run-ios
react-native run-ios --simulator="iPhone 8"

### Build APK ###

$ cd android
$ ./gradlew assembleRelease# bp_backend
