export interface Article {
  partitionKey : string;
  rowKey : string;
  articleId: number;
  name : string;
  category : string;
  unitaryPrice : number;
  //quantity : number;
  owner : string;
  timestamp : Date;
  eTag : string;
}
