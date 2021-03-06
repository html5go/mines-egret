/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var egret;
(function (egret) {
    var gui;
    (function (gui) {
        var VScrollBar = (function (_super) {
            __extends(VScrollBar, _super);
            function VScrollBar() {
                _super.call(this);
                this._autoHideTimer = NaN;
                this._autoHideDelay = 3000;
                this.trackAlpha = 0.4;
                this.thumbAlpha = 0.8;
                this._autoHideShowAnimat = null;
                this._animatTargetIsShow = false;
            }
            VScrollBar.prototype._setViewportMetric = function (height, contentHeight) {
                this._setMaximun(contentHeight - height);
                this._setMinimun(0);
                this._setValue(contentHeight - height);
                this._setVisible(height < contentHeight);
                var thumbLength = height * height / contentHeight;
                this.thumb._setHeight(thumbLength);
            };
            VScrollBar.prototype.setPosition = function (value) {
                this._setValue(this._maximum - value);
            };
            VScrollBar.prototype.getPosition = function () {
                return this._maximum - this._getValue();
            };
            VScrollBar.prototype._setValue = function (value) {
                value = Math.max(0, value);
                _super.prototype._setValue.call(this, value);
                //被赋值时自动显示
                this.hideOrShow(true);
                this.autoHide();
            };
            VScrollBar.prototype.setValue = function (value) {
                _super.prototype.setValue.call(this, value);
                //被赋值时自动显示
                this.hideOrShow(true);
                this.autoHide();
            };
            VScrollBar.prototype.autoHide = function () {
                if (this._autoHideDelay != NaN) {
                    egret.clearTimeout(this._autoHideDelay);
                }
                this._autoHideTimer = egret.setTimeout(this.hideOrShow.bind(this, false), this, this._autoHideDelay);
            };
            VScrollBar.prototype.hideOrShow = function (show) {
                var _this = this;
                if (this._autoHideShowAnimat == null) {
                    this._autoHideShowAnimat = new gui.Animation(function (b) {
                        var a = b.currentValue["alpha"];
                        _this.thumb.alpha = _this.thumbAlpha * a;
                        _this.track.alpha = _this.trackAlpha * a;
                    }, this);
                }
                else {
                    if (this._animatTargetIsShow == show)
                        return;
                    this._autoHideShowAnimat.isPlaying && this._autoHideShowAnimat.stop();
                }
                this._animatTargetIsShow = show;
                var animat = this._autoHideShowAnimat;
                animat.motionPaths = [{
                    prop: "alpha",
                    from: this.thumb.alpha / this.thumbAlpha,
                    to: show ? 1 : 0
                }];
                animat.duration = show ? 100 : 500;
                animat.play();
            };
            VScrollBar.prototype._animationUpdateHandler = function (animation) {
                this.pendingValue = animation.currentValue["value"];
                this.value = animation.currentValue["value"];
                this.dispatchEventWith(egret.Event.CHANGE);
            };
            return VScrollBar;
        })(gui.VSlider);
        gui.VScrollBar = VScrollBar;
        VScrollBar.prototype.__class__ = "egret.gui.VScrollBar";
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
