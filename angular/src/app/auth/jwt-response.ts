export interface JwtResponse {
    user: {
        userID: number,
        userName: string;
        emailAddress: string;
        access_token: string,
        expires_in: number
    }
}
