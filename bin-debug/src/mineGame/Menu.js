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
            this.gameConfig = {
                'mode': 1,
                'mapMode': 1,
                'crosser': 1
            };
        }
        Menu.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.width = 480;
            this.height = 960;
            this.createModeMenu();
            //this.createLevelMenu();
        };
        // 获取游戏配置接口
        Menu.prototype.getConfig = function () {
            return this.gameConfig;
        };
        // 绘制地图选项
        // TODO: 后续可以把此函数写成公用函数
        Menu.prototype.createModeMenu = function () {
            var btn = new egret.gui.Button();
            btn.width = 200;
            btn.height = 60;
            btn.label = "记忆模式";
            this.addElement(btn);
            var btn2 = new egret.gui.Button();
            btn2.width = 200;
            btn2.height = 60;
            btn2.label = "探索模式";
            this.addElement(btn2);
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnTouchHandler, this);
            var vLayout = new egret.gui.VerticalLayout();
            vLayout.gap = 30;
            vLayout.horizontalAlign = egret.HorizontalAlign.CENTER;
            vLayout.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.layout = vLayout; //垂直布局
            btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnTouchHandler, this);
        };
        Menu.prototype.btnTouchHandler = function (evt) {
            var modeType = evt.target;
            if (modeType.label == '记忆模式') {
            }
            else {
            }
        };
        return Menu;
    })(egret.gui.Group);
    mineGame.Menu = Menu;
    Menu.prototype.__class__ = "mineGame.Menu";
})(mineGame || (mineGame = {}));
