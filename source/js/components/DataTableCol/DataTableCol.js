import React from 'react';


export default class DataTableCol extends React.Component {

    constructor(props) {
        super(props);
    }

    getAllClassNames(){
        const classNames = [];
        //console.log(this.props.textColor);
        //{this.props.blinking ? 'animated fadeOut infinite' : ''}
        if(this.props.blinking){
            classNames.push('animated fadeOut infinite');
        }

        if(this.props.textColor){
            classNames.push('text-'+this.props.textColor);
        }

        return classNames;
    }

    render() {
        const classNames = this.getAllClassNames();
        return (
            <td className={classNames.join(' ')}>
                {this.props.children}
            </td>
        );
    }
}

