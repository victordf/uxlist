FlowRouter.route('/', {
    name: "home",
    action(){
        BlazeLayout.render('layout', {'main': 'loginLayout'});
    }
});

FlowRouter.route('/metodologias', {
    name: "metodologias",
    action(){
        BlazeLayout.render('layout', {'main': 'metodologiasLayout'});
    }
});