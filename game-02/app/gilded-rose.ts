export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
      updateQuality() {
        this.items.forEach((item) => {
          switch (true) {
            case /.*Aged Brie.*/.test(item.name):
              this.updateBrie(item)
              break;
            case /.*Backstage passes.*/.test(item.name):
              this.updatePass(item)
              break;
            case /.*Conjured.*/.test(item.name):
              this.updateConjured(item)
              break;
            case /.*Sulfuras.*/.test(item.name):
              break;
            default:
              this.updateGeneral(item)
              break;
          }
        });
  
        return this.items
      }
    }

    private updateBrie(item: Item){
      item.sellIn -= 1;
      if (item.quality < 50) {
        item.sellIn >= 0 ? (item.quality += 1) : (item.quality += 2);
      }
    }

    private updatePass(item: Item){
      item.sellIn -= 1;
      if (item.quality < 50) {
        if (item.sellIn <= 10 && item.sellIn > 5) item.quality += 2;
        else if (item.sellIn <= 5 && item.sellIn >= 0) item.quality += 3;
        else if (item.sellIn < 0) item.quality = 0;
        else item.quality += 1;
      }
    }

    private updateConjured(item: Item){
      item.sellIn -= 1;
      if (item.quality < 50) {
        item.sellIn >= 0 ? (item.quality -= 2) : (item.quality -= 4);
      }
    }

    private updateGeneral(item: Item){
      item.sellIn -= 1;
      if (item.quality < 50) {
        item.sellIn >= 0 ? (item.quality -= 1) : (item.quality -= 2);
      }
    }
}
