//Store
export interface State {
    token: any,
    auth: auth[]
    error: object
}

export interface auth {
    id: any,
    name: string,
    email: string
}
