import React, { Component } from 'react';
import Button from '../../core/ctrls/Button';
import Styles from './HeaderSection.module.scss';


class HeaderSection extends Component {

    constructor(props) {
        super(props);

        this.refHeaderSection = React.createRef();

        this.onScroll = () => {

            if( document.body.scrollTop || document.documentElement.scrollTop )
                this.refHeaderSection.current.classList.add( Styles.headerSticky );
            else
                this.refHeaderSection.current.classList.remove( Styles.headerSticky );
        }
    }

    componentDidMount() {

        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {

        window.removeEventListener('scroll', this.onScroll);
    }

    render() {
        return (
            <div ref={this.refHeaderSection} className={Styles.header}>
               <div className={Styles.product}><span>Apusart</span> Numido</div>
               <div className={Styles.buttonsContainer}>
                    <Button to='/signin' mode='lp' style={Styles.button}>Zarejstruj się</Button>
                    <Button to='/login' mode='lps' style={Styles.button}>Zaloguj się</Button>
                </div>
            </div>
        )
    }
}

export default HeaderSection;