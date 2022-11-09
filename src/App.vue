<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Helvetica Neue Lt Geo 55";
  background-color: #eaeaea;
  outline: none;
}

input {
  width: 513px;
  height: 50px;
  border: 0.8px solid #232323;
  accent-color: black;
  padding: 20px;
  position: relative;
}

label {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
}

.radio {
  width: 23px;
  margin: 0 19px;
}
span {
  position: absolute;
  margin-top: 90px;
  color: red;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 47px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
