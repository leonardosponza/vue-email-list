const app = new Vue({
    el : '#app',
    data : {
      Mail : []
    },
    mounted() {
  
      for(let i = 0; i < 10; i++){
        axios
          .get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then(element => {
            this.Mail.push(element.data.response);
            console.log(element.data.response);
          })
      }
  
    },
  });