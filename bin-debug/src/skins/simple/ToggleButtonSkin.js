var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var simple;
    (function (simple) {
        var ToggleButtonSkin = (function (_super) {
            __extends(ToggleButtonSkin, _super);
            function ToggleButtonSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "minWidth"], [60, 140]);
                this.elementsContent = [this.__7_i(), this.labelDisplay_i()];
                this.states = [
                    new egret.gui.State("up", [
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__7", "source", "togglebutton_over_png"),
                        new egret.gui.SetProperty("labelDisplay", "textColor", 0x1e7465)
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__7", "source", "togglebutton_disabled_png"),
                        new egret.gui.SetProperty("labelDisplay", "textColor", 0x727070)
                    ]),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "togglebutton_selected_png"),
                        new egret.gui.SetProperty("labelDisplay", "textColor", 0xeeedec)
                    ]),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "togglebutton_over_png"),
                        new egret.gui.SetProperty("labelDisplay", "textColor", 0x1e7465)
                    ]),
                    new egret.gui.State("disabledAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "togglebutton_disabled_png"),
                        new egret.gui.SetProperty("labelDisplay", "textColor", 0x727070)
                    ])
                ];
            }
            Object.defineProperty(ToggleButtonSkin.prototype, "skinParts", {
                get: function () {
                    return ToggleButtonSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            ToggleButtonSkin.prototype.labelDisplay_i = function () {
                var t = new egret.gui.Label();
                this.labelDisplay = t;
                this.__s(t, ["bottom", "fontFamily", "left", "right", "size", "textAlign", "textColor", "top", "verticalAlign"], [12, "Tahoma", 10, 10, 20, "center", 0x1e7465, 8, "middle"]);
                return t;
            };
            ToggleButtonSkin.prototype.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__7 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "togglebutton_normal_png", 100]);
                return t;
            };
            ToggleButtonSkin._skinParts = ["labelDisplay"];
            return ToggleButtonSkin;
        })(egret.gui.Skin);
        simple.ToggleButtonSkin = ToggleButtonSkin;
        ToggleButtonSkin.prototype.__class__ = "simple.ToggleButtonSkin";
    })(simple = skins.simple || (skins.simple = {}));
})(skins || (skins = {}));
