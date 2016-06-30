Template.esqueceuSenhaLayout.helpers({
    resetPassword: function(t){
        return Session.get('resetPassword');
    }
});

Template.esqueceuSenhaLayout.events({
    'submit #recuperar-senha': function(e, t){
        e.preventDefault();
        var email = t.find('#email').value;

        // if(isNoEmpty(email) && isEmail(email)){
            Session.set('loading', true);
            Accounts.forgotPassword({email: email}, function(err){
                if(err){
                    Session.set('displayMessage', 'Password Reset Error: '+err);
                } else {
                    //Session.set('displayMessage', 'Enviamos um email com as instruções');
                    // if (Accounts._resetPasswordToken) {
                    //     Session.set('resetPassword', Accounts._resetPasswordToken);
                }
                Session.set('loading', false);
            });
        // }
        return false;
    }
});