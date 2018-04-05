function getenc(f){
  var enc;
  try {
    enc = f.getContentText().match(/charset....+?"/)[0];
    enc = enc.slice(enc.indexOf('=')+1).replace(/"/g,'');
  } catch(e) {
    Logger.log(e);
  }
  return enc;
}
