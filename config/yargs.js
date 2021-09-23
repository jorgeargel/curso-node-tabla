
const argv = require ('yargs')
.option('b', {
  alias: 'base',
  type:'number',
  demandOption : true,
  describe:'Es la base de la tabla de multiplicar'
})
.option('h', {
  alias: 'hasta',
  type:'number',
 demandOption:true,
  describe:'Este es el numero hasta donde quieres la tabla de multiplicar'
})

.option('l', {
  alias: 'listar',
  type:'boolean',
  default:false,
  describe:'muestra la tabla de la consola'
})
.check( (argv, _options) => {
if( isNaN( argv.b )){

throw 'la base tiene que ser un numero'

}

return true;

})
.argv;

module.exports = argv;