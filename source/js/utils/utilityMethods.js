export default {

    CURRENT_USER_KEY:'currentUser',

    saveUserSession: function(userObject){
        localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(userObject));
    },

    removeUserSession: function(){
        localStorage.removeItem(this.CURRENT_USER_KEY);
    },

    getUserSession: function(){
        let user = localStorage.getItem(this.CURRENT_USER_KEY);
        return  user == "undefined" ?  undefined : user ;
    },

    startLoading(id){

        $('#'+id).block({
            message: '<i class="icon-spinner2 spinner"></i>',
            overlayCSS: {
                backgroundColor: '#fff',
                opacity: 0.8,
                cursor: 'wait',
                'box-shadow': '0 0 0 1px #ddd'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'none'
            }
        });
    },

    stopLoading(id){
        $('#'+id).unblock();
    }
}