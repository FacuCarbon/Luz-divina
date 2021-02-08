


module.exports = {

index: (req,res) =>{

res.render('index',{
    title: 'Energia de luz - Inicio',
    css: 'style.css'
})
    
},

masajes: (req,res) =>{
    res.render('masajes',{
        title: 'Energia de luz - masajes',
        css: 'style.css'
    })
},

reiki: (req,res) =>{
    res.render('reiki',{
        title: 'Energia de luz - reiki',
        css: 'style.css'
    })
},

tarot: (req,res) =>{
    res.render('tarot',{
        title: 'Energia de luz - tarot',
        css: 'style.css'
    })
},

contacto: (req,res) =>{
    res.render('contacto',{
        title: 'Energia de luz - contacto',
        css: 'style.css'
    })
},



}