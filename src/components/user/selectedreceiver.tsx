import * as React from 'react';
interface ISelectedReceiver {
    selectedReceiver: any;
}

export default class SelectedReceiver extends React.Component<ISelectedReceiver, any> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>{this.props.selectedReceiver.name}</div>
            </div>
        );
    }
}

