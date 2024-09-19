/*console.log('1')
setTimeout(()=>{console.log('Log time 1')}, 1000)
console.log('2')
setTimeout(()=>{console.log('Log time 2')}, 1000)
console.log('3')
setTimeout(()=>{console.log('Log time 3')}, 1000) */

setTimeout(()=>{
    console.log('Log time 1'),
    setTimeout(()=>{
        console.log('Log time 2')},1000) 

},1000)


/*
import https from 'node:https'

https.get('https://swapi.dev/api/planets/1', (res)=> {

    console.log('1',res.statusCode)
})
console.log('between')
https.get('https://swapi.dev/api/people/1', (res)=> {

    console.log('2', res.statusCode)
    const homeworldUrl = res.data.homeworld
    https.get(homeworldUrl, (respons)=>{
        console.log('homeworldUrl' , respons.data.name )
    })
}) */