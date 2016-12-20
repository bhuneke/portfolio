'use strict';

var articles = [];

function Article (opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Article.prototype.toHtml = function() {
  var source = $('#blog-template').html();
  var template = Handlebars.compile(source);

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
  if(this.daysAgo <= 1) {
    this.publishedStatus = 'Published today';
  } else {
    this.publishedStatus = 'Published ' + this.daysAgo + ' days ago';
  }


  var html = template(this);
  return html;
};

blogArticles.sort(function(curElem, nextElem) {
  return (new Date(nextElem.publishedOn)) - (new Date(curElem.publishedOn));
});

blogArticles.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a) {
  $('#blog').append(a.toHtml());
});
