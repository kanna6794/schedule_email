const bcrypt = require('bcryptjs');
var fs = require('fs');
//const moment = require('moment');
const moment = require('moment-timezone');
let cron = require('node-cron');



////email dynamic

async function scheduledynamic(data) {
    var email = data.email;
    var message = data.message;
    var schd = parseInt(data.schedule);
    

            var transporter2 = nodemailer.createTransport({
                host:'smtp.hostinger.in',
                port:465,
               secure:true,
                auth: {
                    user:'kanna@nainatechnologies.com',
                    pass:'K@sword1'
                }
        })
           
            
           
            mailOptions = {
                from:'kanna@nainatechnologies.com',
                to:email,
                subject:"Test email",
                html:'<h2>Hi this is my first message</h2>'
            }


            cron.schedule('0 */'+schd+' * * * *', () => {
                transporter2.sendMail(mailOptions, function (err, info) {
                    if(err) 
                      console.log(err);
                    else
                      console.log(info);
                     });
                });

                return 'sucees'
  }





router.post('/createuser', function (req, res, next) {
    var data = req.body;
    usercreate(data).then(host => {
        return res.status(200).json({
            message: "Sucess",
            statuscode: "200",
        });

    })
        .catch(err => {
            console.log("Error_Promised_Occured")
            console.error(err);
        });

});

async function  usercreate(data){
    return new Promise(async (resolve, reject) => { // <--- this line
        try {
            var email = data.email;
            var name = data.name;
            var schedule = data.scedule;
            var subject = data.subject;
            var insuser = await userdata(data);
            var emailschd = await scheduledynamic(data);
            resolve('sucess')
           
        } catch (error) {
            return reject(error);
        }
    });
 
}




async function userdata(data) {
    const createinsrt = await user.create(data);
    return createinsrt;
  }

  ///get data
    ///getsliderforall
router.post('/getuser', function (req, res) {
    user.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});
///edit user details

router.get('/edituser', function (req, res) {
    user.findOne({email:req.body.email}, function (_err, user) {
        res.send(user);
    });
});
///update user
router.post('/updateschedule', function (req, res, _next) {
    user.update({email:req.body.email }, {
        $set: {
            schedule:req.body.schedule,
            name:req.body.name
        }
    }, function (err, _user) {
        if (err) {
            res.status(200).json({
                message: "Update Not sucessfully",
                statuscode: "202"
            });
        }
        else {
            res.status(200).json({
                message: "Update  sucessfully",
                statuscode: "200"
            });

        }
    })
});





module.exports = router;
