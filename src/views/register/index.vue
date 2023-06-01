
<script setup>

import LayoutNav from '../Layout/components/LayoutNav.vue';
</script>



<template>
    <LayoutNav />

    <main class="form-signin w-100 m-auto">
        <form>

            <h1 class="h3 mb-3 fw-normal">注册</h1>

            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>

            <div class="form-floating">
                <input type="username" class="form-control" id="floatingPassword" placeholder="name">
                <label for="floatingPassword">Username</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">注册</button>
            <!-- <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p> -->
        </form>
    </main>
</template>
<style>
.form-signin {
    max-width: 330px;
    padding: 15px;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}


@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}
</style>
