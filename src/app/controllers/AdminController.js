
class AdminController{
    home(req,res){
        res.render('home');
    };
}

module.exports = new AdminController();