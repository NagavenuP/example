import * as React from 'react';
import { connect } from 'react-redux';
import { utility } from '../../utils/index';
import './../../../assets/scss/list-popup.scss';
import _ from './../../utils/lodash';
export interface IEditPopupProps {
    list: Array<any>;
    handleList: Function;
    type?: boolean; //true=radio,false=checkbox;
    checked?: string | Array<string>;
}
export interface IEditPopupState {

}
class ListPopup extends React.Component<IEditPopupProps,
    IEditPopupState> {
    constructor(props) {
        super(props);
    }
    handleClick = (e: any) => {
        this.props.handleList(e);
        if (!this.props.type) {
            e.stopPropagation();
        }
    }
    render() {
        return (
            <div className='edit-popup'>

                {_.map(this.props.type && this.props.list && this.props.list, (listItem) => {
                    return <div key={listItem} className={this.props.checked === listItem ? 'list-item active' : 'list-item'} onClick={this.handleClick}>
                        <div className='radio-Div' >
                            <input
                                type='radio'
                                className=''
                                value={listItem}
                                defaultChecked={this.props.checked === listItem}
                            // onChange={this.handleClick}
                            // checked={this.verifyQuestionpreviouslyAdded(element) ? true : false}
                            // onChange={() => this.addQuestion(element)}
                            />
                            <label htmlFor=''>{listItem}</label>
                        </div>
                    </div>;
                })
                }
                {_.map(!this.props.type && this.props.list && this.props.list, (listItem) => {
                    return <div key={listItem} className={(this.props.checked && this.props.checked.indexOf(listItem) >= 0)
                        ? 'list-item active' : 'list-item'} onClick={this.handleClick} >
                        <div className='radio-Div' >
                            <input
                                type='checkbox'
                                className='styled-checkbox'
                                value={listItem}
                                defaultChecked={(this.props.checked &&
                                    this.props.checked.indexOf(listItem) >= 0)
                                    ? true : false}
                            // onChange={this.handleClick}
                            // checked={this.verifyQuestionpreviouslyAdded(element) ? true : false}
                            // onChange={() => this.addQuestion(element)}
                            />
                            <label htmlFor=''>{listItem}</label>
                        </div>

                    </div>;
                })
                }

            </div>);
    }
}
export default connect(utility.mapDispatchToProps)(ListPopup);
