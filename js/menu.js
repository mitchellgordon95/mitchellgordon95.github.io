---
---
var body = document.querySelector('body');
var focused;
{% for section in site.data.sections %}
    document.getElementById("{{ section.name }}").addEventListener("click", focus);
{% endfor %}

// Focuses on a section. Takes an event as a parameter.
function focus (e) {
    var target = e.target;
    // body.style.backgroundColor = target.style.backgroundColor;

    if ( focused )
        unfocus(focused);

    focused = target;
    showCategory(target.innerHTML);
}
function unfocus (target) {
    hideCategory(target.innerHTML);
}
function showCategory(category) {
    category = category.trim();
    var posts = document.querySelectorAll('.' + category);
    if (posts)
    for ( var i = 0; i < posts.length ; ++i) { 
        posts[i].style.display = "inline-block";
        posts[i].style.visibility = "visible";
    }
}
function hideCategory(category) {
    category = category.trim();
    var posts = document.querySelectorAll('.' + category);
    if (posts)
    for ( var i = 0; i < posts.length ; ++i) { 
        posts[i].style.display = "none";
        posts[i].style.visibility = "hidden";
    }
}

// Start with the About section
window.addEventListener("load", function () {
    focus({target: document.getElementById("About")});
});
            