import { PositonsModel } from "../../models/positions.js";

const PositionController = {
    create : (req,res) => {
        try {
            const position = PositonsModel.create({
                code : req.body.ma,
                positonName: req.body.ten,
                des: req.body.moTa,
                isDeleted: req.body.trangThai
            })
            res.status(201).json(position);

        } catch (error) {
            res.status(403).json({message: error.message});
        }
    },
    getAll : async (req,res) => {
try {
    const positions = await PositonsModel.find({isDeleted : false})
    res.json(positions);
 
} catch (error) {
    res.status(403).json({message: error.message});
}
    }
}

export  default PositionController