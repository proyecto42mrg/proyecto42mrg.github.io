importar  {
  getStorage
}  de  "./fabrica.js" ;

 almacenamiento  constante =  getStorage ( ) ;

/ **
* @param { string } nombre nombre
 * con que se sube el archivo.
* @param {
    FormDataEntryValue }
    archivo archivo a subir. * /
exportar  función asíncrona 
  subeStorage ( nombre ,  archivo )  {
  if  ( instancia de archivo de  File &&  
    archivo . tamaño  >  0 )  {
    aguardar  almacenamiento .
      ref ( nombre ) .
      poner ( archivo ) ;
  }
}

/ **
* @param { string } nombre nombre
* del archivo. * /
exportar  función asíncrona 
  urlStorage ( nombre )  {
  prueba  {
    regreso a la  espera de  almacenamiento .
      ref ( nombre ) .
      getDownloadURL ( ) ;
  }  captura  ( e )  {
    consola . log ( e ) ;
    volver  "" ;
  }
}

/ **
* @param { string } nombre nombre
* del archivo. * /
exportar  función asíncrona 
  eliminaStorage ( nombre )  {
  regreso a la  espera de  almacenamiento .
    ref ( nombre ) . eliminar ( ) ;
}
