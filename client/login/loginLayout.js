Template.loginLayout.events({
    "submit #form-login": function(e, t){
        e.preventDefault();
        var email = t.find('#email').value;
        var senha = t.find('#senha').value;

        Meteor.loginWithPassword(email, senha, function(err){
            if(err){
              alert('Erro ao logar: ' + err);
            } else {
                FlowRouter.go('metodologias');
            }
        });
        
    }
});