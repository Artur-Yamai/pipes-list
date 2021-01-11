<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

button {
  border: none;
  background-color: white;
  outline: none;

  &:active {
    box-shadow: inset 0 0 6px 0 rgb(88, 88, 88);
  }
}


input {
  border: none;
  outline: none;
}

a:link, a:visited, a:active, a:hover  { 
  text-decoration: none; /* Убирает подчеркивание для ссылок */;
  color: hsl(240, 100%, 57%);
} 

a:hover {
  color: hsl(240, 100%, 73%);
}

.block-without-scroll {
  /* прячем боковой скроллбар */
   -ms-overflow-style: none; /* ie 10+ */
   overflow: -moz-scrollbars-none;/* FF */
  /* хром, сафари */
  &::-webkit-scrollbar { width: 0; }
}


// глобальные классы

.btn {
  padding: 5px;
  border-radius: 4px;
  background-color: lightgray;
  cursor: pointer;

  &:active {
    box-shadow: inset 0 0 4px 2px darkgray;
    border-radius: 4px;
  }

  &__red {    
    background-color: rgb(231, 41, 41);
    color: white;
  } 

  &__green {
    background: lightgreen;
    color: white;
  }

  &__blue {
    background-color: rgb(0, 191, 255);
    color: white;
  }
}
</style>
