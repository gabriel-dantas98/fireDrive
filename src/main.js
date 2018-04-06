class init {
     constructor() {
          let component = require('./template/index.js')
          let app = document.getElementById('app');
          app.innerHTML = component.template;
          component.action();   
     }
}

new init();