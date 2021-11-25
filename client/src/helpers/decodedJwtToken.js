import { default as jwt } from 'jsonwebtoken';

const token = jwt.decode(localStorage.getItem('token'));

export default token;
