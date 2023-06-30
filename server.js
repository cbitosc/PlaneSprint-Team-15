const express= require('express');
const app = express();
const port =8000;
const bodyparser= require('body-parser');
const cors=require('cors')
const user = require('./controller/userdetails');
const multer = require('multer');
const Course = require('./controller/coursedetails');
const fs = require('fs');
const path = require('path');


app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors())

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         if(!fs.existsSync('public')){
//             fs.mkdirSync("public");
//         }
//         if(!fs.existsSync('public/videos')){
//             fs.mkdirSync('public/videos');
//         }
//       cb(null, 'public/videos');
//     },
//     filename: function (req, file, cb) {
//       cb(null,Date.now()+file.originalname);
//     },
//   });

// const upload = multer({ storage: storage, 
//     fileFilter: function(req,file,cb){
//         var ext = pah.extname(file.originalname);
//         if(ext !=='.nkv' && ext !==".mp4"){
//             return cb(new Error("Only videos are allowed"))
//         }
//         cb(null,null);
//     }
// });


app.post('/register',user.registeruserdetails);
app.post('/login',user.checklogindetails);
// app.post('/courses',upload.fields([{name:"videos",maxCount:
app.post('/addcourse',Course.uploadcourses)
app.get('/allcourses',Course.getallcourses)
app.get('/course/:id',Course.getsinglecourse)



// 100}]),Course.uploadcourses)

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Connected to server at port ${port}`);
    }
})