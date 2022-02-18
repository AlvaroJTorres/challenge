export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export interface Updater {
  update(item: Item): void
}

class BrieUpdater implements Updater {
  update(item: Item) {
    item.sellIn -= 1;
    if (item.quality < 50) {
      item.sellIn >= 0 ? (item.quality += 1) : (item.quality += 2);
    }
  }
}

class PassUpdater implements Updater {
  update(item: Item) {
    item.sellIn -= 1;
    if (item.quality < 50) {
      if (item.sellIn <= 10 && item.sellIn > 5) item.quality += 2;
      else if (item.sellIn <= 5 && item.sellIn >= 0) item.quality += 3;
      else if (item.sellIn < 0) item.quality = 0;
      else item.quality += 1;
    }
  }
}

class ConjuredUpdater implements Updater {
  update(item: Item) {
    item.sellIn -= 1;
    if (item.quality < 50) {
      item.sellIn >= 0 ? (item.quality -= 2) : (item.quality -= 4);
    }
  }
}

class SulfurasUpdater implements Updater {
  update(item: Item) {
    console.log(`The item ${item.name} does not update`)
  }
}

class GeneralUpdater implements Updater {
  update(item: Item) {
    item.sellIn -= 1;
    if (item.quality < 50) {
      item.sellIn >= 0 ? (item.quality -= 1) : (item.quality -= 2);
    }
  }
}

function mapper(name: string) {
  switch (true) {
    case /.*aged Brie.*/i.test(name):
      return new BrieUpdater()
    case /.*backstage passes.*/i.test(name):
      return new PassUpdater()    
    case /.*conjured.*/i.test(name):
      return new ConjuredUpdater()
    case /.*sulfuras.*/i.test(name):
      return new SulfurasUpdater()
    default:
      return new GeneralUpdater()
  }
}

export class GildedRose {
  items: Array<Item>;
  mapper: any

  constructor(items = [] as Array<Item>, mapper: any) {
    this.items = items;
    this.mapper = mapper
  }

  updateQuality() {
    this.items.forEach((item) => {
      const updater = mapper(item.name)
      updater.update(item)
    });
  
    return this.items
  } 
}
