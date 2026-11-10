document.querySelectorAll(
    '#recent-posts .recent-post-item .article-meta-wrap .post-meta-date .article-meta-label'
).forEach(function (item) {
    item.removeAttribute('title');
});

document.querySelectorAll(
    '#content-inner > #post > *'
).forEach(function (item) {
    if(item.id != 'article-container'){
        item.remove();
    }
});