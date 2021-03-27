const validateInput = (inputArr) => {
    let errors = [];
    inputArr.forEach(( {input_title, input_val, criteria} )=> {
        criteria.forEach(criteriaItem => {
            switch (criteriaItem) {
                case 'required':
                    if (input_val === undefined || input_val === '') {
                        errors.push(`"${input_title}" is a required field;`);
                    }
                    break;
                case 'url':
                    if(input_val) {
                        if (!validator.isURL(input_val)){
                            errors.push(`"${input_title}" must be a valid web url;`);
                        }
                    }
                    break;
                case 'email':
                    if(input_val) {
                        if (!validator.isEmail(input_val)){
                            errors.push(`"${input_title}" must be a valid email format;`);
                        }
                    }
                    break;
                case 'not_null':
                    if(input_val) {
                        if (input_val === "null") {
                            errors.push(`Please select a valid "${input_title}";`);
                        }
                    }
                    break;
                case 'positive_num':
                    if(input_val) {
                        if (input_val < 0) {
                            errors.push(`Please select a valid "${input_title}";`);
                        }
                    }
                    break;
                case 'char_len_8':
                    if(input_val) {
                        if (input_val.length < 8) {
                            errors.push(`"${input_title}" must be at least 8 characters long;`);
                        }
                    }
                    break;
                case 'non_empty_array':
                    if(input_val) {
                        if (input_val.length == 0) {
                            errors.push(`Please select at least one "${input_title}";`);
                        }
                    }
            }
        });
    });

    if (errors.length) {
        return errors.join(' ');
    }
};