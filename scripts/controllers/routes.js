page('/', homeController.reveal);
page('/myjourney', journeyController.reveal);
page('/myblog', blogController.loadAll, blogController.index);

page('/category', '/');

page('/category/:categoryName', blogController.loadByCategory, blogController.index);

page('/myprojects', repoController.reveal);
page();
