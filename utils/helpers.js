module.exports = {

    get_image: () => {
        const randomNum = Math.floor(Math.random()*41);
    
        // Return a random emoji
        return`/assets/images/cocktailImages/pexels-photo-${randomNum}.jpeg`
    }
    };