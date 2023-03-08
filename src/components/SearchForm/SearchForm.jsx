import { Form, Input, Button } from "./SearchForm.styled"
import PropTypes from 'prop-types';
export const SearchForm = ({onSubmit}) => {
    
    return(
        <Form onSubmit={(e) => {
            const {query} = e.target.elements

            onSubmit(e, query.value)
            }}>
            <Input type="text" name='query' />
            <Button>Search</Button>
        </Form>
    )
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func
}