import { setFilterValue } from 'components/store/contacts/filterSlice';
import { useDispatch, useSelector } from 'react-redux';



import { FilterWrapper } from "./Filter.styled";


export const Filter = () => {
    
    const dispatch = useDispatch()
    const filterValue = useSelector(state => state.Filter)  
   
    

    return (
        <FilterWrapper>
            Find contacts by name
            <input onChange={e => dispatch(setFilterValue(e.target.value))}
                value={filterValue}
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </FilterWrapper>
    )
};