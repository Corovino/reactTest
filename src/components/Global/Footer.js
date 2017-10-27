import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css/footer.css';

class Footer extends Component {
    static propTypes = {
        copyright: PropTypes.string
    }
    render() {

        const {copyright = "&copy; React 2017" } = this.props;
        return (
            <div className="Content">
                <div>
                    <p>{copyright}</p>
                </div>
            </div>
        );
    }
}

export default Footer;
