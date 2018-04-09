import  file_list  from './files_list';
import  templateComponent  from './template';
class init {
     constructor() {

        let elementApp = document.getElementById('app');
        elementApp.innerHTML = templateComponent.template;
        templateComponent.action();   

        let contentBlock = document.getElementById('main');
        contentBlock.innerHTML = file_list.template;
        file_list.action();   

        }
}

new init();