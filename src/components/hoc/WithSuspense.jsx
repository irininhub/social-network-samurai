import React from 'react';
import Preloader from "../../common/Preloader/Preloader";


export const WithSuspense = (Component) => {

    return (props) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    }


};

export default WithSuspense;
