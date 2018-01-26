execute () {
case $1 in
"pre_merge") 
    git config --global user.email "@root"
    git config --global user.name "@root"
    git pull origin
    npm run build_dev
    ;;
"dev_build")
    npm run build_dev
    cordova platforms add android||
    cordova build android
    rm platforms/android/build/outputs/apk/*.apk||
    cp platforms/android/build/outputs/apk/*.apk /home/saisharath/dev/builds_ABP/builds/DCE/ABP_DCE_build_v\"$VERSION\"_$(date +\"%d-%m-%y_%I-%M\").apk||
    ;;
"dev_run")
    npm run build_dev
    cordova platforms add android||
    cordova run android --device
    ;;    
"prod_build")
    npm run build_prod
    cordova platforms add android||
    cordova build android
    ;;    
"prod_run")
    npm run build_prod
    cordova platforms add android||
    cordova run android --device
    ;;       
"test")
    echo "testing"
    ;;
esac
}
echo $CMD
execute(); $CMD