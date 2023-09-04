export interface IPost {
    post: {
        name: string;
        userId: number;
        profilePicture: string;
        description: string;
        image?: string;
    }
}