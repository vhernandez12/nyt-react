var React = require("react");
var Router = require("react-router");

var helpers = require('../../utils/helpers');

var Results = React.createClass({

    getInitialState: function(){
        return {
            title: "",
            url: "",
            date: "", 
        }
    },

    handleClick: function(item, event){
        helpers.postSaved(item.headline.main, item.pub_date, item.web_url)
            .then(function(data){
            }.bind(this))
    },
});