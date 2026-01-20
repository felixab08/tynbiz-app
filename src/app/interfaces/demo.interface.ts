export interface IDemoRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  storeName: string;
  storeUrl: string;
  message: string;
}
export interface IDemoResponse {
  id: number;
  displayName: string;
  storeUrl: string;
  createdAt: Date;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  statusCatId: number;
  statusName: string;
}
