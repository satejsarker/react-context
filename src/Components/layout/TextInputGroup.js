import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames';

const TextInputGroup= ({
    label,
    name,
    placeholder,
   onChange,
    value,
    type,
    error
})=>{
  return (
    <div className="form-group">
               
                <label htmlFor={name}>{label}:
                </label>

                    <input name={name} 
                    onChange={onChange}
                    placeholder={placeholder}
                    type={type} className="form-control form-control-lg" 
                    value={value}
                    className = {
                        classnames('form-control form-control-lg', {
                            'is-invalid':error
                        })
                    }
                    />
                    {error &&
 < div className = "invalid-feedback" > {error} </div>
                    }
</div>
                    

                   
  )
}


TextInputGroup.propTypes={
   name:PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   placeholder: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   onChange:PropTypes.func.isRequired,
   error:PropTypes.string.isRequired


}

TextInputGroup.defaultProps={
    type:'text'
}


export default TextInputGroup;
