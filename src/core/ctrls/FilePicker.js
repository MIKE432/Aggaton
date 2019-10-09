import React from 'react'
import styles from './FilePicker.module.scss'
import Button from './Button'


const FilePicker = (props) =>
    <span className={styles.container}>
        <span>{props.children}</span>
        <input className={styles.inputFile} type='file' multiple='multiple' name={props.name} />
    </span>


class FilePickerButton extends React.Component {

    constructor( props ) {

        super( props );
        this.refInput = React.createRef();

        this.createFileSelector = () => {

            const fileSelector = document.createElement('input');
            fileSelector.setAttribute('type', 'file');
            fileSelector.setAttribute('multiple', 'multiple');
            fileSelector.setAttribute('name', this.props.name);
            //fileSelector.setAttribute('value', this.props.value);

            return fileSelector;
        }

        this.onClick = (event) => {

            event.preventDefault();
            //this.fileSelector.click();
            console.log(this.fileSelector);
            console.log(this.refInput.current);
            this.refInput.current.click();
        }
    }
    componentDidMount() {

        this.fileSelector = this.createFileSelector();
    }
    
    componentDidUnmount() {

    }

    render() {

        return (
            <div className={styles.container}>
                <Button mode={this.props.mode} onClick={this.onClick}>{this.props.children}</Button>
                <input ref={this.refInput} type='file' />
            </div>
            );
    }
}

class FilePickerTile extends React.Component {


    render() {

        return <div mode={this.props.mode} onClick={this.onClick}>{this.props.children}</div>
    }
}

export default FilePicker;
export {
    FilePickerButton,
    FilePickerTile
};