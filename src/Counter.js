
import React from 'react';
import {connect} from 'react-redux';

// counter method
function Counter(props) 
{
	return (
		<div> 
			<h1> I am a counter </h1>
			<p> Count: {props.count} </p>
			<button onClick={props.onIncrementClick}> increment </button>
		</div>
	)
}


// built-in Redux methods
function MapStateToProps(state)
{
	console.log('MapStateToProps', state);
	return {
		count: state.count
	}
}

function MapDispatchToProps(dispatch)
{
	return {
		onIncrementClick: () => {
		const action = {type: 'INCREMENT'};
		dispatch(action);
		}
	}
}

export default connect(MapStateToProps, MapDispatchToProps)(Counter);