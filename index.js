const express = require('express')

const mongoose = require('mongoose')

const cors = require('cors')

const UserModel = require('./models/UserModel')
const DescriptionModel = require('./models/DescriptionModel')
const BlogModel = require('./models/BlogModel')
const ServicesModel = require('./models/ServicesModel')
const GalleryVideoModel = require('./models/GalleryVideoModel')
const GalleryImageModel = require('./models/GalleryImageModel')
const DoctorsModel = require('./models/DoctorsModel')
const AppointmentModel = require('./models/Appointment')
const HeroModel = require('./models/Hero')
const ContactModel = require('./models/Contact')
const ReportModel = require('./models/Reports')

mongoose.set('strictQuery', false)

mongoose.connect('mongodb+srv://vaagish:vaagish123@cluster0.gtz5aqb.mongodb.net/my_db?retryWrites=true&w=majority', ()=> {
    console.log('Database connected successfully')
})
.catch((err)=>{
    console.log(err)
})

const app = express()

app.use(express.json())

app.use(cors())

const PORT = '3002'

app.get('/ping', (req, res)=> {
    res.send('pong')
})

// app.post('/post', (req, res)=> {
//     const {userName, password} = req.body
//     res.json(userName, password)
// })

app.post('/adding-user', async (req, res)=> {
    const check = await req.body
   await UserModel.create(check)
   .then(()=> {
        res.send("data uploaded successfully")
   })
   .catch((err)=> {
        res.send(`This is the error : ${err.message}`)
   })

})

app.put('/update-user', async (req, res)=> {
    const check = await req.body

   await UserModel.find(check)
   .then(()=> {
    UserModel.updateOne()
   })
   .catch((err)=> {
    res.send(`This is the error : ${err}`)
   })

})


app.get('/get-user', async (req, res)=> {
    const check = await req.body

   await UserModel.find(check)
   .then((obj)=> {
    res.send(obj)
   })
   .catch((err)=> {
    res.send(`This is the error : ${err}`)
   })

})



app.get('/get-all-user', async (req, res)=> {

   await UserModel.find()
   .then((obj)=> {
    res.send(obj)
   })
   .catch((err)=> {
    res.send(`This is the error : ${err}`)
   })

})


app.post('/adding-desc', async (req, res)=> {
    const check = await req.body
   await DescriptionModel.create(check)
   .then(()=> {
        res.send("data uploaded successfully")
   })
   .catch((err)=> {
        res.send(`This is the error : ${err.message}`)
   })

})

app.get('/get-desc', async (req, res)=> {
    const check = await req.body

   await DescriptionModel.findOne(check)
   .then((obj)=> {
    res.json(obj)
   })
   .catch((err)=> {
    res.send(`This is the error : ${err}`)
   })

})



// ---- Blog Model Start ---


app.post('/adding-blog', async (req, res)=> {
    const check = await req.body
   await BlogModel.create(check)
   .then(()=> {
        res.send("data uploaded successfully")
   })
   .catch((err)=> {
        res.send(`This is the error : ${err.message}`)
   })

})

app.get('/get-blog', async (req, res)=> {
    const check = await req.body

   await BlogModel.find()
   .then((obj)=> {
    res.json(obj)
   })
   .catch((err)=> {
    res.send(`This is the error : ${err}`)
   })

})


app.post('/delete-blog', async (req, res)=> {
     const {id} = await req.body
    await BlogModel.deleteOne({_id:id})
    .then(()=> {
         res.send("data deleted successfully")
    })
    .catch((err)=> {
         res.send(`This is the error : ${err.message}`)
    })
})

app.post('/blogElement', async (req, res)=> {
    const {title} = req.body
    const blogTitle = await BlogModel.findOne({title})

    res.json(blogTitle)
})



// ------- Services Model Start -------\\\

app.get('/get-services', async (req, res)=> {
    const check = await req.body

   await ServicesModel.find()
   .then((obj)=> {
    res.json(obj)
   })
   .catch((err)=> {
    res.send(`This is the error : ${err}`)
   })

})

app.post('/adding-service', async (req, res)=> {
    const check = await req.body
   await ServicesModel.create(check)
   .then(()=> {
        res.send("data uploaded successfully")
   })
   .catch((err)=> {
        res.send(`This is the error : ${err.message}`)
   })

})

app.post('/delete-service', async (req, res)=> {
     const check = await req.body
    await ServicesModel.deleteOne(check)
    .then(()=> {
         res.send("data deleted successfully")
    })
    .catch((err)=> {
         res.send(`This is the error : ${err.message}`)
    })
})

// ================XXXXXXX===========



// --------- Gallery Model --------

app.get('/get-gallery-video', async (req, res)=> {
    const check = await req.body

   await GalleryVideoModel.find()
   .then((obj)=> {
    res.json(obj)
   })
   .catch((err)=> {
    res.send(`This is the error : ${err}`)
   })

})

app.post('/add-gallery-video', async (req, res)=> {
    const check = await req.body
   await GalleryVideoModel.create(check)
   .then(()=> {
        res.send("data uploaded successfully")
   })
   .catch((err)=> {
        res.send(`This is the error : ${err.message}`)
   })

})



app.get('/get-gallery-images', async (req, res)=> {
    const check = await req.body

   await GalleryImageModel.find()
   .then((obj)=> {
    res.json(obj)
   })
   .catch((err)=> {
    res.send(`This is the error : ${err}`)
   })

})

