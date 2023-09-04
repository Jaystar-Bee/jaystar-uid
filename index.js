var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

 function id(length = 11){
    if(typeof length !== 'number' && Number.isNaN(length)){
        throw new Error('You must provide a number');
    }
    if(typeof length == 'string'){
        length = Number(length);
    }
    let id = '';
    for(let i = 0; i < length; i++){
        id += characters[Math.floor(Math.random() * characters.length)];
    }
    return id;
}

module.exports = id;

