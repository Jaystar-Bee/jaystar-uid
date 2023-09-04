var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function id(pattern, separator){
    if(!pattern || !separator){
        throw new Error('You must provide a pattern and a separator');
    }
    if(typeof pattern !== 'string'){
        throw new Error('You must provide a string or used the default package');
    }
    idsSubLength = pattern.split(separator);
    let id = '';
    for(let i = 0; i < idsSubLength.length; i++){
        for(let j = 0; j < idsSubLength[i]; j++){
            id += characters[Math.floor(Math.random() * characters.length)];
        }
        if(i < idsSubLength.length - 1){
            id += separator;
        }
    }
    return id;
}

module.exports = id;