import { db } from "../db"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

export const register = (req:any, res:any) => {

    // check user
    const q = 'SELECT * FROM users WHERE username = ?';

    db.query(q, [req.body.username], (error:any, data:any) => {
        if(error) return res.status(500).json(error);
        if(data.length) return res.status(409).json('User already exists!')
    
    // create user if not exist
        // hash the password for most security!! => don't forget this Giuliana!!
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt);

        const q = 'INSERT INTO users (`username`, `email`, `password`, `name`) VALUE (?)';

        const values = [req.body.username, req.body.email, hashPassword, req.body.name];
        db.query(q, [values], (error, data) => {
            if(error) return res.status(500).json(error)

            return res.status(200).json('User has been created!')
        })
    })
}

export const login = (req:any, res:any) => {
    const q = 'SELECT * FROM users WHERE username = ?';

    db.query(q, [req.body.username], (error, data:any) => {
        if(error) return res.status(500).json(error);
        if(data.length === 0) return res.status(404).json('User not found!');
        // if not exist error, check the password
        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);
        
        if(!checkPassword) return res.status(400).json('Wrong username or password!');
        const token = jwt.sign({ id: data[0].id}, 'somesuperhardstringtoguess');
    
        const { password, ...others } =  data[0];
        res.cookie('accessToken', token, { 
            httpOnly: true, 
            secure: true,
            sameSite: 'None' 
        }).status(200).json(others);
    })
}

export const logout = (req:any, res:any) => {
    res.clearCookie('accessToken', {
        secure: true,
        sameSite: 'none'
    }).status(200).json('User has been logged out.');
}