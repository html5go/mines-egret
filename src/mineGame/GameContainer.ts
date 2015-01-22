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
       // 团队展示动画
      this.gameSky = new egret.DisplayObjectContainer();
      this.addChild(this.gameSky);

      var skyBg = new egret.Bitmap();
      skyBg.texture = RES.getRes("bgImage");
      this.gameSky.addChild(skyBg);

      // GUI的组件必须都在这个容器内部,
      // UIStage会始终自动保持跟舞台一样大小。
      this.guiLayer = new egret.gui.UIStage();
      this.addChild(this.guiLayer);

      this.createGameMenu();


    }

    private startGame(event:egret.TouchEvent):void{
        egret.gui.Alert.show("游戏正在开发中,欢迎大家提出意见！", "来自哪呢")
    }

    /**
     * 显示游戏菜单，选择地图类型，选择人物
     */
    private createGameMenu():void {
      var myMenu = new mineGame.Menu();

      //在GUI范围内一律使用addElement等方法替代addChild等方法。
      this.guiLayer.addElement(myMenu);
    }
  }
}