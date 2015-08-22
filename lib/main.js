module.exports = function(reporter, definition){
    reporter.extensionsManager.recipes.push({
        name: "identity",
        execute: function(req, res){
            res.content = res.content.toString();
        }
    });
};
