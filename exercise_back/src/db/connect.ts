import { connect } from 'mongoose';
const connectDB = (url: string) => {
    return connect(url)
}

module.exports = connectDB;
