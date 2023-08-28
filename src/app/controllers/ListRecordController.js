
class ListRecordController{
    home(req,res){
        res.render('home');
    }
    // create(req,res){
    //     res.render('patient/create_record');
    // }
}

module.exports = new ListRecordController();
