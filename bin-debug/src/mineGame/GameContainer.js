var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var mineGame;
(function (mineGame) {
    var GameContainer = (function (_super) {
        __extends(GameContainer, _super);
        //private crosser:mineGame.Crosser;
        //private mine:mineGame.Mine;
        function GameContainer() {
            _super.call(this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }
        /**初始化*/
        GameContainer.prototype.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        };
        GameContainer.prototype.createGameScene = function () {
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
        };
        GameContainer.prototype.startGame = function (event) {
            egret.gui.Alert.show("游戏正在开发中,欢迎大家提出意见！", "来自哪呢");
        };
        /**
         * 显示游戏菜单，选择地图类型，选择人物
         */
        GameContainer.prototype.createGameMenu = function () {
            var myMenu = new mineGame.Menu();
            //在GUI范围内一律使用addElement等方法替代addChild等方法。
            this.guiLayer.addElement(myMenu);
        };
        return GameContainer;
    })(egret.DisplayObjectContainer);
    mineGame.GameContainer = GameContainer;
    GameContainer.prototype.__class__ = "mineGame.GameContainer";
})(mineGame || (mineGame = {}));
