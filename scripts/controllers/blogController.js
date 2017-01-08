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

    Article.findWhere(ctx.params.categoryName, categoryData);
  };

  blogController.loadAll = function(ctx, next) {
    var articleData = function(articles) {
      ctx.articles = Article.articles;
      next();
    };

    if (Article.articles.length) {
      ctx.articles = Article.articles;
      next();
    } else {
      Article.fetchAll(articleData);
    };
  };

  module.blogController = blogController;
})(window);
