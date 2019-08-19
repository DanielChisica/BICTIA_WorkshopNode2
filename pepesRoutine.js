const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const products = [];
const jsonParser = bodyParser.json();

var promise;
app.set('port',process.env.PORT || 3000)
app.use(express.static(path.join(__dirname,'pages')));

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});

app.post('/index',jsonParser,(req,res)=>{
    console.log(req.body)
    console.log(typeof req.body)
    console.log(`${req.method} body : ${req.body} request for ${req.url}`);
    promise= new Promise((resolve,reject)=>{
        let resolveMsg='06:00am he wake up'
        let rejectMsg='Alarm did not ring'
        setTimeout(()=>{
            if(req.body.bool1==false){
                resolve(resolveMsg)
            } else {
                reject(new Error(rejectMsg))
            }
        },2000)
    }).then((dataPromise)=>{
        console.log(dataPromise)
        return new Promise((resolve,reject)=>{
            let resolveMsg='07:00am he is ready and goes out to take TransMilenio'
            let rejectMsg='strike in the portal and cannot take transport'
            setTimeout(()=>{
                if(req.body.bool2==false){
                    resolve(resolveMsg)
                } else {
                    reject(new Error(rejectMsg))
                }
            },2000)
        })
    }).then((dataPromise)=>{
        console.log(dataPromise)
        return new Promise((resolve,reject)=>{
            let resolveMsg='08:15 am enter to the classroom'
            let rejectMsg='He is late and can not entry'
            setTimeout(()=>{
                if(req.body.bool3==false){
                    resolve(resolveMsg)
                } else {
                    reject(new Error(rejectMsg))
                }
            },2000)
        })
    }).then((dataPromise)=>{
        console.log(dataPromise)
        return new Promise((resolve,reject)=>{
            let resolveMsg='12:00 goes out of class and eat lunch'
            let rejectMsg='He cannot lunch because the soup has a hair'
            setTimeout(()=>{
                if(req.body.bool4==false){
                    resolve(resolveMsg)
                } else {
                    reject(new Error(rejectMsg))
                }
            },2000)
        })
    }).then((dataPromise)=>{
        console.log(dataPromise)
        return new Promise((resolve,reject)=>{
            let resolveMsg='01:00pm goes to his job at Bellatrix'
            let rejectMsg='forgot his badge and cannot entry'
            setTimeout(()=>{
                if(req.body.bool5==false){
                    resolve(resolveMsg)
                } else {
                    reject(new Error(rejectMsg))
                }
            },2000)
        })
    }).then((dataPromise)=>{
        console.log(dataPromise)
        return new Promise((resolve,reject)=>{
            let resolveMsg='08:00pm goes out of job to hangout with his workmates'
            let rejectMsg='He is stolen'
            setTimeout(()=>{
                if(req.body.bool6==false){
                    resolve(resolveMsg)
                } else {
                    reject(new Error(rejectMsg))
                }
            },2000)
        })
    }).then((dataPromise)=>{
        console.log(dataPromise)
        return new Promise((resolve,reject)=>{
            let resolveMsg='11:00pm comeback to home'
            let rejectMsg='He has lost his home keys and he has to sleep at park'
            setTimeout(()=>{
                if(req.body.bool7==false){
                    resolve(resolveMsg)
                } else {
                    reject(new Error(rejectMsg))
                }
            },2000)
        })
    }).then((dataPromise)=>{
        console.log(dataPromise)
        return new Promise((resolve,reject)=>{
            let resolveMsg='01:00am he goes to bed to watch Netflix'
            let rejectMsg='Forgot the monthly payment of Netflix... the bed is broken and he has not place to sleep'
            setTimeout(()=>{
                if(req.body.bool8==false){
                    resolve(resolveMsg)
                } else {
                    reject(new Error(rejectMsg))
                }
            },2000)
        })
    }).then((dataPromise)=>{
        console.log(dataPromise)
        res.json('Successfully directed');
    }).catch((err)=>{
        console.log(err.message)
        res.json('Successfully directed');
        }
    )
})

