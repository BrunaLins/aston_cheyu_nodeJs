

async function keyword(){
    try{
       const keywords = await Propertys.findAll({
         attributes: ['keyword']
       })       
       keywords.filter(keyword=>keywords.include(keyword.keyword));
        return keyword;
    }catch(error){
        console.log(error);
    }
}
module.exports ={ keyword } ;

async function caracter(){
    try{
       const caracters = await Propertys.findAll({
         attributes: ['caracter']
       })       
       caracters.filter(caracter=>caracters.include(caracter.caracter));
        return caracter;
    }catch(error){
        console.log(error);
    }
}
module.exports ={ caracter} ;