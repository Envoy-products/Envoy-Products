module.exports = {
    // test_condition: value => {
    //     if (value !== "pending") {
    //         return true;
    //     }
    //     return false;
    // },
    check_url: url => {
        if(!url.includes('https://') && !url.includes('http://') && url.indexOf('/') !== 0) {
            url = 'https://' + url;
        } 
        return url;
    }, 
    get_current_year: () => {
        return new Date().getFullYear()
    },
    format_date: date => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return `${months[new Date(date).getMonth()]}&nbsp;${new Date(date).getDate()},&nbsp;${new Date(date).getFullYear()}.`
    },
    format_plural: (word, amount) => {
        if (amount != 1) {
            return `${word}s`;
        }
        return word;
    },
    format_cut_content: (content, length) => {
        return content.split(' ').slice(0, length).join(' ');
    },
    format_posts: content => {
        const regExp = new RegExp('\\n\\n', 'g');
        return content
            .toString()
            .replace(regExp, `</p>  
<p>`)
    },
    format_url: url => {
        return url
            .replace('http://', '')
            .replace('https://', '')
            .replace('www.', '')
            .split('/')[0]
            .split('?')[0];
    },
    is_same: (input1, input2) => input1 === input2,
    compare_string: (str1, str2) => {
        if (str1 == str2) return "selected";
    },
    is_selected: (val, objArr) => {
        if (objArr.length) {
            if(objArr.map(obj => obj.id).includes(val)) return "selected";
        } else {
            if(objArr.id == val) return "selected";
        }
    },
    is_included_in_obj_arr: (id, objArr) => {
        const ids = objArr.map(obj => obj.user_id);
        return ids.includes(id);
    },
    get_id: (id, objArr) => {
        const ids = objArr.map(obj => obj.user_id);
        const index = ids.findIndex(item => item == id);
        return objArr[index].id;
    },
    get_val: (id, objArr) => {
        const ids = objArr.map(obj => obj.user_id);
        const index = ids.findIndex(item => item == id);
        return objArr[index].rating_val;
    }
}