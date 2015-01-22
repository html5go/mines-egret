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
     * 地图
     */
    var Map = (function (_super) {
        __extends(Map, _super);
        function Map() {
            _super.call(this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }
        Map.prototype.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        };
        /**初始化*/
        Map.prototype.init = function () {
            this.createMap();
        };
        /**创建地图**/
        Map.prototype.createMap = function () {
        };
        return Map;
    })(egret.DisplayObjectContainer);
    mineGame.Map = Map;
    Map.prototype.__class__ = "mineGame.Map";
})(mineGame || (mineGame = {}));
