import axios from "axios";

    const api = {
        // Query NYT API
        searchNYT: function(topic, startYear, endYear) {
          const authKey = "b2a7dbf436234e48832a1e98ebf582af";
          authKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
          return axios.get(queryURL);
        },
        // Retrieves saved articles from the db
        getArticle: function() {
          return axios.get("/api/saved");
        },
        // Saves a new article to the db
        saveArticle: function(articleObj) {
          return axios.post("/api/saved", articleObj);
        },
        // Deletes an article from the db
        deleteArticle: function(id) {
          return axios.delete(`/api/saved/${id}`); 
}
};
