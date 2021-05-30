import React from 'react';
import RestoServiceContext from '../resto-service-context';



const WithRestoService = () => (View) => {
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {
                    (restoService) => {return <View {...props} restoService={restoService} />}
                }
            </RestoServiceContext.Consumer>
        )
    };
};

export default WithRestoService;