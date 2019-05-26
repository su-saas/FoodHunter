export interface JwtResponse {
    user: {
        id: number,
        userName: string;
        emailAddress: string;
        access_token: string,
        expires_in: number
    }
}
