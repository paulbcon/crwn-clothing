import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import SECTION_DATA from './sections.data';

import  './directory.styles.scss';

class Directory extends React.Component {
    constructor()
    {
        super();

        this.state = {
            sections: SECTION_DATA
        }
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))    
                }
            </div>
        )
    }
}

export default Directory;