app.post('/add-gallery-image', async (req, res)=> {
    const check = await req.body
   await GalleryImageModel.create(check)
   .then(()=> {
        res.send("data uploaded successfully")
   })
   .catch((err)=> {
        res.send(`This is the error : ${err.message}`)
   })

})

app.post('/delete-gallery-image', async (req, res)=> {
    const check = await req.body
   await GalleryImageModel.deleteOne(check)
   .then(()=> {
        res.send("data deleted successfully")
   })
   .catch((err)=> {
        res.send(`This is the error : ${err.message}`)
   })

})




// ========== XXXXXXx =========



// -------------- Doctor's Model ------------

app.get('/get-doctors', async (req, res)=> {
     const check = await req.body
 
    await DoctorsModel.find()
    .then((obj)=> {
     res.json(obj)
    })
    .catch((err)=> {
     res.send(`This is the error : ${err}`)
    })
 
 })

 app.post('/add-doctor', async (req, res)=> {
     const check = await req.body
    await DoctorsModel.create(check)
    .then(()=> {
         res.send("data uploaded successfully")
    })
    .catch((err)=> {
         res.send(`This is the error : ${err.message}`)
    })
 
 })

 app.post('/delete-doctor', async (req, res)=> {
     const check = await req.body
    await DoctorsModel.deleteOne(check)
    .then(()=> {
         res.send("data deleted successfully")
    })
    .catch((err)=> {
         res.send(`This is the error : ${err.message}`)
    })
 
 })


// =========== XXXXXX ==============



// -------------- Appointment Model ------------

app.get('/get-appointments', async (req, res)=> {
     const check = await req.body
 
    await AppointmentModel.find()
    .then((obj)=> {
     res.json(obj)
    })
    .catch((err)=> {
     res.send(`This is the error : ${err}`)
    })
 
 })

 app.post('/add-appointment', async (req, res)=> {
     const check = await req.body
    await AppointmentModel.create(check)
    .then(()=> {
         res.send("data uploaded successfully")
    })
    .catch((err)=> {
         res.send(`This is the error : ${err.message}`)
    })
 
 })

 app.post('/delete-appointment', async (req, res)=> {
     const check = await req.body
    await AppointmentModel.deleteOne(check)
    .then(()=> {
         res.send("data deleted successfully")
    })
    .catch((err)=> {
         res.send(`This is the error : ${err.message}`)
    })
 
 })


// =========== XXXXXX ==============


// -------------- Hero Section Model ------------

app.get('/get-hero', async (req, res)=> {
     const check = await req.body
 
    await HeroModel.find()
    .then((obj)=> {
     res.json(obj)
    })
    .catch((err)=> {
     res.send(`This is the error : ${err}`)
    })
 
 })

 app.post('/add-hero', async (req, res)=> {
     const check = await req.body
    await HeroModel.create(check)
    .then(()=> {
         res.send("data uploaded successfully")
    })
    .catch((err)=> {
         res.send(`This is the error : ${err.message}`)
    })
 
 })

 app.post('/delete-hero', async (req, res)=> {
     const check = await req.body
    await HeroModel.deleteOne(check)
    .then(()=> {
         res.send("data deleted successfully")
    })
    .catch((err)=> {
         res.send(`This is the error : ${err.message}`)
    })
 
 })


// =========== XXXXXX ==============




// -------------- Contact Section Model ------------

app.get('/get-contacts', async (req, res)=> {
     const check = await req.body
 
    await ContactModel.find()
    .then((obj)=> {
     res.json(obj)
    })
    .catch((err)=> {
     res.send(`This is the error : ${err}`)
    })
 
 })

 app.post('/add-contact', async (req, res)=> {
     const check = await req.body
    await ContactModel.create(check)
    .then(()=> {
         res.send("data uploaded successfully")
    })
    .catch((err)=> {
         res.send(`This is the error : ${err.message}`)
    })
 
 })

 app.post('/delete-contact', async (req, res)=> {
     const check = await req.body
    await ContactModel.deleteOne(check)
    .then(()=> {
         res.send("data deleted successfully")
    })
    .catch((err)=> {
         res.send(`This is the error : ${err.message}`)
    })
 
 })


// =========== XXXXXX ==============



// -------------- Report Section Model ------------

app.get('/get-reports', async (req, res)=> {
     const check = await req.body
 
    await ReportModel.find()
    .then((obj)=> {
     res.json(obj)
    })
    .catch((err)=> {
     res.send(`This is the error : ${err}`)
    })
 
 })

 app.post('/add-report', async (req, res)=> {
     const check = await req.body
    await ReportModel.create(check)
    .then(()=> {
         res.send("data uploaded successfully")
    })
    .catch((err)=> {
         res.send(`This is the error : ${err.message}`)
    })
 
 })

 app.post('/delete-report', async (req, res)=> {
     const check = await req.body
    await ReportModel.deleteOne(check)
    .then(()=> {
         res.send("data deleted successfully")
    })
    .catch((err)=> {
         res.send(`This is the error : ${err.message}`)
    })
 
 })


// =========== XXXXXX ==============


app.listen(PORT, ()=> {
    console.log(`Backend is working fine on port ${PORT}`)
})
