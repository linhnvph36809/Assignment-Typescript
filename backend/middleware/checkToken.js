import jwt from 'jsonwebtoken';
import { modelAuth } from '../Models/Model.js';

const checkToken = async (req, res, next) => {
    let auth = req.headers.authorization;
    if (auth) {
        try {
            const token = auth.split(' ')[1];
            const { uid: id } = jwt.verify(token, '123456');
            const user = await modelAuth.findOne({ _id: id });
            user && next();
        } catch (error) {

        }
    }
};

export default checkToken;
