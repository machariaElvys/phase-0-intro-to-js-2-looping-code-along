 


const names = [`Guadalupe`, `Ollie`, `Aki`];

const writeCards = () => {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
};

   countDown = () => {
    let count = 0
    while (count < 11 ){
     console.log( count ++);  
    }
   }

