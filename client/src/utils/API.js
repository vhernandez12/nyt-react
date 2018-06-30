import axios from "axios";

const api = {
    
    getArticles: function (query, begin, end) {
       const APIKEY = "?api-key=b2a7dbf436234e48832a1e98ebf582af";
        return axios.get( APIKEY + "&q=" + query + "&begin_date=" + begin + "0101&end_date=" + end + "0101");
    },
    // Retrieves saved articles from the db
    // Saves an article to the database
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData)
    },
  
    getSavedArticles: function() {
        return axios.get("routes/api/articles");
    },

};

export default api;