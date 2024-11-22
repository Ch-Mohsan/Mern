const vatidator=(schema)=> async(req,res,next)=>{
    try {
        const praseBody= await schema.parseAsync(req.body)
        req.body=praseBody;
        next()

    } catch (error) {
         res.status(404).json({message:error.errors})
        //next(error)
        
    }
}
module.exports=vatidator