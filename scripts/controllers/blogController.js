(function(module) {
  var blogController = {};

  blogController.index = function(ctx, next) {
    view.index(ctx.articles);
  };

  blogController.loadByCategory = function(ctx, next) {
    var categoryData = function(articlesByCategory) {
      ctx.articles = articlesByCategory;
      next();
    };
  };

  blogController.loadAll = function(ctx, next) {
    var articleData = function(allArticles) {
      ctx.articles = Article.allArticles;
      next();
    };

    if (Article.allArticles.length) {
      ctx.articles = Article.allArticles;
      next();
    } else {
      Article.fetchAll(articleData);
    };
  };

  module.blogController = blogController;
})(window);
