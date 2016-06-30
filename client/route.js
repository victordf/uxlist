FlowRouter.route('/login', {
   name: 'login',
    action(){
        BlazeLayout.render('loginLayout');
    }
});

FlowRouter.route('/', {
    name: "home",
    action(){
        if(Accounts.userId()) {
            BlazeLayout.render('layout');
        } else {
            FlowRouter.go('login');
        }
    }
});

FlowRouter.route('/cadastro', {
    name: 'cadastro',
    action(){
        BlazeLayout.render('cadastroLayout');
    }
});

FlowRouter.route('/esqueceu-senha', {
    name: 'esqueceu-senha',
    action(){
        BlazeLayout.render('esqueceuSenhaLayout');
    }
});

FlowRouter.route('/metodologias', {
    name: "metodologias",
    action(){
        if(Accounts.userId()) {
            BlazeLayout.render('layout', {'main': 'metodologiasLayout'});
        } else {
            FlowRouter.go('login');
        }
    }
});