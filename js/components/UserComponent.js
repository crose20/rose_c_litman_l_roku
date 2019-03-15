export default {
    props: ['liveuser'],

    template: `
        <div class="user_profile rounded" @click="navToUserHome()">
            <div class="user_profile text-center">
                <img :src="'images/' + liveuser.avatar" class="rounded-circle img-fluid">
                <p>{{ liveuser.username }}</p>
            </div>
        </div>`,

    created: function() {
        if (this.liveuser.avatar == null) {
            this.liveuser.avatar = "temp_avatar.jpg";
        }
    },

    methods: {
        navToUserHome() {            
            this.$router.push({ name: "home", params: { currentuser: this.liveuser } });
            // set a localstorage session object so that we don't have to log back in on page refresh or after our initial login
            localStorage.setItem("cachedUser", JSON.stringify(this.liveuser)); 
        }
    }
}