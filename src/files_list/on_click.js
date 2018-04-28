import getData from './update_data';

export default function () {
 
     let onClick = (e) => {
          e.preventDefault();
          let element = e.target;

          if (e.target.tagName == 'I') {
               element = e.target.parentElement;
          }

          if (element.tagName == 'A') {
               if (element.dataset.type == 'folder-open') {
                    
                    getData('/files/1/' + element.dataset.fid);
               } else {
                    console.log("download file");
               }
          }

     }

     document.querySelector('#main').addEventListener('click', onClick);    
}