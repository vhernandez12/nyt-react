import React, { Component } from  "react";
import Header from "../../components/Header";
import Navbar from "../../components/Nav";
import Search from "../../components/Search";
import Results from "../../components/Results";
import ResultItems from "../../components/ResultItems";
import api from "../../utils/API"

class Home extends Component {
    state = {
        query: "",
        begin: "",
        end: "",
        articles: [],
        results: [],
        error: "",
    };

    getSavedArticles = () => {
        api.getSavedArticles()
            .then((res) => {
                this.setState({ articles: res.data });
            });
    }

    handleTopicChange = (event) => {
        this.setState({ query: event.target.value });
    }

    handleStartYearChange = (event) => {
        this.setState({ begin: event.target.value });
    }

    handleEndYearChange = (event) => {
        this.setState({ end: event.target.value });
    }

    handleSaveButton = id => {
        const article = this.state.articles.find(article => article._id === id);
        console.log("article: ", article);
        api.saveArticle(article).then(res => this.getSavedArticles());
    }
    
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Getting NYT Articles");
        console.log("this.state.query: ", this.state.query);
        console.log("this.state.begin: ", this.state.begin);
        console.log("this.state.end: ", this.state.end);
        api.getArticles(this.state.query, this.state.begin, this.state.end)
            .then((res) => {
                this.setState({ articles: res.data.response.docs });
                console.log("this.state.articles: ", this.state.articles);
            });

    };


    render() {
        return (
            <div>
                <Navbar />
                <Header />
                 <Search
                    handleFormSubmit={this.handleFormSubmit}                
                    handleTopicChange={this.handleTopicChange}               
                    handleStartYearChange={this.handleStartYearChange}                
                    handleEndYearChange={this.handleEndYearChange}/>                                              
                   
                <Results>                
                    {this.state.articles.map(article => {
                        return (
                
                <ResultItems
                     _id={article._id}
                    key={article._id}
                    title={article.headline.main}
                    date={article.pub_date}
                    url={article.web_url}
                    handleSaveButton={this.handleSaveButton}
                                            />                
                    );
                })}
                </Results>
                
         </div>
        );
    }
}

export default Home;