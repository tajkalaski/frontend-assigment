let movieList =
    [
        {
            "name": "The+Conjuring",
            "trailer": "k10ETZ41q5o"
        },
        {
            "name": "The+Conjuring+2",
            "trailer": "VFsmuRPClr4"
        },
        {
            "name": "Annabelle",
            "trailer": "paFgQNPGlsg"
        },
        {
            "name": "Annabelle+Creation",
            "trailer": "KisPhy7T__Q"
        },
        {
            "name": "The+Nun",
            "trailer": "pzD9zGcUNrw"
        }
    ]

//finding the root element
const app = document.getElementById('root');

//creating a container element
const container = document.createElement('div');
container.setAttribute('class', 'container');

//attaching the container to the root element
app.appendChild(container);

//looping through all the movies in movielist
for (var i = 0; i < movieList.length; i++) {

    // the url for the omdbapi films
    let url = "http://www.omdbapi.com/?t=" + movieList[i].name + "&apikey=4e53d79";
    const video = document.createElement('iframe');
    video.setAttribute('src', "https://www.youtube.com/embed/" + movieList[i].trailer );

    fetch(url)
        //when the promise is resolved we extract the JSON part of the response object
        .then(response => {
            return response.json();
        })
        //then we can work with the JSON data
        .then(movie => {
            
                //Create a div with a card class
                const card = document.createElement('div');
                card.setAttribute('class', 'card');

                let image = document.createElement('img');
                image.setAttribute('src', movie.Poster );

                //Create an h1 and set the text content to the film's title
                const h1 = document.createElement('h1');

                const h2 = document.createElement('h2');

                const h3 = document.createElement('h3');

               
                
                // Create a p and set the text content to the film's description
                const p = document.createElement('p');


                const title = document.createTextNode(movie.Title);
                h1.append(title);

                const rating = document.createTextNode(movie.imdbRating);
                h2.append(rating);

                const year = document.createTextNode(movie.Released);
                h3.append(year);

                const description = document.createTextNode(movie.Plot.substr(0,300));
                p.append(description)
                

                // Each card will contain an h1 and a p
                card.appendChild(image);
                card.appendChild(h1);
                card.appendChild(h2);
                card.appendChild(h3);
                card.appendChild(p);
                card.appendChild(video);

                //Append the cards to the container element
                container.append(card)
            })
        
        // .catch(err => {
        //     // Do something for an error here
        //     const errorMessage = document.createElement('marquee');
        //     errorMessage.textContent = `Gah, it's not working!`;
        //     app.appendChild(errorMessage);
        // })
    }