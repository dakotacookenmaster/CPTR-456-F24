export class CredentialExpirationError extends Error {
    constructor(msg?: string) {
        super(`Your credentials have expired. ${msg}`)
    }
}