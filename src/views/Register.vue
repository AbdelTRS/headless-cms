<template>
  <div>
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
    <input type="text" v-model="role" />
    <button @click="signUp()">Sign up</button> <br />
    <router-link to="/login">Se connecter</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
    };
  },
  methods: {
    async signUp() {
      const { user, error } = await this.$supabase.auth.signUp({
        email: this.email,
        password: this.password,
      });
      if (user) {
        console.log(user);
        await this.$router.push({ name: "home" });
      } else {
        console.log(error);
      }
      const {} = await this.$supabase
        .from("users")
        .insert([{ email: this.email, roles: this.role }]);
    },
  },
};
</script>

