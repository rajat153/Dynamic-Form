const queries = {
    submit: `INSERT INTO forms (form_title,form_fields) VALUES($1,$2) RETURNING id,form_title`,
    view: `Select * from forms`,
    singleform: (id)=>(`Select * from forms where id=${id}`)
};

module.exports = {queries}