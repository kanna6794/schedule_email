First need to install node js and mongodb  your machine 
Next download the project then start the npm install  and npm start

npm install 
npm install cron


The port run on http://localhost:2001/

Firt Create user api
http://localhost:2001/api/v1.0/createuser
Request 
{"email":"kdhasan24.kd@gmail.com",
"subject":"sdfsf",
"schedule":"2" ////schedule for miunts
}

List api
http://localhost:2001/api/v1.0/getuser
Edit user
http://localhost:2001/api/v1.0/edituser
{"email":"kdhasan24.kd@gmail.com",
}

//update user dteails
http://localhost:2001/api/v1.0/updateschedule

{"email":"kdhasan24.kd@gmail.com",
"schedule":"12"
}


# schedule_emailtask
# schedule_emailtask
