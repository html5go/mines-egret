/**
 * Created by Gruis on 2015-1-15
 */
module mineGame {
  /**
   * 地图
   */
  export class Map extends egret.DisplayObjectContainer {
    private map: any[] = [
        [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 2],
        [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0]
      ];


    private mapSize: number = 7;

    public constructor() {
      super();
      this.addEventListener(egret.Event.ADDED_TO_STAGE,
          this.onAddToStage, this);
    }
    
    private onAddToStage(event:egret.Event){
      this.removeEventListener(egret.Event.ADDED_TO_STAGE,
          this.onAddToStage, this);
    }

    /**初始化*/
    public init(){

      this.createMap();
      this.x = 30;
      this.y = 80;
    }

    /**创建地图**/
    private createMap() {
      var len:number = this.mapSize;

      var i:number;
      var j:number;
      var node:mineGame.Node;
      var mine:mineGame.Mine;
      var corrser:mineGame.Crosser;

      //var txt:egret.TextField;
      for(i = 0 ; i < len ; i++) {
        for(j = 0 ; j < len + 4; j++) {
          node = new mineGame.Node(i, j);
          node.x = i * 60;
          node.y = j * 60;
          node.addEventListener(egret.TouchEvent.TOUCH_TAP,
              this.onNodeClick, this);
          this.addChild(node);

          if (this.map[i][j] == 1) {
            mine = new mineGame.Mine(i, j);
            mine.x = i * 60 + 10;
            mine.y = j * 60 + 10;
            mine.init();
            this.addChild(mine);
          } else if (this.map[i][j] == 2) {

            corrser = new mineGame.Crosser(i, j);
            corrser.x = i * 60 + 10;
            corrser.y = j * 60;
            this.addChild(corrser);
          }
          //this.map[i][j]
        }
      }

    }

    private onNodeClick(){

    }

  }
}