

function Bot(){



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


