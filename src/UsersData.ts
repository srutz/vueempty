
export type UserType = {
    id: number
    email: string
    admin: boolean
    firstname: string
    lastname: string
}

export const users: UserType[] = [
    {
        id: 1,
        email: "frank.mustermann@gmx.de",
        admin: false,
        firstname: "Frank",
        lastname: "Mustermann"
    },
    {
        id: 2,
        email: "karla.musterfrau@gmx.de",
        admin: true,
        firstname: "Karla",
        lastname: "Musterfrau"
    }
]