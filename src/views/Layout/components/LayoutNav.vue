
<script setup>


</script>

<template>
    <!-- Content here -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" @click="$router.push('/')">首页</a>

            <!-- 响应式的下拉按钮 -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <!-- 下拉菜单 -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            租车服务
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" @click="$router.push('/shortRental')">短租</a></li>
                            <li><a class="dropdown-item" href="#" @click="$router.push('/longRental')"> 长租</a></li>
                            <li><a class="dropdown-item" href="#">个性租</a></li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" @click="$router.push('/order')" >我的订单</a>
                    </li>
                    <li class="nav-item" v-if="1"  @click="$router.push('/user')">
                        <a class="nav-link" @click="$router.push('/user')">个人中心</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="$router.push('/about')">关于我们</a>
                    </li>




                </ul>

                <button type="button" class="btn btn-outline-primary me-2" @click="$router.push('/login')">登陆</button>
                <button type="button" class="btn btn-primary" @click="$router.push('/register')">注册</button>

                <!-- <div class="dropdown text-end"> -->
                <!-- <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
                </a>
                <ul class="dropdown-menu text-small">
                    <li><a class="dropdown-item" href="#">New project...</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul> -->
            </div>
        </div>
        <!-- </div> -->
    </nav>
</template>


<style scoped>

nav{
    position: sticky;
    top: 0px;
    z-index: 999;
}
</style>

  