const coursemodel = require('../models/coursedetails');

module.exports.uploadcourses = async (req,res)=>{
    const name=req.body.name;
    const orgname=req.body.orgname;
    const desc1=req.body.desc1;
    const desc2=req.body.desc2;
    const desc3=req.body.desc3;
    const desc4=req.body.desc4;
    const price=req.body.price;
    console.log(req.body);
    const entry = new coursemodel({name:name,orgname:orgname,desc1:desc1,desc2:desc2,desc3:desc3,desc4:desc4,price:price})
    const success =await entry.save()
    if (success){
        return res.send({code:200,message:'succesfully added',id:entry._id})
    }else{
        return res.send({code:500,message:'Error, question not added'})
    }
    // const {title,description} = req.body;
    // let videopath = [];
    // if(Array.isArray(req.files.videos) && req.files.videos.length>0){
    //     for(let video of req.files.videos){
    //         videopath.push('/'+videopath);
    //     }
    // }
    // try{
    //     const created = await coursemodel.create({
    //         title,
    //         description,
    //         videos:videopath
    //     })
    //     created.save();
    //     res.json({message:'Media created',created})
    // }catch(err){
    //     res.status(400).json(err);
    // }
}

module.exports.getallcourses = async (req,res)=>{
    const _data =await coursemodel.find({})
    if (_data){
        return res.send({code:200,message:'success',data:_data})
    }else{
        return res.send({code:400,message:'error'})
    }
}
module.exports.getsinglecourse = async (req,res)=>{
    const __data =await coursemodel.findById(req.params.id)
    
    if  (__data){
        return res.send({code:200,message:'success',data:__data})
    }else{
        return res.send({code:400,message:'error'})
    }
}
