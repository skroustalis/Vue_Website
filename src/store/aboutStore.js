const aboutStore = {
    data:{
        title:`Demo Text`,
        paragraph1: `
            Paragraph1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti suscipit voluptatibus ea, dolorum perferendis omnis sunt quisquam voluptates expedita eum odio in ad autem.
            Dolore reiciendis magnam dignissimos, quos soluta quod temporibus? Molestiae provident sit corporis, asperiores iste veritatis commodi consequuntur velit laudantium quibusdam nemo ipsam quidem in maxime similique quam quis est eos possimus fuga enim.
            Est explicabo, praesentium totam, illum optio dignissimos nisi asperiores voluptatum atque eos tenetur eaque rem at beatae unde. Atque optio cum suscipit nostrum possimus distinctio?
            Repudiandae blanditiis maxime molestiae nisi saepe sint, sapiente omnis suscipit beatae libero. Vero sunt sapiente ex, facere asperiores non explicabo rerum dolor in, commodi cumque qui!
            Nulla fugiat, consequuntur nisi magni expedita nobis doloremque animi impedit optio itaque ratione pariatur ducimus eligendi enim, mollitia distinctio ipsa! Necessitatibus consequatur rem nihil quisquam dicta reiciendis soluta quod dolorum nesciunt nam sapiente accusantium impedit et dolores libero deserunt velit voluptas est, iusto eveniet maiores asperiores id voluptatem nisi.
        `,
        paragraph2: `
            Paragraph2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti suscipit voluptatibus ea, dolorum perferendis omnis sunt quisquam voluptates expedita eum odio in ad autem.
            Dolore reiciendis magnam dignissimos, quos soluta quod temporibus? Molestiae provident sit corporis, asperiores iste veritatis commodi consequuntur velit laudantium quibusdam nemo ipsam quidem in maxime similique quam quis est eos possimus fuga enim.
            Est explicabo, praesentium totam, illum optio dignissimos nisi asperiores voluptatum atque eos tenetur eaque rem at beatae unde. Atque optio cum suscipit nostrum possimus distinctio?
            Repudiandae blanditiis maxime molestiae nisi saepe sint, sapiente omnis suscipit beatae libero. Vero sunt sapiente ex, facere asperiores non explicabo rerum dolor in, commodi cumque qui!
            Nulla fugiat, consequuntur nisi magni expedita nobis doloremque animi impedit optio itaque ratione pariatur ducimus eligendi enim, mollitia distinctio ipsa! Necessitatibus consequatur rem nihil quisquam dicta reiciendis soluta quod dolorum nesciunt nam sapiente accusantium impedit et dolores libero deserunt velit voluptas est, iusto eveniet maiores asperiores id voluptatem nisi.
            Ipsam quos numquam, praesentium culpa nesciunt atque ullam inventore voluptas sint sapiente nihil repellat sunt nisi animi cum autem consequuntur, esse magnam quasi adipisci sed ipsum molestias ab!
            Sunt est pariatur deleniti nobis minima distinctio itaque eligendi, dolorem aperiam temporibus exercitationem optio quibusdam.
        `},
    mounted() {
        this.$el.classList.add('loaded');
        },
    created() {
        if (this.$route.path !== '/About') {
            this.showButton = true;
            this.moreText = false
        }
    },
    methods:{
        toggleText(){
        this.$router.push({path:"/About"})
        this.showButton = false
        this.moreText = true
        }
    }
    }

export default aboutStore;