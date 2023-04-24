export class ArticleDto {
  category: string;
  name: string;
  unitaryPrice: number;
  constructor(category: string, name: string, unitaryPrice: number) {
    this.category = category;
    this.name = name;
    this.unitaryPrice = unitaryPrice;
  }

  setCategory(category: string) {
    this.category = category;
  }

  setName(name: string) {
    this.name = name;
  }

  setUnitaryPrice(unitaryPrice: number) {
    this.unitaryPrice = unitaryPrice;
  }
}
