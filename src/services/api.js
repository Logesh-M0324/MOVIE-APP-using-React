const API_KEY = "30897ca5a402d735c70a3b1270ccfacc"
const BASE_URL = "https://api.themoviedb.org/3"


export const getPopularMovies = async()=>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results
}
export const searchMovies = async(query)=>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results
}
// const API_KEY = "";  // Replace with your actual TMDb API key
// const BASE_URL = "https://api.themoviedb.org/3";

// export const getPopularMovies = async () => {
//     try {
//         const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
//         if (!response.ok) {
//             throw new Error("Failed to fetch popular movies");
//         }
//         const data = await response.json();
//         return data.results;
//     } catch (error) {
//         console.error("Error fetching popular movies:", error);
//         return [];
//     }
// };

// export const searchMovies = async (query) => {
//     try {
//         const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
//         if (!response.ok) {
//             throw new Error("Failed to fetch search results");
//         }
//         const data = await response.json();
//         return data.results;
//     } catch (error) {
//         console.error("Error searching movies:", error);
//         return [];
//     }
// };
