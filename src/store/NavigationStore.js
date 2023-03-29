const navigationStore ={
    data(){
        return{
            navigationLinks:[
            { name: 'Home', path: '/Home' },
            { name: 'About', path: '/About' },
            { name: 'Contact', path: '/Contact' },
            ]
        };
    }
}

export default navigationStore;