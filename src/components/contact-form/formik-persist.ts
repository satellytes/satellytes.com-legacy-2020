import * as React from 'react';
import { FormikProps, connect } from 'formik';
import debounce from 'lodash.debounce';
import isEqual from 'react-fast-compare';

export interface PersistProps {
  name: string;
  debounce?: number;
  completed: boolean
}

// Forked version to clear form storage when submission if successful
class PersistImpl extends React.Component<
  PersistProps & { formik: FormikProps<any> },
  {}
> {
  static defaultProps = {
    debounce: 300,
  };

  saveForm = debounce((data: FormikProps<{}>) => {
    if(data) {
      window.localStorage.setItem(this.props.name, JSON.stringify(data));
    } else {
      window.localStorage.removeItem(this.props.name);
    }
  }, this.props.debounce);

  componentDidUpdate(prevProps: PersistProps & { formik: FormikProps<any> }, newProps) {
    if(this.props.completed) {
      this.saveForm(null);
    }else if (!isEqual(prevProps.formik, this.context.formik)) {
      this.saveForm(prevProps.formik);
    }
  }

  componentDidMount() {
    const maybeState = window.localStorage.getItem(this.props.name);
    if (maybeState && maybeState !== null) {
      const maybeStateParsed = JSON.parse(maybeState);
      // remove any touch and submit states otherwise the form would go to the state submit onload
      // and also show errors immediately.
      maybeStateParsed.touched = false;
      maybeStateParsed.isSubmitting = false;

      this.props.formik.setFormikState(maybeStateParsed);
    }
  }

  render() {
    return null;
  }
}

export const Persist = connect<PersistProps, any>(PersistImpl);