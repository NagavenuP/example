import * as React from 'react';
import { ListItem } from 'react-onsenui';
import './../../../assets/scss/accordion.scss';
import { BaseComponent } from './../../core/base_component';
export default class Accordion extends BaseComponent<any, any> {

    toggle = (e) => {

        let panels = document.getElementsByClassName('panel');
        let tappable = document.getElementsByClassName('accordion');
        for (let i = 0; i < panels.length; i++) {
            if (tappable[i] !== e.currentTarget) {
                panels[i].classList.remove('show');
                tappable[i].classList.remove('active');
            }

        }
        e.currentTarget.classList.toggle('active');
        e.currentTarget.nextElementSibling.classList.toggle('show');
    }
    render() {
        return (
            <div>

                <ListItem tappable {...{ class: 'accordion' }} onClick={this.toggle}>Items</ListItem>
                <div className='panel'>
                    <ListItem tappable>Item 1</ListItem>

                </div>

            </div >
        );
    }
}
