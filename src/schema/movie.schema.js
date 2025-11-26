import { model, Schema } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
        enum: ['Uzbek', 'Russian', 'English']
    },
    genre: {
        type: String,
        required: true,
        enum: ['Comedy', 'Drama', 'Horror']
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model('Movie', movieSchema)