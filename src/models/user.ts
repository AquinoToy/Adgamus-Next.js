import { Schema, model, models} from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true,'El correo electronico es requerido'],
        match: [
            /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
            'El  correo electrónico no es válido.'
        ]
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida'],
        selectd: false
    },
    username:{
        type: String,
        required: [true, 'El usuario es requerido'],
        minLength: [3, 'El nombre de usuario debe tener al menos 3 caracteres'],
        maxLenght: [45, 'El nombre de usuario permite un máximo de 45 caracteres'],
    },
    firstname: {
        type: String,
        //required: [true, 'El nombre es requerido'],
    },
    lastname: {
        type: String,
        //required: [true, 'El apellido es requerido'],
    },
    description: {
        type: String,
    },
    picture: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false, 
      }
});

const User = models.User || model('User', UserSchema)
export default User;