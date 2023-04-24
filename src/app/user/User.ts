export interface User {
  partitionKey : string;
  rowKey : string;
  userName : string;
  firstName : string;
  lastName : string;
  email : string;
  password : string;
  timestamp : Date;
  eTag : string;
}
