const notFound = (req,res)=>{
    res.status(404).send("No such route");
}

module.exports = notFound;