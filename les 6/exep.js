function divid(a,b) {
    if ( b === 0) {
        throw new Error ("Ділення на нуль");
    }
    return a/b;
}
try{
    //код котрий може спричинити помилку 
    console.log(divid(5,0));
} catch (error) {

    console.error("Наша помилка: ",error.message);
} finally {

    console.log("Код який завжди виконується");
}