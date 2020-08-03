import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry'
import Scroll from '../components/Scroll';
import './App.css';
import {setSearchField, requestLoomians} from '../actions'

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
    return {  
        searchField: state.searchLoomians.searchField,
        loomians: state.requestLoomians.loomians,
        isPending: state.requestLoomians.isPending
            
    }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestLoomians: ()=> dispatch(requestLoomians())
    }
}

class App extends Component {
    componentDidMount() {
        this.props.onRequestLoomians();
    }


    render() {
        const {loomians, searchField, onSearchChange, isPending} = this.props;
        
        const filteredLoomians = loomians.filter(loomian => loomian.name.toLowerCase().includes(searchField.toLowerCase()));
        if (loomians.length === 0 ) {
            return <h1 className = 'tc'>Loading</h1>
        } else {
            return (
                <div className = 'tc'>
                    <h1 className = "f1">Pokemons</h1>
                    <SearchBox searchChange = {onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList loomians = {filteredLoomians}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
        
    }
}
// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);