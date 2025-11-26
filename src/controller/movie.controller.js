import Movie from "../schema/movie.schema.js";
import { ApiError } from "../utils/custom-error.js";
import { errRes } from "../utils/error-response.js";
import { successRes } from "../utils/succes-response.js";

class MoviesController{
    async create(req, res){
        try {
            const { title } = req.body;
            const existData = await Movie.findOne({ title });
            if (existData){
                throw new ApiError('This movie already exist', 409)
            };
            const data = await Movie.create(req.body);
            successRes(res, data, 'created', 201)
        } catch (err) {
            errRes(res, err)    
        }
    }

    async findAll(req, res){
        try {
            const data = await Movie.find();
            if(!data){
                throw new ApiError('Movies not found', 404)
            };
            successRes(res, data)
        } catch (err) {
            errRes(res, err)
        }
    }

    async findOne(req, res){
        try {
            const data = await Movie.findById(req.params?.id);
            if(!data){
                throw new ApiError('Movie not found', 404)
            };
            successRes(res, data)
        } catch (err) {
            errRes(res, err)
        }
    }

    async update(req, res){
        try {
            const data = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if(!data){
                throw new ApiError('Movie not found', 404)
            }
            successRes(res, data, 'updated')
        } catch (err) {
            errRes(res, err)
        }
    }

    async remove(req, res){
        try {
            const data = await Movie.findByIdAndDelete(req.params.id);
            if(!data){
                throw new ApiError('Movie not found', 404)
            };
            successRes(res, {}, 'removed')
        } catch (err) {
            errRes(res, err)
        }
    }
}

export default new MoviesController;