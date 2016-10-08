var Chance = require('chance').Chance();

function Bot(avatarIds){

    this._cards = [];
    this._photoId = getRandomPhotoId(avatarIds);
    this._userId = Chance.string({length:5}); 

}

Bot.prototype.getUserId = function getUserId(){
    return this._userId;
}

Bot.prototype.getPhotoId = function getDetails(){
    return this._photoId;
}

function getRandomPhotoId( selectedPhotoIds){


    while(true){
        
        var id = Chance.natural({min:0,max:5});
        
        if(selectedPhotoIds.indexOf(id) == -1){    
            return id;
        }
    }             

    
}
module.exports = Bot;


