const app = new Vue({
    el: "#app",
    data() {
        return {
            champions: [{
                    id: 1,
                    title: "Champ 1",
                    short_text: "roles: Jungl",
                    image: "Amumu.jpg",
                    desc: "Full desc",
                },
                {
                    id: 2,
                    title: "Champ 2",
                    short_text: "roles: Top, Mid, Jungl",
                    image: "Jax.jpg",
                    desc: "Full desc",
                },
                {
                    id: 3,
                    title: "Champ 3",
                    short_text: "roles: ADK",
                    image: "Kogmaw.jpg",
                    desc: "Full desc",
                },
                {
                    id: 4,
                    title: "Champ 4",
                    short_text: "roles: Suport",
                    image: "Lulu.jpg",
                    desc: "Full desc",
                },
                {
                    id: 5,
                    title: "Champ 5",
                    short_text: "roles: Mid",
                    image: "Vex.jpg",
                    desc: "Full desc",
                },
                {
                    id: 6,
                    title: "Champ 6",
                    short_text: "roles: Top, Jungl",
                    image: "Gragas.jpg",
                    desc: "Full desc",
                },
            ],
        };
    },
    mounted: function() {
        console.log(window.localStorage.getItem("champ"));
    },

    methods: {
        addItem: function(id) {
            window.localStorage.setItem("champ", id);
        },
    },
});