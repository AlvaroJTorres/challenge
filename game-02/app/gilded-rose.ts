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

export interface Item {
  update(): void
}

Item.prototype.update = function() {
  this.sellIn -= 1;
  if (this.quality < 50) {
    this.sellIn >= 0 ? (this.quality -= 1) : (this.quality -= 2);
  }
}

export class Brie extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }

  update() {
    this.sellIn -= 1;
    if (this.quality < 50) {
      this.sellIn >= 0 ? (this.quality += 1) : (this.quality += 2);
    }
  }
}

export class Pass extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }

  update() {
    this.sellIn -= 1;
    if (this.quality < 50) {
      if (this.sellIn <= 10 && this.sellIn > 5) this.quality += 2;
      else if (this.sellIn <= 5 && this.sellIn >= 0) this.quality += 3;
      else if (this.sellIn < 0) this.quality = 0;
      else this.quality += 1;
    }
  }
}

export class Conjured extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }

  update() {
    this.sellIn -= 1;
    if (this.quality < 50) {
      this.sellIn >= 0 ? (this.quality -= 2) : (this.quality -= 4);
    }
  }
}

export class Sulfuras extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
    item.update()
    });
  
    return this.items
  } 
}
