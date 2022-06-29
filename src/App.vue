<template>
  <div id="app">
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <router-link to="/todos" class="navbar-brand">Список задач</router-link>
        <router-link to="/add" class="btn btn-outline-success" type="submit">
          Добавить задачу
        </router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
@import './styles/App.scss';
</style>
