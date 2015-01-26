module mineGame {
  export class GameContainer extends egret.DisplayObjectContainer {
    private map:mineGame.Map;
    private menu:mineGame.Menu;
    
    //private crosser:mineGame.Crosser;
    //private mine:mineGame.Mine;

    public constructor() {
      super();
      this.addEventListener(egret.Event.ADDED_TO_STAGE,
          this.onAddToStage, this);
    }

    /**初始化*/
    private onAddToStage(event:egret.Event){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,
            this.onAddToStage, this);
        this.createGameScene();
    }

    private guiLayer:egret.gui.UIStage;
    private gameSky:egret.DisplayObjectContainer;

    private createGameScene():void {
      var
        gameStartBtn:egret.gui.Button,
        gameTitle:egret.TextField;

      // 创建舞台
      this.gameSky = new egret.DisplayObjectContainer();
      this.addChild(this.gameSky);

      var skyBg = new egret.Bitmap();
      skyBg.texture = RES.getRes("bgImage");
      this.gameSky.addChild(skyBg);

      var minePic = new egret.Bitmap();
      minePic.texture = RES.getRes("minesImage");
      minePic.y = 170;
      minePic.x = 190;
      minePic.width= 80;
      minePic.height= 80;
      this.gameSky.addChild(minePic);

      gameTitle = new egret.TextField();
      gameTitle.text = "放开那地雷";
      gameTitle.textColor = 0x000000;
      gameTitle.y = 80;
      gameTitle.width = 480;
      gameTitle.textAlign = 'center';
      gameTitle.strokeColor = 0xcccccc;
      gameTitle.stroke = 1;
      this.addChild(gameTitle);

      // 地雷的心跳动画
      var tw = egret.Tween.get(minePic, {loop: true});
      tw.to({width:72, height:72}, 600).to({width:100, height:100}, 120).to({width:76, height:76}, 400).to({width:80, height:80}, 300).wait(1000);

      // GUI的组件必须都在这个容器内部,
      // UIStage会始终自动保持跟舞台一样大小。
      this.guiLayer = new egret.gui.UIStage();
      this.addChild(this.guiLayer);

      this.createGameMenu();
    }

    /**
     * GUI: 显示游戏菜单入口，选择地图类型，选择人物等
     */
    private createGameMenu():void {
      var modeGroup:egret.gui.Group = new egret.gui.Group();
      modeGroup.width = 480;
      modeGroup.height = 960;

      var btn:egret.gui.Button = new egret.gui.Button();
      btn.width = 200;
      btn.height = 60;
      btn.label = "记忆模式";
      modeGroup.addElement(btn);

      var btn2:egret.gui.Button = new egret.gui.Button();
      btn2.width = 200;
      btn2.height = 60;
      btn2.label = "探索模式";
      modeGroup.addElement(btn2);
      modeGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame,this);

      var vLayout:egret.gui.VerticalLayout = new egret.gui.VerticalLayout();
      vLayout.gap = 30;
      vLayout.horizontalAlign = egret.HorizontalAlign.CENTER;
      vLayout.verticalAlign = egret.VerticalAlign.MIDDLE;
      modeGroup.layout = vLayout;//垂直布局

      btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);

      //在GUI范围内一律使用addElement等方法替代addChild等方法。
      this.guiLayer.addElement(modeGroup)
    }

    /**
     * 开始游戏入口
     * @param {egret.TouchEvent} event 事件对象
     */
    public startGame(event:egret.TouchEvent):void{
      var msg:string;
      var modeType:egret.gui.Button = event.target;

      msg = modeType.label;
      egret.gui.Alert.show("游戏正在开发中,欢迎大家提出意见！", "来自哪呢")
    }
  }
}