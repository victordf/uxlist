Template.cadastroLayout.events({
    "submit #form-cadastro": function(e, t){
        e.preventDefault();
        var email = t.find('#email').value;
        var senha = t.find('#senha').value;

        Accounts.createUser({
            email: email,
            password: senha
        }, function(err){
            if (err) {
                alert('Erro ao criar o usuário');
            } else {
                FlowRouter.go('metodologias');
            }
        });
        return false;
    }
});