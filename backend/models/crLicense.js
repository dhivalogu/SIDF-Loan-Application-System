const mongoose=require('mongoose');
const crLicenseSchema=mongoose.Schema(
    {
        crNo:{type:String,required:true},
        crDate:{type:String,required:true}
    }
);
module.exports=mongoose.model('crInfo',crLicenseSchema);

