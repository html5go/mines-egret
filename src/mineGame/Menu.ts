/**
 * Created by Gruis on 2015-1-15
 */
module mineGame {
  /**
   * 菜单
   */
  export class Menu extends egret.gui.Group {
    private myGroup:egret.gui.Group;

    private gameConfig = {
        'mode': 1,
        'mapMode': 1,
        'crosser': 1
      };

    public constructor() {
       super();
    }
    public createChildren(): void {
      super.createChildren();

      this.width = 480;
      this.height = 960;
      this.createModeMenu();
      //this.createLevelMenu();
    }

    // 获取游戏配置接口
    public getConfig(){
      return this.gameConfig;
    }

    // 绘制地图选项
    // TODO: 后续可以把此函数写成公用函数
    private createModeMenu():void {
      var btn:egret.gui.Button = new egret.gui.Button();
      btn.width = 200;
      btn.height = 60;
      btn.label = "记忆模式";
      this.addElement(btn);

      var btn2:egret.gui.Button = new egret.gui.Button();
      btn2.width = 200;
      btn2.height = 60;
      btn2.label = "探索模式";
      this.addElement(btn2);
      btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnTouchHandler,this);

      var vLayout:egret.gui.VerticalLayout = new egret.gui.VerticalLayout();
      vLayout.gap = 30;
      vLayout.horizontalAlign = egret.HorizontalAlign.CENTER;
      vLayout.verticalAlign = egret.VerticalAlign.MIDDLE;
      this.layout = vLayout;//垂直布局

      btn2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnTouchHandler, this);
    }

    private btnTouchHandler(evt:egret.Event):void {
      var modeType:egret.gui.Button = evt.target;
      if(modeType.label == '记忆模式') {
      } else {
      }
    }
  }
}