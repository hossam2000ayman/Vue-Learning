const {createApp} = Vue;
createApp({
    data() {
        return {
            name : "Hossam",
            city : "Cairo"
        };
    },
    methods: {
        testMe(){
            console.log('test once');
        },
        printMyName(){
            console.log('ahmed');
        },

        updateValue(){
            this.name = document.getElementById("textInput").value;
        }
    },
}).mount('#app-root');
