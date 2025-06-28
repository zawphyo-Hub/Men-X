
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');


const app = express();
app.use(express.json());
app.use(cors());

//------------------------DATABASE CONNECTION----------------------------
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", //Insert Password
    database: "menx"


});

db.connect((err) => {
    if (err) {
        console.error("Database Connection Failed: ", err);
    } else {
        console.log("Connected to Database");
    }
});
// ----------------------------LOGIN PROCESS---------------------------
app.post('/login', (req, res) => {

    const { email, password } = req.body;
         

    const sql = "SELECT USERNAME, EMAIL, PASSWORD FROM USERS WHERE EMAIL = ? ";
   
    db.query(sql, [email], (err, data) => {
        if(err) 
        { 
            return res.json({message : 'Login Failed, Error!!'});
        }
        

        if (data.length > 0) {
            bcrypt.compare(password, data[0].PASSWORD, (err, match) => {
                if (match) {
                    return res.json({ message: "Login Successful", 
                                      username: data[0].USERNAME, 
                                      email: data[0].EMAIL  });
                   
                } else {
                    return res.json({ message: "Incorrect Email/Password" });
                }
            });
        } else {
            return res.json({ message: "No Users Found" });
        }
        
    })

})
// ----------------------------REGISTER PROCESS -----------------------------
app.post('/Register', async (req, res) => {
    try{
        const {username, confirm_pass, password, email,  countryCode, phoneNumber, address} = req.body;

        const checkEmailExist = "SELECT EMAIL FROM USERS WHERE EMAIL = ?";
        db.query(checkEmailExist, [email], async (err, data) =>{
            if(err){
                console.log({Message: "Error query"});
                return res.json({message: 'Error!!'});
            }
            if(data.length > 0){
                return res.json({message: "Email already used"});
            }

                 
            try{
                if(password === confirm_pass){
                    const hashRound = 10;
                    const hashPassword = await bcrypt.hash(password, hashRound);

                    
                    const value1 = [username,  hashPassword, email,  countryCode, phoneNumber, address];
                
                    
                    const sql = "INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, COUNTRYCODE, PHONENUMBER, ADDRESS) VALUES(?, ?,?,?,?,?)";
                    db.query(sql, value1, (err) => {
                        if(err){
                            return res.json({message: 'Register Failed'});
                        
                        }
                        else return res.json({message: 'Successfully register'});
                
                    })

                }
                else{
                    return res.json({message: 'Password Does Not Match'});

                }
                

            }catch(error){
                return res.status(500).json({message: 'register error!'});
            }
            
        });

    }catch(error){
        return res.json({message: 'Error Inserting Data!!'});
    }
   

})

app.listen(8080, () => {
    console.log("Server Running on port 8080");

})
// USE menx;
// CREATE TABLE USERS(
// USERID INT NOT NULL PRIMARY KEY auto_increment,
// USERNAME VARCHAR(250),
// PASSWORD VARCHAR(255),
// EMAIL VARCHAR(250),
// COUNTRYCODE VARCHAR(10),
// PHONENUMBER VARCHAR(20),
// ADDRESS VARCHAR(500)
// );

// ALTER TABLE USERS
// MODIFY PHONENUMBER VARCHAR(20);

// DROP TABLE USERS;
// INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, COUNTRYCODE, PHONENUMBER, ADDRESS) 
// VALUES ('Zaw', '1111', 'zaw@gmail.com', '95', '9877776', 'Yangon'),
//        ('Kyaw', '2222', 'kyaw@gmail.com', '95', '9877776', 'Yangon');

// SHOW TABLES;
// SELECT * FROM USERS;
// SELECT EMAIL, PASSWORD FROM USERS WHERE EMAIL = 'zaw@gmail.com' AND PASSWORD = '1111';

