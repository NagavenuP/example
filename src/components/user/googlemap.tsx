import * as React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';


export class MapContainer extends React.Component<any, any> {
    onMarkerClick = () => {

    }
    onInfoWindowClose = () => {

    }
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAAL0ogs54k0UEHJLQjufFYN5als2pCj2I'
})(MapContainer)