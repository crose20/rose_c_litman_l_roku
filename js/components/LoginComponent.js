export default {
    template: `
    <section>
    <div class="login_container">

        <div class="login_form">
                <h2 class="logo glow">EDGE</h2>
                    <form>
                <div class="main_login_txt">
                    <h2 class="active"><a href="#" onclick="sign_in()">LOG IN</h2>
                    <span class="linea_bajo_nom"></span>
                </div>
                <div class="user_pass_input_cont">
                    <input v-model="input.username" type="text" class="form_sign_field block active_form_field" placeholder="Username" name="emauil_us" />
                    <input v-model="input.password" type="password" class="form_sign_field block  active_form_field" placeholder="Password" name="pass_us" />  
                </div>
                <div class="signin_btn_cont">
                    <button v-on:click.prevent="login()" type="submit" class="signin_btn">Sign In</button>
                </div>
            </form>
        </div>

    </div>
    </section>
     `,
 
     data() {
         return {
             input: {
                 username: "", //ALLOWS the user to enter their username
                 password: "" //allows user to enter password
             },
         }
     },
 
     methods: {
         login() {
            //console.log(this.$parent.mockAccount.username);
            if(this.input.username != "" && this.input.password != "") {
            // fetch the user from the DB and generate the form data below...........
        
            let formData = new FormData(); //OUR FIELD IS THE USERNAME AND PASSWORD
             formData.append("username", this.input.username);
             formData.append("password", this.input.password);
             let url = `./admin/scripts/admin_login.php`; //takes users:
 
             fetch(url, { 
                    method: 'POST', //make sure the method is post instead of anythign else!
                    body: formData
                })

                 .then(res => res.json())
                 .then(data => {
                    if (typeof data != "object") { // if this occurs - we are not getting the user object in return
                        console.warn(data);
                        console.error("authentication failed, please try again");
                        this.$emit("autherror", data);
                    } else {
                        this.$emit("authenticated", true, data[0]);
                        this.$router.replace({ name: "users" });
                    }
                })
             .catch(function(error) { 
                 console.log(error);
             });
        } else {
                 console.log("A username and password must be entered! Try again please.");
            }
        }
    }
 }