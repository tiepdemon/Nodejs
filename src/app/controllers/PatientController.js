
class PatientController{
    home(req,res){
        res.render('patient/patient_home');
    };

    information(req,res){
        res.render('patient/patient_info');
    };

    list_record(req,res){
        res.render('patient/patient_list_record');
    };
    
    create_record(req,res){
        res.render('patient/create_record');
    };
    
    medical_record(req,res){
        res.render('patient/medical_record');
    };
    // create_qr(req,res){
    //     res.render('patient/');
    // };
}

module.exports = new PatientController();
