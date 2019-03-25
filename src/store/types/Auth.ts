// Store

export interface auth {
  id: any;
  name: string;
  email: string;
}
export interface State {
  token: any;
  auth: auth[];
  error: Object;
  role: any;
}
