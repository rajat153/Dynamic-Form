const queries = {
    submit: `INSERT INTO Forms (form_title,form_fields) VALUES($1,$2) RETURNING id,form_title`,
    view: `Select * from Forms`,
    singleform: (id)=>(`Select * from Forms where id=${id}`)
};

module.exports = {queries}