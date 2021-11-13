<template>
    <div class="card">
        <h1 class="card_title" v-if="mode == 'login'">Connexion</h1>
        <h1 class="card_title" v-else>Inscription</h1>
        <p class="card_subtitle" v-if="mode == 'login'">Vous n'avez pas encore de compte ? <span class="card__action"
                @click="switchToCreateAccount()"> Créer un compte</span></p>
        <p class="card_subtitle" v-else>Vous avez déjà un compte ? <span class="card__action" @click="switchToLogin()">
                Vous connecter</span></p>
        <div class="form-row" v-if="mode == 'create'">
            <input v-model="prenom" class="form-row__input" type="text" placeholder="Prénom" />
            <input v-model="nom" class="form-row__input" type="text" placeholder="Nom" />
        </div>
        <div class="form-row">
            <input v-model="email" class="form-row__input" type="text" placeholder="Adresse Email" />
        </div>
        <div class="form-row">
            <input v-model="password" class="form-row__input" type="password" placeholder="Mot de Passe" />
        </div>
        <div class="form-row">
            <button class="btn btn-outline-secondary button--disabled" v-if="mode == 'login'">
                Connexion
            </button>
            <button @click="createAccount()" class="btn btn-outline-secondary" :class="{'button--disabled' : !validatedFields}" v-else>
                Créer le compte
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data: function () {
            return {
                mode: 'login',
                email: '',
                prenom: '',
                nom: '',
                password: ''
            }
        },
        computed: {
            validatedFields: function () {
                if (this.mode == 'create') {
                    if (this.email != "" && this.prenom != "" && this.nom != "" && this.password != "") {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    if (this.email != "" && this.password != "") {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        },
        methods: {
            switchToCreateAccount: function () {
                this.mode = 'create';
            },
            switchToLogin: function () {
                this.mode = 'login';
            },
            createAccount: function () {
                this.$store.dispatch('createAccount', {
                    first_name: this.prenom,
                    last_name: this.nom,
                    email: this.email,
                    password: this.password
                });
            }
        }
    }
</script>
<style scoped>
.form-row__input {
    margin: 1%;
}
.card__action:hover {
    color: rgb(20, 161, 255);
}
</style>