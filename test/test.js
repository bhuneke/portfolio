QUnit.module('Article Constructor', function() {
  QUnit.test('Article should create a new article object', function(assert) {
    var mockObj = {
      title: 'title'
    };
    var testArticle = new Article(mockObj);

    assert.equal(testArticle.title, mockObj.title);
  });
  QUnit.test('Article instance should have a method toHtml', function(assert) {
    var mockObj = {
      title: 'title'
    };
    var testArticle = new Article(mockObj);
    var result = typeof(testArticle.toHtml);
    assert.equal(result, 'function');
  });
});

QUnit.module('Article Class', function() {
  QUnit.test('Article.allArticles should be an array', function(assert) {
    var result = false;

    if (Article.articles) {
      result = true;
    }

    assert.equal(result, true);
  });
  QUnit.test('Article.loadAll should set an array of Article instances', function(assert) {
    var testArr = ['indexOne'];
    Article.loadAll(testArr);
    var result = Article.articles.length;

    assert.equal(result, 1);

    Article.loadAll([]);
  });
  QUnit.test('view.allCategories should get a an array of unique categories', function(assert) {
    Article.articles = [{author: 'B'}, { author: 'A'}, { author: 'A'}, {author: 'B'}];
    var result = view.allCategories();
    assert.equal(result.length, 2);
    Article.articles = [];
  });
});
