


module.exports = {

index: (req,res) =>{

res.render('index',{
    title: 'Energia de luz - Inicio',
    css: 'index.css'
})
    
},

masajes: (req,res) =>{
    res.render('masajes',{
        title: 'Energia de luz - masajes',
        css: 'masajes.css'
    })
},

reiki: (req,res) =>{
    res.render('reiki',{
        title: 'Energia de luz - reiki',
        css: 'reiki.css'
    })
},

tarot: (req,res) =>{
    res.render('tarot',{
        title: 'Energia de luz - tarot',
        css: 'tarot.css'
    })
},

contacto: (req,res) =>{
    res.render('contacto',{
        title: 'Energia de luz - contacto',
        css: 'contacto.css'
    })
},



}