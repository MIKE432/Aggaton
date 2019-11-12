import React from 'react';
import Styles from './Information.module.scss'
import Badge from '../../core/ctrls/Badge';

const DeleteInformation = (props) => (
    <div className={Styles.delete}>
        <div className={Styles.deleteTitle}>
            <span>Delete?</span>
        </div>
        <div className={Styles.deleteOptions}>
            <span className={Styles.optionYes}>Tak</span>
            <span className={Styles.optionNo} onClick={props.abort}>Anuluj</span>
        </div>
    </div> 
)

class Information extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            delete: false
        }

    }

    toggleDelete = () => {
        this.setState({ delete: !this.state.delete })
    }

    render() {
        const props = this.props;

        return (
            <>
                {
                    this.state.delete ? <DeleteInformation abort={this.toggleDelete} /> :
                    <div className={Styles.information}>
                        <div className={Styles.informationDetails} >
                            <div className={Styles.informationHeader}>
                                <div>{props.information}</div>
                            </div>
                            <div className={Styles.informationBody}>
                                <div>{props.details}</div>
                            </div>
                        </div>
                        <div className={Styles.dateAndType}>
                            <Badge type={props.type}>{props.informationType}</Badge>
                            <div className={Styles.informationDate}>{props.date}</div>
                        </div>
                        <div className={Styles.deleteInformation} >
                            <i className="fas fa-times" onClick={this.toggleDelete}/>
                        </div>
                    </div>

                }
            </>
        )
    }
}

export default Information;