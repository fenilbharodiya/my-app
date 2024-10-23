import PropTypes from 'prop-types';

function StudentComponent(props) {
    return (
        <>
            {props.details.name} <br />
            {props.details.address} <br />
            {props.name} <br />
        </>
    )
}

StudentComponent.propTypes = {
    name: PropTypes.string.isRequired,
};

export default StudentComponent;