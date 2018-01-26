
import { Navigator } from 'react-onsenui';
import { utility } from './../utils/index';

export class CustomNavigator extends Navigator {
    constructor(props) {
        super(props);
        utility.updateNavigator(this);
    }
}
