/**
 * Created by Gruis on 2015-1-26.
 */
module mineGame {
  export class GameContainer extends egret.DisplayObjectContainer {
    
    private menu:mineGame.Menu;

    // 地图
    private map:mineGame.Map;
    
    // 扫雷工兵
    private crosser:mineGame.Crosser;
    
    // 地雷
    private mine:mineGame.Mine;

    public constructor() {
      super();
      this.addEventListener(egret.Event.ADDED_TO_STAGE,
          this.onAddToStage, this);
    }

    /**初始化*/
    private onAddToStage(event:egret.Event){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,
            this.onAddToStage, this);
        this.init();
    }

    // 游戏初始化
    private init():void {
      // 游戏背景
      var skyBg = new egret.Bitmap();
      skyBg.texture = RES.getRes("bgImage");
      this.addChild(skyBg);

      this.createGameIndex();
      this.createGameMenu();
    }

    // 创建游戏主界面
    private guiLayer:egret.gui.UIStage;
    private gameIndex:egret.DisplayObjectContainer;
    private createGameIndex() {
      // 游戏主界面
      this.gameIndex = new egret.DisplayObjectContainer();
      this.addChild(this.gameIndex);

      // 游戏标题
      var gameTitle:egret.TextField;
      gameTitle = new egret.TextField();
      gameTitle.text = "放开那地雷";
      gameTitle.textColor = 0x000000;
      gameTitle.y = 80;
      gameTitle.width = 480;
      gameTitle.textAlign = 'center';
      gameTitle.strokeColor = 0xcccccc;
      gameTitle.stroke = 1;
      this.gameIndex.addChild(gameTitle);

      // 游戏地雷图片
      var minePic = new egret.Bitmap();
      minePic.texture = RES.getRes("minesImage");
      minePic.y = 170;
      minePic.x = 190;
      minePic.width= 80;
      minePic.height= 80;
      this.gameIndex.addChild(minePic);

      // 地雷的心跳动画
      var tw = egret.Tween.get(minePic, {loop: true});
      tw.to({width:72, height:72}, 600)
        .to({width:100, height:100}, 120)
        .to({width:76, height:76}, 400)
        .to({width:80, height:80}, 300)
        .wait(1000);
    }

    /**
    * GUI: 显示游戏菜单入口，选择地图类型，选择人物等
    * TODO：后续考虑菜单 独立成一个类，要注意回调问题
    */
    private modeGroup:egret.gui.Group;
    private createGameMenu():void {
      // GUI的组件必须都在这个容器内部,
      // UIStage会始终自动保持跟舞台一样大小。
      this.guiLayer = new egret.gui.UIStage();
      this.addChild(this.guiLayer);

      this.modeGroup = new egret.gui.Group();
      this.modeGroup.width = 480;
      this.modeGroup.height = 960;
      this.modeGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);

      var btn:egret.gui.Button = new egret.gui.Button();
      btn.width = 200;
      btn.height = 60;
      btn.label = "记忆模式";
      this.modeGroup.addElement(btn);

      var btn2:egret.gui.Button = new egret.gui.Button();
      btn2.width = 200;
      btn2.height = 60;
      btn2.label = "探索模式";
      this.modeGroup.addElement(btn2);

      var vLayout:egret.gui.VerticalLayout = new egret.gui.VerticalLayout();
      vLayout.gap = 30;
      vLayout.horizontalAlign = egret.HorizontalAlign.CENTER;
      vLayout.verticalAlign = egret.VerticalAlign.MIDDLE;
      this.modeGroup.layout = vLayout;//垂直布局

      //在GUI范围内一律使用addElement等方法替代addChild等方法。
      this.guiLayer.addElement(this.modeGroup)
    }

    // 隐藏游戏主界面及菜单
    private removeGameIndex() {
      this.removeChild(this.gameIndex);
      this.removeChild(this.guiLayer);
    }

    /**
     * 开始游戏入口
     * @param {egret.TouchEvent} event 事件对象
     */
    public startGame(event:egret.TouchEvent):void{
      var msg:string;
      var modeType:egret.gui.Button = event.target;

      msg = modeType.label;

      if (msg == '探索模式') {
        egret.gui.Alert.show( msg + "正在开发中,敬请期待！", "来自哪呢");
      } else {
        this.map = new mineGame.Map();
        this.map.init();
        this.map.x = 50;
        this.map.y = 80;
        this.addChild(this.map);

        this.removeGameIndex();
      }

    }
  }
}