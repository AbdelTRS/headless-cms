<template>
  <div class="login">
    <input
      type="email"
      v-model="email"
      class="
        max-w-lg
        block
        w-full
        shadow-sm
        focus:ring-indigo-500 focus:border-indigo-500
        sm:max-w-xs sm:text-sm
        border-gray-300
        rounded-md
      "
    />
    <input
      type="password"
      v-model="password"
      class="
        max-w-lg
        block
        w-full
        shadow-sm
        focus:ring-indigo-500 focus:border-indigo-500
        sm:max-w-xs sm:text-sm
        border-gray-300
        rounded-md
      "
    />
    <button @click="signIn" to="/">Sign in</button><br />
    <button @click="signOut" to="/login">Sign out</button><br />
    <router-link to="/register">Créer un compte</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async signIn() {
      const { user, error } = await this.$supabase.auth.signIn({
        email: this.email,
        password: this.password,
      });
      if (user) {
        console.log(user);
      } else {
        console.log(error);
      }
    },
    async signOut() {
      const { error } = await this.$supabase.auth.signOut();
      window.alert("Vous avez été déconnecté !");
      window.location.reload();
      if (error) {
        console.log(error);
      }
    },
  },
};
</script>