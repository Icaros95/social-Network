import { db } from "../db"

export const getPost = (req:Object, res:any) => {
    const q = `SELECT p.*, u.id AS userId, name, profilePicture, FROM posts AS p JOIN users AS u ON (u.id = p.userId)`

    db.query(q, (error, data) => {
        if(error) return res.status(500).json(error);
        return res.status(200).json(data);
    });
}