import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import {
    SelectField,
    TextField,
} from 'redux-form-material-ui';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types'


// validation functions
const required = value => (value == null ? 'Required' : undefined);

class PostEditForm extends Component {
    componentDidMount() {
        this.refs.title // the Field
            .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
            .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
            .focus(); // on TextField
    }

    static propTypes = {
        onSubmit : PropTypes.func.isRequired,
        categories: PropTypes.array.isRequired
    }



    render() {
        const {handleSubmit, pristine, reset, submitting,invalid,onSubmit,categories} = this.props;

        const categoriesView = categories.map((c)=>
            <MenuItem key={c.name} value={c.name} primaryText={c.name}/>
        );

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Field
                        name="title"
                        component={TextField}
                        hintText="Post Title"
                        floatingLabelText="Title"
                        validate={required}
                        ref="title"
                        withRef
                    />
                </div>
                <div>
                    <Field
                        name="author"
                        component={TextField}
                        hintText="Author"
                        floatingLabelText="Author"
                        validate={required}
                    />
                </div>
                <div>
                    <Field
                        name="category"
                        component={SelectField}
                        floatingLabelText="Category"
                        validate={required}
                    >
                        {categoriesView}

                    </Field>
                </div>
                <div>
                    <Field
                        name="body"
                        component={TextField}
                        floatingLabelText="Body"
                        multiLine={true}
                        validate={required}
                        fullWidth={true}
                    />
                </div>


                <div>
                    <FlatButton label="Submit" primary={true} type="submit"  disabled={invalid }/>
                    <FlatButton label="Clear" secondary={true}   disabled={pristine || submitting}
                                onClick={reset}>

                    </FlatButton>

                </div>
            </form>
        );
    }
}
/*

const selector = formValueSelector('addPost');

PostEditForm = connect(state => ({
}))(PostEditForm);

PostEditForm = reduxForm({
    form: 'addPost',
    enableReinitialize : true

})(PostEditForm);

export default PostEditForm;
*/

function mapStateToProps(state, props) {
    return {
        form: `addPost`
    };
}

export default connect(mapStateToProps)(reduxForm({ enableReinitialize: true })(PostEditForm));
