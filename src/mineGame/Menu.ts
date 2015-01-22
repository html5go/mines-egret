/**
 * Created by Gruis on 2015-1-15
 */
module mineGame {
  /**
   * 菜单
   */
  export class Menu extends egret.gui.Group {
    private myGroup:egret.gui.Group;

    public constructor() {
       super();
    }
    public createChildren(): void {
      super.createChildren();

      this.top = 50;
      this.left = 20;
      this.createModeMenu();


    }

    // 地图选项
    private createModeMenu():void {
      var 
        modeTitle:egret.gui.Label = new egret.gui.Label(),
        modeType:egret.gui.RadioButtonGroup = new egret.gui.RadioButtonGroup(),
        singleMode:egret.gui.RadioButton = new egret.gui.RadioButton(),
        multipleMode:egret.gui.RadioButton = new egret.gui.RadioButton();

      //单选按钮需要绑定到一个组上
      modeType.addEventListener(egret.Event.CHANGE,
          this.modeChangeHandler, this);

      // 选择地图标注
      modeTitle.text = "游戏模式"
      modeTitle.size = 24;
      this.addElement(modeTitle);

      //创建单人模式按钮
      singleMode.left = 140;
      singleMode.label = '单人模式';
      singleMode.value = 1;
      singleMode.group = modeType;
      this.addElement(singleMode);

      //创建多人模式按钮
      multipleMode.left = 280;
      multipleMode.label = "多人模式";
      multipleMode.value = 2;
      multipleMode.selected = true;   //默认选项
      multipleMode.group = modeType;
      this.addElement(multipleMode);
    }

    private modeChangeHandler(evt:egret.Event):void {
      var modeType:egret.gui.RadioButtonGroup = evt.target;
      console.log(modeType.selectedValue);
    }
  }
}