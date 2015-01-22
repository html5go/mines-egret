var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by Gruis on 2015-1-15
 */
var mineGame;
(function (mineGame) {
    /**
     * 菜单
     */
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.top = 50;
            this.left = 20;
            this.createModeMenu();
        };
        // 地图选项
        Menu.prototype.createModeMenu = function () {
            var modeTitle = new egret.gui.Label(), modeType = new egret.gui.RadioButtonGroup(), singleMode = new egret.gui.RadioButton(), multipleMode = new egret.gui.RadioButton();
            //单选按钮需要绑定到一个组上
            modeType.addEventListener(egret.Event.CHANGE, this.modeChangeHandler, this);
            // 选择地图标注
            modeTitle.text = "游戏模式";
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
            multipleMode.selected = true; //默认选项
            multipleMode.group = modeType;
            this.addElement(multipleMode);
        };
        Menu.prototype.modeChangeHandler = function (evt) {
            var modeType = evt.target;
            console.log(modeType.selectedValue);
        };
        return Menu;
    })(egret.gui.Group);
    mineGame.Menu = Menu;
    Menu.prototype.__class__ = "mineGame.Menu";
})(mineGame || (mineGame = {}));
