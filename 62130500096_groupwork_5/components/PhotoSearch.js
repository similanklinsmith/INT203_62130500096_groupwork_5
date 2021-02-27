app.component('photo-search',{
    template:
    /*html*/
    `
    <div v-if="isHidden" @click="toggleCancel">
    <button class="ml-2 p-2 rounded-sm focus:outline-none bg-gray-700 transform hover:scale-110 ease-in-out duration-300">
        <div class="fa fa-search text-white"></div>
    </button>
    </div>
    <div v-else>
        <input v-model="inputSearch" class="rounded-md ml-2 p-1 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none text-black rounded-sm" type="text" placeholder="Please enter text for searching photos">
        <button class="ml-2 p-1 rounded-md focus:outline-none bg-gray-700 text-white" @click="toggleCancel">Cancel</button>
    </div>
    `,
    data(){
        return{
            isHidden:true,
            inputSearch:''
        }
    },
    methods:{
        toggleCancel(){
            this.inputSearch = '';
            this.isHidden = !this.isHidden;
        }
    },
    watch:{
        inputSearch(){
          this.$emit('search-img',this.inputSearch);
        }
      }
})