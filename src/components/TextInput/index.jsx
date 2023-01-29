import './styles.css'

export const TextInput = ({searchValue, handleChange}) => {
  return (
    <input type="search" className='text-input'
      placeholder="Search"
      value={searchValue}
      onChange={handleChange}
    />
  );

}