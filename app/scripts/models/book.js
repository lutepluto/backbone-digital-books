
var app = app || {}

app.Book = Backbone.Model.extend({
  defaults: {
    coverImage: 'images/placeholder.png',
    title: 'No title',
    author: 'Unknown',
    releaseDate: new Date().getTime(),
    keywords: 'None'
  },

  parse: function(response) {
    response.id = response._id
    return response
  }
})