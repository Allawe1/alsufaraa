import multer from 'multer'

var storge = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null ,'images')
    },
    filename :  function(req, file, cb){
        var ext = file.originalname.substr(file.originalname.lastIndexOf('.'));
        
        cb(null, Date.now()+ext)
    },
})


const store = multer({storage : storge})

export default store