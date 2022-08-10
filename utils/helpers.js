// Random picture generator
module.exports = {

    get_image: () => {
        const randomNum = Math.floor(Math.random()*41);
    
        return`/assets/images/cocktailImages/pexels-photo-${randomNum}.jpeg`
    }
    };