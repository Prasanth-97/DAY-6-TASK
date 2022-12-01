
// Class-Movie

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;

        // if rating is null set rating to PG  

        if (this.rating == undefined) {
            this.rating = "PG";
        }
        else {
            this.rating = rating;
        };

    }

   static  getPG(movie) {
        let result = movie.filter((element) => element.rating == "PG");
        return result;
    }
    
    }


let movie1 = new Movie("Ponniyan selvan", "Lyca Productions","PG");
let movie2 = new Movie("Naayagan", "Muktha Flims", "PG13");
var movie3 = new Movie("Casino Royale", "Eon Productions", "PG13");
let movie4 = new Movie("Vickram", "Raaj Kamal Films");
let movie = [movie1,movie2,movie3,movie4];

// option (a)

console.log("Movie name : ", movie1); 

// output : Movie name : Movie {title: 'Ponniyan selvan', studio: 'Lyca Productions', rating: 'PG'}


// option (b)

console.log("Setting rating as PG for movie4 : ", movie4.rating); 

// output : Setting rating as PG for movie4 :  PG

//option (c)

console.log("Movies with PG rating : ", Movie.getPG(movie));

// output : Movies with PG rating : 0 : Movie {title: 'Ponniyan selvan', studio: 'Lyca Productions', rating: 'PG'}
// 1 : Movie {title: 'Vickram', studio: 'Raaj Kamal Films', rating: 'PG'} 

//option (d)

var movie3 = new Movie("Casino Royale", "Eon Productions", "PG13");



