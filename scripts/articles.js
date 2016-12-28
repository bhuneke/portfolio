'use strict';
function Article (opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Article.articles = [];

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

Article.processData = function (){
  console.log('blogArticles: ' + blogArticles);
  blogArticles.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  blogArticles.forEach(function(ele) {
    Article.articles.push(new Article(ele));
  });

  Article.articles.forEach(function(a) {
    $('#blog').append(a.toHtml());
  });
};
