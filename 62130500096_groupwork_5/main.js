    const app = Vue.createApp({
        data() {
            return {
               members:[
                   {id:'1',name:'Takata Mashiho',position:'Vocalist',img:'images/profile-1-1.jpg',like:false,show:false},
                   {id:'2',name:'Kanemoto Yoshinori',position:'Rapper',img:'images/profile-2.jpg',like:false,show:false},
                   {id:'3',name:'Watanabe Haruto',position:'Rapper',img:'images/profile-3.jpg',like:false,show:false},
                   {id:'4',name:'Hamada Asahi',position:'Vocalist',img:'images/profile-4.jpg',like:false,show:false}
               ],
               inputSearch:''
               
            }
        },
        methods:{
            toggleLike(id){
                for (let index = 0; index < this.members.length; index++) {
                    if (this.members[index].id == id) {
                        this.members[index].like = !this.members[index].like;
                    } 
                }
            },
            popupImage(id){
                for (let index = 0; index < this.members.length; index++) {
                    if (this.members[index].id == id) {
                        this.members[index].show = !this.members[index].show;
                    } 
                }
            },
            toggleLeft(id){
                for (let index = 0; index < this.members.length; index++) {
                    if (this.members[index].id == id) {
                        if (index == 0) {
                            this.members[index].show = !this.members[index].show;
                            this.members[this.members.length-1].show = !this.members[this.members.length-1].show;
                        }else if(index > 0){
                            let current = index-1;
                            this.members[index].show = !this.members[index].show;
                            this.members[current].show = !this.members[current].show;
                        }
                        
                    } 
                }
               
            },
            toggleRight(id){
                for (let index = 0; index < this.members.length; index++) {
                    if (this.members[index].id == id) {
                        if (index == this.members.length-1) {
                            this.members[index].show = !this.members[index].show;
                            this.members[0].show = !this.members[0].show;
                        }else{
                            let current = index+1;
                            this.members[index].show = !this.members[index].show;
                            this.members[current].show = !this.members[current].show;
                        }
                        
                    } 
                }
               
            }
        },
        computed:{
            countLiked(){
                return this.members.filter( m => m.like).length //filter will return the number of likes by using like.lenght
            },
            filteredSearch() {
                    return this.members.filter(showResult => {
                        return showResult.name.toLowerCase().includes(this.inputSearch.toLowerCase())
                      })

            }

        }

    });


//How filter work
// let countLike = function(member){
//     return member => member.like;
// }
