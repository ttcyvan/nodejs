/*const EventEmitter = require('events');

let momevent = new EventEmitter() //instancier un nouvelle evenement

momevent.once('action', function(a,b){ //on demande de faire un evenement de nom action 

console.log("fait l'action demender",255,58) // action a faire

})

momevent.emit('action')
momevent.emit('action')
momevent.emit('action')
*/







let fs = require('fs') //inclure le module fs pour la lecture de fichier
let url = require('url')
let http = require('http')
const EventEmitter = require('events');
//let server = http.createServer()
//let event = new EventEmitter()


let App = {
	start:function(port){
		let emitter = new EventEmitter()
		
		let server = http.createServer((request,response) =>{ // ceci est le calback

			response.writeHead(200,{ // on met les bonnes entete 
				'Content-type': 'text/html; charset=utf-8'
				})

			if (request.url === '/') {
				emitter.emit('root',response)
			}
			response.end()

		}).listen(port)


		return emitter
	}
}

let app = App.start(80)
app.on('root',function(response){
response.write('je  suis a la racine')
})


/*server.on('request', (request,response) =>{

	response.writeHead(200)
	let query = url.parse(request.url, true).query
	let name = query.name
	query.name === undefined  ? 'anonyme' : query.name // condition ternaire 
		//lire le fichier quand une requette arrive
		fs.readFile('index.html', 'utf8', (err, data)=> { //on lis les fichiers err= erreur et data = le dossier a afficher
			if(err){//si il ya une erreur capturer et on les renvois
				reponse.writeHead(404) // l'entete renvois une erreur de type 404
				reponse.end("ce fichier n'existe pas")
			} 
			else{
				response.writeHead(200,{ // on met les bonnes entete 
				'Content-type': 'text/html; charset=utf-8'
				}) // la reponse renvoie le status 200 quand tous c'est bien passer

				reponse = data.replace('{{name}}', name)
				response.write(reponse) // message a afficher sur le navigateur 	
				response.end() // fin de la connexion
			}
		})
		
})

server.listen('80') // ecoute sur le port 80
*/

