import { Alert, UncontrolledAlert } from 'reactstrap';

function AlertStrap() {
  return (
    <>
      <Alert color="light">Simple Alert [color : light]</Alert>
      <UncontrolledAlert color="warning">
        Uncontrolled Alert [color : warning]
      </UncontrolledAlert>
      <UncontrolledAlert color="primary">
        Uncontrolled Alert [color : primary]
      </UncontrolledAlert>
    </>
  );
}

export default AlertStrap;
