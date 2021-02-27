app.component('photo-view',{
    props:["member"],
    template:
    /*html*/
    `
    <img @click="clickImage(member.id)" class="card-img-top" :src="member.img">
    <div class="card-body">
        <div class="d-flex align-items-start justify-content-between">
            <div class="d-flex flex-column">
                <div class="h6 font-weight-bold">{{member.name}}</div>
                <div class="text-muted">{{member.position}}</div>
            </div> 
        <div class="btn"><i class="fa fa-heart" aria-hidden="true" @click="clickLike(member.id)" :class="{like: member.like == true}"></i></div>
        </div>
    </div>
    `,
    methods:{
        clickLike(id){
            this.$emit('click-like',id)
        },
        clickImage(id){
            this.$emit('click-image',id)
        }
    }
})