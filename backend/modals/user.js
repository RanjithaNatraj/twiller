import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    displayname: { type: String, required: true },
    avatar: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String, default: '' },
    website: { type: String, default: '' },
    joindate: { type: Date, default: Date.now() },
});
//password:{type:String,required:true},

export default mongoose.model('User', UserSchema);