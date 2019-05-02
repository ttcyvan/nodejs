let fs = require('fs')
let file = "video.mp4"

/*fs.readFile('video.mp4', (err, data)=>{ // ici data contient l'ensemble du fichier car on lis le fichier
	if(err) throw err;

	//ecrire un fichier 
	fs.writeFile('copy.mp4', data, (err) =>{
		if(err) throw err;
		console.log('copy reussir')
	})

})*/
fs.stat(file, (err,data) =>{
	let total = data.size
	let progress = 0

	let read = fs.createReadStream(file)
	let write = fs.createWriteStream('copie.mp4')
	let write2 = fs.createWriteStream('copie2.mp4')
	read.on('data', (chunk)=>{
		progress += chunk.length
		console.log("j'ai lu "+ Math.round(progress/total *100) + "  %")
	})

	read.pipe(write)
	read.pipe(write2)
		write.on('finish',()=>{
		 console.log('le fichier a bien ete copier')	
		})

		write2.on('finish2',()=>{
		 console.log('le fichier a bien ete copier')	
		})
})

