app.component('photo-show',{
    props:["member"],
    template:
    /*html*/
    `
    <div class="largeImg" v-show="member.show === true"  :class= "{lightbox: member.show === true}" >
        <i class="fa fa-times" aria-hidden="true" @click="clickImage(member.id)"></i>
        <i class="fa fa-arrow-right" aria-hidden="true" @click="goRight(member.id)"></i>
        <i class="fa fa-arrow-left" aria-hidden="true" @click="goLeft(member.id)"></i>
        <img :src="member.img">
    </div>
    `,
    methods:{
        clickImage(id){
            this.$emit('click-image',id)
        },
        goLeft(id){
            this.$emit('go-left',id)
        },
        goRight(id){
            this.$emit('go-right',id)
        }
    }
})