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
        var SkinnableDataContainer = (function (_super) {
            __extends(SkinnableDataContainer, _super);
            function SkinnableDataContainer() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.dataGroup_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(SkinnableDataContainer.prototype, "skinParts", {
                get: function () {
                    return SkinnableDataContainer._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            SkinnableDataContainer.prototype.dataGroup_i = function () {
                var t = new egret.gui.DataGroup();
                this.dataGroup = t;
                t.itemRenderer = new egret.gui.ClassFactory(egret.gui.ItemRenderer);
                t.layout = this.__3_i();
                return t;
            };
            SkinnableDataContainer.prototype.__3_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [0, "contentJustify"]);
                return t;
            };
            SkinnableDataContainer._skinParts = ["dataGroup"];
            return SkinnableDataContainer;
        })(egret.gui.Skin);
        simple.SkinnableDataContainer = SkinnableDataContainer;
        SkinnableDataContainer.prototype.__class__ = "simple.SkinnableDataContainer";
    })(simple = skins.simple || (skins.simple = {}));
})(skins || (skins = {}));
