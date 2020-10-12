import { render } from 'node-sass';
import React from 'react';

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections: [{
                title: 'hats',
                imageUrl:'',
                id: 1
            },
            {
                title: 'jackets',
                imageUrl:'',
                id: 2
            },
            {
                title: 'sneakers',
                imageUrl:'',
                id: 3
            },
            {
                title: 'womens',
                imageUrl:'',
                id: 4
            },
            {
                title: 'mens',
                imageUrl:'',
                id: 5
            }
          ]
        }
    }
}

render() {
    return(
        <div className ="directory-menu">
            
        </div>
    )
}