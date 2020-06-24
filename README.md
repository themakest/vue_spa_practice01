# vue_spa_practice01
Vue.jsを用いたSPA練習01
* 実装内容
  * vue-routerを使用する
  * コンポーネント複数持つ

## 参考サイト
[【Vue.js】爆速でSPAを作る](https://qiita.com/nagimaruxxx/items/8fc59a5ca05bb91bfe1f)  
[Vue CLIの初期設定について](https://qiita.com/ikdysk/items/10226333e2bc09808dfc)  
[Vue.jsでSPAサイトを作成するチュートリアル](https://qiita.com/buchiya4th/items/cff0b2ab9ebd550c4e0f)  

## プラグイン
- vue-body-class  
bodyにページごとのclassを振って出し分ける  
vue-routerはrouter-view部分の差分変更をおこなうので、基本的にはbodyの操作をしないようになっているので、  
router-viewでpathの変更ごとにbodyのclass設定をおこなえるようにする  
const router = ...の後に記述する
```Javascript:vue-body-class
import VueBodyClass from 'vue-body-class'

const vueBodyClass = new VueBodyClass(Routes);
router.beforeEach((to, from, next) => { vueBodyClass.guard(to, next) });
```
- vue-head  
head内の情報を設定する
```Javascript:vue-head
import VueHead from 'vue-head'

Vue.use(VueHead)
```