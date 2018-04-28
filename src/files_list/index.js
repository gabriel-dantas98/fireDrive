import getData from './update_data';
import onClick from './on_click';
export default {
    template: require("./template.html"),
    action() {
        getData('/files/1');

        onClick();

    }
}