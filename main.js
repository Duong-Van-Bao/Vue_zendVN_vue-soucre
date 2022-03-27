var vueInstance = new Vue({
  el:'#app',
  data: {
    title: 'Dien thoai Samsum'
  },
  methods: {
    say: function(text){
       return 'Hello ' + text;
    }
  }
});

console.log(vueInstance);

setTimeout(()=>{
  vueInstance.title = 'Dien thoai Oppo'
},3000)