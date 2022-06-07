const mongoose = require('mongoose');
const credentialSchema = mongoose.Schema(
    {
        user_id:{type:String,required:true},
        password:{type:String,required:true}
    }
);
module.exports=mongoose.model('Credential',credentialSchema);
