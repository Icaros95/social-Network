export interface Auth {
    currentUser: {
        id: number;
        name: string;
        profilePicture: string;
    };
    login: Function;
}