import mongoosee, {Schema} from 'mongoose';


const listSchema = new Schema(
    {
        title: String,
        description: String
    },
    {
        timestamps: true
    }
)

const List = mongoosee.models.List || mongoosee.model("List", listSchema)

export default List;