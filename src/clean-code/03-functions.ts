
(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getBiographyActorById( id: string ) {
        console.log({ id });
    }

    class MovieDto {
        title: string = "" 
        description: string = "" 
        rating: number = 0 
        cast: string[] = []
    }
    
    function createMovie(
        movieDto: MovieDto ) {
            console.log({ 
                movieDto.title, 
                movieDto.description, 
                movieDto.rating, 
                movieDto.cast });
    }

    function createActor( 
        fullName: string, 
        birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) : number => {
      
        if ( isDead ) return 1500;
        
        if ( isSeparated ) return 2500;
    
        return isRetired ? 3000 : 4000;  
        
    }
    
    

})();




