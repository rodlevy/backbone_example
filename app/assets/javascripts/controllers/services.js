App.Controllers.Services = Backbone.Controller.extend({
    routes: {
        "services/:id":            "edit",
        "":                         "index",
        "new":                      "newServ"
    },

    edit: function(id) {
        var doc = new Service({ id: id });
        doc.fetch({
            success: function(model, resp) {
                new App.Views.Edit({ model: doc });
            },
            error: function() {
                new Error({ message: 'Could not find that service.' });
                window.location.hash = '#';
            }
        });
    },

    index: function() {
        $.getJSON('/services', function(data) {
            if(data) {
                var services = _(data).map(function(i) { return new Service(i); });
                new App.Views.Index({ services: services });
            } else {
                new Error({ message: "Error loading services." });
            }
        });
    },

    newServ: function() {
        new App.Views.Edit({ model: new Service() });
    }
});
